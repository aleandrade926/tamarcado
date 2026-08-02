import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env", "utf-8");
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

async function checkProject(baseUrl) {
  console.log("\nTesting project URL:", baseUrl);
  const client = createClient(baseUrl, key);
  try {
    const { data, error } = await client.from("taxmanagers_opportunities").select("*");
    if (error) {
      console.log("Error:", error.code, error.message, error.hint);
    } else {
      console.log("SUCCESS! Opportunities count:", data.length);
      console.log("Seed data:", data);
    }
  } catch (err) {
    console.log("Exception:", err.message);
  }
}

async function main() {
  await checkProject("https://mqncmwtgpoflbbscrelp.supabase.co");
  await checkProject("https://pzvmqsagogxcxpoabbscw.supabase.co");
}

main();
