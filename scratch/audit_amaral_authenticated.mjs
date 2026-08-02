import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, "utf8");
  const env = {};
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  });
  return env;
}

const envObj = {
  ...loadEnvFile(".env"),
  ...loadEnvFile(".env.local"),
};

const url = envObj.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const key = envObj.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(url, key);

(async () => {
  console.log("=== AUDITORIA AUTENTICADA SUPABASE ===");
  const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({
    email: "alexandre@taxmanagers.com.br",
    password: "TaxManagers2026!"
  });

  if (authErr) {
    console.error("Erro na autenticação:", authErr);
    return;
  }

  console.log("Autenticado com sucesso como:", authData.user.email, "| UID:", authData.user.id);

  // 1. Procurar Amaral Ribeiro por nome
  const { data: amaralLeads, error: e1 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "%Amaral%");

  console.log("\n1. Leads encontrados por nome '%Amaral%':", amaralLeads?.length || 0);
  if (amaralLeads && amaralLeads.length > 0) {
    console.log(JSON.stringify(amaralLeads, null, 2));
  }

  // 2. Procurar Komax por empresa
  const { data: komaxLeads, error: e2 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("empresa", "%Komax%");

  console.log("\n2. Leads encontrados por empresa '%Komax%':", komaxLeads?.length || 0);
  if (komaxLeads && komaxLeads.length > 0) {
    console.log(JSON.stringify(komaxLeads, null, 2));
  }

  // 3. Procurar por URL do LinkedIn
  const { data: urlLeads, error: e3 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .or("url.ilike.%amaral-ribeiro%,linkedin_key.ilike.%amaral-ribeiro%");

  console.log("\n3. Leads encontrados por url/key 'amaral-ribeiro':", urlLeads?.length || 0);
  if (urlLeads && urlLeads.length > 0) {
    console.log(JSON.stringify(urlLeads, null, 2));
  }

  // 4. Procurar por Ribeiro em geral
  const { data: ribeiroLeads, error: e4 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "%Ribeiro%");

  console.log("\n4. Total de leads com 'Ribeiro' no nome:", ribeiroLeads?.length || 0);

})();
