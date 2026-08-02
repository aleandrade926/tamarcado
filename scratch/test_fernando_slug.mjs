import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://mqncmwtgpoflbbscrelp.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDYyOTc4NSwiZXhwIjoyMDkwMjA1Nzg1fQ.vWNU5T0XQ1HAjBxZzLrMiZ2PhtVX-khp80oYLXh-5yQ';
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const RESERVED_SLUGS = new Set(["novo", "admin", "app", "login", "api", "settings", "empresas", "pessoas", "negocios", "oportunidades", "entregas", "in", "company", "p", "c", "taxmanagers"]);

function normalizeSlug(text) {
  if (!text) return "";
  return text.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
}

function validateSlugFormat(slug) {
  if (!slug || slug.length < 3) return { valid: false, error: "O slug deve ter pelo menos 3 caracteres." };
  if (slug.length > 60) return { valid: false, error: "O slug deve ter no máximo 60 caracteres." };
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return { valid: false, error: "O slug contém caracteres inválidos." };
  if (RESERVED_SLUGS.has(slug)) return { valid: false, error: "Este slug é um termo reservado do sistema." };
  return { valid: true };
}

async function checkSlugAvailability(table, slug, currentId) {
  const formatCheck = validateSlugFormat(slug);
  if (!formatCheck.valid) return { available: false, error: formatCheck.error };
  let query = supabase.from(table).select("id").eq("slug", slug);
  if (currentId) query = query.neq("id", currentId);
  const { data, error } = await query;
  if (error) return { available: false, error: error.message };
  if (data && data.length > 0) return { available: false, error: "Este slug já está em uso por outro registro." };
  return { available: true };
}

async function generateUniqueSlug(table, baseText, currentId) {
  let candidate = normalizeSlug(baseText);
  if (!candidate || candidate.length < 3) candidate = "registro-" + Math.random().toString(36).substring(2, 7);
  if (RESERVED_SLUGS.has(candidate)) candidate = `${candidate}-ref`;
  let uniqueSlug = candidate;
  let counter = 1;
  while (true) {
    const { available, error } = await checkSlugAvailability(table, uniqueSlug, currentId);
    if (error && !error.includes("já está em uso")) throw new Error(`Erro ao verificar slug: ${error}`);
    if (available) return uniqueSlug;
    counter++;
    uniqueSlug = `${candidate}-${counter}`;
    if (counter > 50) throw new Error("Falha ao gerar slug: máximo de tentativas alcançado.");
  }
}

async function ensureLeadSlug(leadId, nome) {
  try {
    const maxAttempts = 5;
    let currentAttempt = 0;
    while (currentAttempt < maxAttempts) {
      currentAttempt++;
      const { data: lead, error: fetchError } = await supabase.from("taxmanagers_leads").select("id, slug").eq("id", leadId).maybeSingle();
      if (fetchError || !lead) return { slug: null, error: "Lead não encontrado ou acesso negado (RLS)." };
      if (lead.slug) return { slug: lead.slug };
      const newSlug = await generateUniqueSlug("taxmanagers_leads", nome || "pessoa", leadId);
      const { data: updated, error: updateError } = await supabase.from("taxmanagers_leads").update({ slug: newSlug }).eq("id", leadId).is("slug", null).select("id, slug").maybeSingle();
      if (updateError) {
        if (updateError.code === "23505" || updateError.message.includes("unique")) continue;
        return { slug: null, error: `Falha ao salvar o slug: ${updateError.message}` };
      }
      if (updated && updated.slug) return { slug: updated.slug };
    }
    return { slug: null, error: "Número máximo de tentativas atingido na geração do slug." };
  } catch (err) {
    return { slug: null, error: `Erro inesperado: ${err?.message || err}` };
  }
}

async function run() {
  const result = await ensureLeadSlug("a74eaa79-d3ea-4c56-b3f3-c373bd8ebc61", "Fernando Silva");
  console.log(JSON.stringify(result, null, 2));
}

run();
