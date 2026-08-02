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
  console.log("=== AUDITORIA COMPLETA DE LEADS NO SUPABASE (SEM UPDATED_AT) ===");

  // 1. Total de leads no banco
  const { count: totalLeads } = await supabase
    .from("taxmanagers_leads")
    .select("*", { count: "exact", head: true });

  console.log("Total geral de leads na tabela taxmanagers_leads:", totalLeads);

  // 2. Total por import_status
  const { count: quarantineCount } = await supabase
    .from("taxmanagers_leads")
    .select("*", { count: "exact", head: true })
    .eq("import_status", "quarantine");

  const { count: activeCount } = await supabase
    .from("taxmanagers_leads")
    .select("*", { count: "exact", head: true })
    .eq("import_status", "active");

  console.log(`Leads em 'quarantine': ${quarantineCount} | Leads em 'active': ${activeCount}`);

  // 3. Buscar Amaral Ribeiro por nome
  const { data: dAmaral, error: eAmaral } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "%Amaral%");

  console.log(`\n1. Leads encontrados com 'Amaral' no nome (${dAmaral?.length || 0}):`);
  if (dAmaral && dAmaral.length > 0) {
    console.log(JSON.stringify(dAmaral, null, 2));
  }

  // 4. Buscar Komax por empresa
  const { data: dKomax, error: eKomax } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("empresa", "%Komax%");

  console.log(`\n2. Leads encontrados com 'Komax' na empresa (${dKomax?.length || 0}):`);
  if (dKomax && dKomax.length > 0) {
    console.log(JSON.stringify(dKomax, null, 2));
  }

  // 5. Buscar por URL ou key contendo amaral ou komax
  const { data: dUrl, error: eUrl } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .or("url.ilike.%amaral%,linkedin_key.ilike.%amaral%,url.ilike.%komax%,linkedin_key.ilike.%komax%");

  console.log(`\n3. Leads encontrados com 'amaral' ou 'komax' no URL/key (${dUrl?.length || 0}):`);
  if (dUrl && dUrl.length > 0) {
    console.log(JSON.stringify(dUrl, null, 2));
  }

  // 6. Buscar por Ribeiro em geral
  const { data: dRibeiro, error: eRibeiro } = await supabase
    .from("taxmanagers_leads")
    .select("id, nome, empresa, cargo, import_status, created_at, parceiro_id")
    .ilike("nome", "%Ribeiro%")
    .limit(20);

  console.log(`\n4. Leads com 'Ribeiro' no nome (mostrando os 20 primeiros de ${dRibeiro?.length || 0}):`);
  console.log(JSON.stringify(dRibeiro, null, 2));

})();
