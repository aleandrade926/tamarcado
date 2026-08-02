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

const envObj = loadEnvFile(".env");
const url = envObj.VITE_SUPABASE_URL;
const key = envObj.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(url, key);

(async () => {
  console.log("=== INSPEÇÃO DE TODAS AS TABELAS SUPABASE ===");

  const { data: opps } = await supabase.from("taxmanagers_opportunities").select("*");
  console.log("Oportunidades:", opps?.length || 0, opps);

  const { data: matches } = await supabase.from("taxmanagers_opportunity_matches").select("*");
  console.log("Matches:", matches?.length || 0, matches);

  const { data: leads, error: errL } = await supabase.from("taxmanagers_leads").select("id, nome, empresa, cargo, import_status, parceiro_id").limit(10);
  console.log("Leads (limit 10):", leads?.length || 0, errL);

})();
