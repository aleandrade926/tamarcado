import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env", "utf-8");
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

const supabase = createClient("https://mqncmwtgpoflbbscrelp.supabase.co", key);

async function checkExistingTables() {
  console.log("Checking existing tables in mqncmwtgpoflbbscrelp...");
  
  const { data: leads, error: leadsErr } = await supabase.from("taxmanagers_leads").select("id").limit(1);
  console.log("taxmanagers_leads:", leadsErr ? leadsErr.message : `OK (${leads.length} rows)`);

  const { data: companies, error: compErr } = await supabase.from("taxmanagers_companies").select("id").limit(1);
  console.log("taxmanagers_companies:", compErr ? compErr.message : `OK (${companies.length} rows)`);

  const { data: opps, error: oppsErr } = await supabase.from("taxmanagers_opportunities").select("id").limit(1);
  console.log("taxmanagers_opportunities:", oppsErr ? oppsErr.message : `OK (${opps ? opps.length : 0} rows)`);

  const { data: matches, error: matchErr } = await supabase.from("taxmanagers_opportunity_matches").select("id").limit(1);
  console.log("taxmanagers_opportunity_matches:", matchErr ? matchErr.message : `OK (${matches ? matches.length : 0} rows)`);
}

checkExistingTables();
