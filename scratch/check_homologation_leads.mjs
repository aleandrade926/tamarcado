import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env.homologation", "utf-8");
const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

const url = urlMatch ? urlMatch[1].trim().replace(/['"]/g, "") : "";
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

const supabase = createClient(url, key);

async function checkLeads() {
  console.log("Checking taxmanagers_leads in homologation DB...");
  const { data: leads, error } = await supabase
    .from("taxmanagers_leads")
    .select("id, nome, cargo, empresa, parceiro_id")
    .limit(5);

  if (error) {
    console.error("Error querying taxmanagers_leads:", error.message);
  } else {
    console.log(`Encontrados ${leads.length} leads em taxmanagers_leads:`);
    console.log(leads);
  }
}

checkLeads();
