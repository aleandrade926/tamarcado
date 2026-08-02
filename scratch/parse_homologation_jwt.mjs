import fs from "fs";

if (!fs.existsSync(".env.homologation")) {
  console.log(".env.homologation file not found!");
  process.exit(1);
}

const content = fs.readFileSync(".env.homologation", "utf-8");
const keyMatch = content.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

if (!key) {
  console.log("No key in .env.homologation!");
  process.exit(1);
}

try {
  const parts = key.split(".");
  const header = JSON.parse(Buffer.from(parts[0], "base64").toString("utf-8"));
  const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8"));
  console.log("JWT Header:", header);
  console.log("JWT Payload:", payload);
  console.log("Ref from JWT:", payload.ref);
  console.log("Iss from JWT:", payload.iss);
} catch (e) {
  console.error("Failed to parse JWT:", e.message);
}
