import { supabase } from "../supabase";

export const RESERVED_SLUGS = new Set([
  "novo",
  "admin",
  "app",
  "login",
  "api",
  "settings",
  "empresas",
  "pessoas",
  "negocios",
  "oportunidades",
  "entregas",
  "in",
  "company",
  "p",
  "c",
  "taxmanagers"
]);

export function normalizeSlug(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9]+/g, "-")     // Substitui caracteres nao alfanumericos por hífen
    .replace(/^-+|-+$/g, "")          // Remove hifens no inicio/fim
    .replace(/-{2,}/g, "-");          // Substitui hifens duplicados
}

export function validateSlugFormat(slug: string): { valid: boolean; error?: string } {
  if (!slug || slug.length < 3) {
    return { valid: false, error: "O slug deve ter pelo menos 3 caracteres." };
  }
  if (slug.length > 60) {
    return { valid: false, error: "O slug deve ter no máximo 60 caracteres." };
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return { valid: false, error: "O slug contém caracteres inválidos. Use apenas letras minúsculas, números e hífens." };
  }
  if (RESERVED_SLUGS.has(slug)) {
    return { valid: false, error: "Este slug é um termo reservado do sistema." };
  }
  return { valid: true };
}

export async function checkSlugAvailability(
  table: "taxmanagers_leads" | "taxmanagers_companies",
  slug: string,
  currentId?: string
): Promise<{ available: boolean; error?: string }> {
  const formatCheck = validateSlugFormat(slug);
  if (!formatCheck.valid) {
    return { available: false, error: formatCheck.error };
  }

  let query = supabase.from(table).select("id").eq("slug", slug);
  if (currentId) {
    query = query.neq("id", currentId);
  }

  const { data, error } = await query;
  if (error) {
    return { available: false, error: error.message };
  }

  if (data && data.length > 0) {
    return { available: false, error: "Este slug já está em uso por outro registro." };
  }

  return { available: true };
}

export async function generateUniqueSlug(
  table: "taxmanagers_leads" | "taxmanagers_companies",
  baseText: string,
  currentId?: string
): Promise<string> {
  let candidate = normalizeSlug(baseText);
  if (!candidate || candidate.length < 3) {
    candidate = "registro-" + Math.random().toString(36).substring(2, 7);
  }

  if (RESERVED_SLUGS.has(candidate)) {
    candidate = `${candidate}-ref`;
  }

  let uniqueSlug = candidate;
  let counter = 1;

  while (true) {
    const { available, error } = await checkSlugAvailability(table, uniqueSlug, currentId);
    if (error && !error.includes("já está em uso")) {
      throw new Error(`Erro ao verificar slug: ${error}`);
    }
    if (available) {
      return uniqueSlug;
    }
    counter++;
    uniqueSlug = `${candidate}-${counter}`;
    
    if (counter > 50) {
      throw new Error("Falha ao gerar slug: máximo de tentativas alcançado.");
    }
  }
}

export async function ensureLeadSlug(
  leadId: string, 
  nome: string
): Promise<{ slug: string | null; error?: string }> {
  try {
    const maxAttempts = 5;
    let currentAttempt = 0;

    while (currentAttempt < maxAttempts) {
      currentAttempt++;
      
      // 1. Busca o estado mais recente para checar se já tem slug
      const { data: lead, error: fetchError } = await supabase
        .from("taxmanagers_leads")
        .select("id, slug")
        .eq("id", leadId)
        .maybeSingle();

      if (fetchError || !lead) {
        return { slug: null, error: "Lead não encontrado ou acesso negado (RLS)." };
      }

      if (lead.slug) {
        return { slug: lead.slug };
      }

      // 2. Gera um candidato a slug
      const newSlug = await generateUniqueSlug("taxmanagers_leads", nome || "pessoa", leadId);

      // 3. UPDATE Atômico e Seguro
      const { data: updated, error: updateError } = await supabase
        .from("taxmanagers_leads")
        .update({ slug: newSlug })
        .eq("id", leadId)
        .is("slug", null)
        .select("id, slug")
        .maybeSingle();

      if (updateError) {
        // Se for violação de unicidade (ex: 23505 - unique_violation), tenta novamente gerando novo sufixo
        if (updateError.code === "23505" || updateError.message.includes("unique")) {
          continue;
        }
        return { slug: null, error: `Falha ao salvar o slug: ${updateError.message}` };
      }

      // 4. Sucesso: exigência de retorno de exato um registro
      if (updated && updated.slug) {
        return { slug: updated.slug };
      }

      // 5. Zero registros afetados (ex: corrida onde outra requisição setou o slug antes do UPDATE)
      // Retornamos ao começo do loop para que o fetch inicial pegue e retorne o slug existente
    }
    
    return { slug: null, error: "Número máximo de tentativas atingido na geração do slug." };
  } catch (err: any) {
    return { slug: null, error: `Erro inesperado: ${err?.message || err}` };
  }
}
