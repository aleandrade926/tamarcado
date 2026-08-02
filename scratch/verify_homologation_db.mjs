import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env", "utf-8");
const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

const url = urlMatch ? urlMatch[1].trim().replace(/['"]/g, "") : "";
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

console.log("Connecting to Supabase:", url);
const supabase = createClient(url, key);

async function verifyDb() {
  console.log("\n--- 1. CONFIRMAR TABELA E SEED UNICO DE OPORTUNIDADES ---");
  const { data: opps, error: oppErr } = await supabase
    .from("taxmanagers_opportunities")
    .select("*");

  if (oppErr) {
    console.error("Erro ao consultar taxmanagers_opportunities:", oppErr);
  } else {
    console.log("Tabela taxmanagers_opportunities encontrada!");
    console.log("Quantidade de oportunidades (Seed Idempotente):", opps.length);
    console.log("Oportunidade cadastrada:", opps[0]?.name);
    console.log("Descrição:", opps[0]?.description);
  }

  console.log("\n--- 2. CONFIRMAR TABELA DE MATCHES ---");
  const { data: matches, error: matchErr } = await supabase
    .from("taxmanagers_opportunity_matches")
    .select("*")
    .limit(5);

  if (matchErr) {
    console.error("Erro ao consultar taxmanagers_opportunity_matches:", matchErr);
  } else {
    console.log("Tabela taxmanagers_opportunity_matches encontrada!");
    console.log("Matches atuais:", matches.length);
  }
}

verifyDb();
