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

if (!url || !key) {
  console.error("VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY são necessários.");
  console.log("Keys lidas:", Object.keys(envObj));
  process.exit(1);
}

const supabase = createClient(url, key);

(async () => {
  console.log("=== AUDITORIA SUPABASE DA BASE DE LEADS ===");
  console.log(`Conectando em Supabase URL: ${url}`);

  // 1. Query por Nome Amaral
  const { data: byName, error: err1 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "%Amaral%");

  console.log("\n--- 1. BUSCA POR NOME '%Amaral%' ---");
  if (err1) console.error("Erro err1:", err1);
  else console.log(`Encontrados ${byName?.length || 0} registros:`, JSON.stringify(byName, null, 2));

  // 2. Query por Empresa Komax
  const { data: byCompany, error: err2 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("empresa", "%Komax%");

  console.log("\n--- 2. BUSCA POR EMPRESA '%Komax%' ---");
  if (err2) console.error("Erro err2:", err2);
  else console.log(`Encontrados ${byCompany?.length || 0} registros:`, JSON.stringify(byCompany, null, 2));

  // 3. Query por LinkedIn com Ribeiro ou Amaral
  const { data: byLinkedin, error: err3 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .or("linkedin_key.ilike.%amaral%,url.ilike.%amaral%,linkedin_key.ilike.%ribeiro%,url.ilike.%ribeiro%");

  console.log("\n--- 3. BUSCA POR LINKEDIN KEY/URL ---");
  if (err3) console.error("Erro err3:", err3);
  else console.log(`Encontrados ${byLinkedin?.length || 0} registros:`, JSON.stringify(byLinkedin, null, 2));

})();
