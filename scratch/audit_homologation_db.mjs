import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";

const envContent = fs.readFileSync(".env.homologation", "utf8");
const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

const url = urlMatch ? urlMatch[1].trim().replace(/['"]/g, "") : "";
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

const supabase = createClient(url, key);

(async () => {
  console.log("=== AUDITORIA NO BANCO DE HOMOLOGAÇÃO (pzvmqsaogxcxpoabbscw) ===");
  console.log("URL:", url);

  // 1. Buscar Amaral por nome
  const { data: dAmaral, error: eAmaral } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "%Amaral%");

  console.log(`\n1. Leads com 'Amaral' em Homologação (${dAmaral?.length || 0}):`);
  if (dAmaral && dAmaral.length > 0) {
    console.log(JSON.stringify(dAmaral, null, 2));
  } else {
    console.log("Error eAmaral:", eAmaral);
  }

  // 2. Buscar Komax por empresa
  const { data: dKomax, error: eKomax } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("empresa", "%Komax%");

  console.log(`\n2. Leads com 'Komax' em Homologação (${dKomax?.length || 0}):`);
  if (dKomax && dKomax.length > 0) {
    console.log(JSON.stringify(dKomax, null, 2));
  } else {
    console.log("Error eKomax:", eKomax);
  }

  // 3. Buscar por url ou linkedin_key com amaral ou ribeiro
  const { data: dUrl, error: eUrl } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .or("url.ilike.%amaral%,linkedin_key.ilike.%amaral%,url.ilike.%ribeiro%,linkedin_key.ilike.%ribeiro%");

  console.log(`\n3. Leads com 'amaral' ou 'ribeiro' na url/key (${dUrl?.length || 0}):`);
  if (dUrl && dUrl.length > 0) {
    console.log(JSON.stringify(dUrl, null, 2));
  }

  // 4. Total de leads em quarentena em Homologação
  const { count: countQ } = await supabase
    .from("taxmanagers_leads")
    .select("*", { count: "exact", head: true })
    .eq("import_status", "quarantine");

  const { count: countA } = await supabase
    .from("taxmanagers_leads")
    .select("*", { count: "exact", head: true })
    .eq("import_status", "active");

  const { count: countTotal } = await supabase
    .from("taxmanagers_leads")
    .select("*", { count: "exact", head: true });

  console.log(`\n4. Totais em Homologação -> Total: ${countTotal} | Quarentena: ${countQ} | Ativos: ${countA}`);

})();
