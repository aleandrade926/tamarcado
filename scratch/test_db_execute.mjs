import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env", "utf-8");
const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

const url = urlMatch ? urlMatch[1].trim().replace(/['"]/g, "") : "";
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

const supabase = createClient(url, key);

async function testTables() {
  console.log("Checking if taxmanagers_opportunities table exists...");
  const { data, error } = await supabase
    .from("taxmanagers_opportunities")
    .select("*")
    .limit(5);

  if (error) {
    console.log("Query result error:", error.code, error.message);
  } else {
    console.log("Table taxmanagers_opportunities exists! Data count:", data.length, data);
  }
}

testTables();
