import fs from "fs";
import path from "path";

function parseJwtRef(token) {
  if (!token) return null;
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8"));
    return payload.ref || payload.iss || null;
  } catch (err) {
    return null;
  }
}

function inspectEnvFile(filepath) {
  if (!fs.existsSync(filepath)) return;
  const content = fs.readFileSync(filepath, "utf-8");
  console.log(`\n--- Inspecting: ${path.basename(filepath)} ---`);
  
  const urlMatch = content.match(/(?:VITE_SUPABASE_URL|SUPABASE_URL)=(.*)/);
  const keyMatch = content.match(/(?:VITE_SUPABASE_ANON_KEY|SUPABASE_ANON_KEY)=(.*)/);

  const url = urlMatch ? urlMatch[1].trim().replace(/['"]/g, "") : null;
  const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : null;

  let urlRef = null;
  if (url) {
    const m = url.match(/https:\/\/([a-z0-9]+)\.supabase\.co/);
    if (m) urlRef = m[1];
  }

  const keyRef = parseJwtRef(key);

  console.log("URL Project Ref:", urlRef || "None");
  console.log("Anon Key Project Ref:", keyRef || "None");
  console.log("Matching Refs?", urlRef === keyRef ? "YES" : "NO / MISMATCH");
}

function main() {
  const files = [".env", ".env.example", ".env.masterkey", "src/todeacordo/.env"];
  files.forEach(inspectEnvFile);
}

main();
