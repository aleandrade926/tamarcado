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
  console.log("=== PESQUISA EM TODAS AS TABELAS DO SUPABASE ===");

  // 1. Procurar em taxmanagers_leads sem filtro de status
  const { data: leads, error } = await supabase
    .from("taxmanagers_leads")
    .select("id, nome, empresa, cargo, status, import_status, parceiro_id, created_at, updated_at, linkedin_key, url")
    .or("nome.ilike.%amaral%,empresa.ilike.%komax%,cargo.ilike.%amaral%");

  console.log("Resultado taxmanagers_leads:", JSON.stringify(leads, null, 2));

  // 2. Procurar em taxmanagers_sales
  const { data: sales } = await supabase
    .from("taxmanagers_sales")
    .select("*")
    .or("cliente_nome.ilike.%amaral%,empresa_nome.ilike.%komax%");

  console.log("Resultado taxmanagers_sales:", JSON.stringify(sales, null, 2));

  // 3. Procurar no arquivo orphan_leads_review.md
  if (fs.existsSync("orphan_leads_review.md")) {
    const md = fs.readFileSync("orphan_leads_review.md", "utf8");
    const lines = md.split("\n");
    const matches = lines.filter(l => l.toLowerCase().includes("amaral") || l.toLowerCase().includes("komax"));
    console.log(`\nFound ${matches.length} matches in orphan_leads_review.md:`, matches);
  }
})();
