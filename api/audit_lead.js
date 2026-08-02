import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: "Missing Supabase env vars", SUPABASE_URL: !!SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY: !!SUPABASE_SERVICE_ROLE_KEY });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    const { data: leads, error } = await supabase
      .from("taxmanagers_leads")
      .select("id, nome, parceiro_id, linkedin_key, slug, company_id")
      .ilike("nome", "Irvinng Lage%");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!leads || leads.length === 0) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const targetLead = leads[0];
    
    let countKey = 0;
    if (targetLead.linkedin_key) {
      const { count } = await supabase
        .from("taxmanagers_leads")
        .select("id", { count: "exact", head: true })
        .eq("linkedin_key", targetLead.linkedin_key);
      countKey = count;
    }

    const { count: countName } = await supabase
      .from("taxmanagers_leads")
      .select("id", { count: "exact", head: true })
      .ilike("nome", "Irvinng Lage%");

    return res.status(200).json({
      id: targetLead.id,
      nome: targetLead.nome,
      parceiro_id: targetLead.parceiro_id,
      linkedin_key: targetLead.linkedin_key,
      slug: targetLead.slug,
      company_id: targetLead.company_id,
      quantidade_mesmo_linkedin_key: countKey,
      quantidade_nome_semelhante: countName
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
