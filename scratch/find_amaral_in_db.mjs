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
  console.log("=== INSPECIONANDO BANCO SUPABASE PARA AMARAL RIBEIRO ===");

  // Query 1: buscar por url
  const { data: byUrl, error: e1 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("url", "%amaral-ribeiro%");

  console.log("1. Por url 'amaral-ribeiro':", byUrl, e1);

  // Query 2: buscar por linkedin_key
  const { data: byKey, error: e2 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("linkedin_key", "%amaral-ribeiro%");

  console.log("2. Por linkedin_key 'amaral-ribeiro':", byKey, e2);

  // Query 3: buscar por nome 'Amaral Ribeiro'
  const { data: byExactName, error: e3 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "Amaral Ribeiro");

  console.log("3. Por nome exato 'Amaral Ribeiro':", byExactName, e3);

  // Query 4: buscar por empresa 'Komax Testing'
  const { data: byExactCompany, error: e4 } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("empresa", "%Komax Testing%");

  console.log("4. Por empresa 'Komax Testing':", byExactCompany, e4);

  // Query 5: buscar todos os leads que tem import_status = 'quarantine' para ver se há limitação RLS ou permissão
  const { data: quarantineSample, count, error: e5 } = await supabase
    .from("taxmanagers_leads")
    .select("id, nome, empresa, cargo, import_status, created_at, updated_at", { count: "exact" })
    .eq("import_status", "quarantine")
    .limit(20);

  console.log(`\n5. Total de leads em quarentena na tabela: ${count}`);
  console.log("Amostra dos 20 primeiros em quarentena:", quarantineSample);

})();
