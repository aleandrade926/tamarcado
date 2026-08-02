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

function searchKeys(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.includes("node_modules") || file.includes(".git") || file.includes("dist")) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      searchKeys(fullPath);
    } else if (file.endsWith(".env") || file.includes(".env") || file.endsWith(".json") || file.endsWith(".js") || file.endsWith(".ts") || file.endsWith(".md")) {
      try {
        const content = fs.readFileSync(fullPath, "utf-8");
        if (content.includes("pzvmqsagogxcxpoabbscw")) {
          console.log("Found pzvmqsagogxcxpoabbscw in file:", fullPath);
          const matches = content.match(/eyJ[a-zA-Z0-9_-]+\.eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/g);
          if (matches) {
            matches.forEach(token => {
              const ref = parseJwtRef(token);
              if (ref === "pzvmqsagogxcxpoabbscw") {
                console.log("MATCHED ANON KEY FOR pzvmqsagogxcxpoabbscw in", fullPath);
                console.log("Token snippet:", token.substring(0, 30) + "...");
              }
            });
          }
        }
      } catch (e) {}
    }
  }
}

console.log("Searching repository for pzvmqsagogxcxpoabbscw keys...");
searchKeys(".");
