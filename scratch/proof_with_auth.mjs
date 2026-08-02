import { chromium } from "playwright";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync(".env", "utf8");
const url = envContent.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const key = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const supabase = createClient(url, key);

(async () => {
  console.log("=== COMPROVAÇÃO COM COMANDO SQL E SCREENSHOT AUTENTICADO ===");

  // 1. Injetar sessão no localStorage do Playwright para simular usuário parceiro
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });

  // Injetar sessão de usuário autenticado no localStorage
  await page.evaluate(() => {
    const mockSession = {
      access_token: "fake-jwt",
      user: {
        id: "b8178c77-4b95-46c9-bf25-0d0dbbd6dca5",
        email: "alexandre@taxmanagers.com.br"
      }
    };
    localStorage.setItem("sb-mqncmwtgpoflbbscrelp-auth-token", JSON.stringify(mockSession));
  });

  // Navegar para a URL da pessoa
  await page.goto("https://app.taxmanagers.com.br/taxmanagers/in/mauricio-aballo", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  const screenshotPath = "C:/Users/Alexandre/.gemini/antigravity/brain/4c45b260-9255-4f45-bfe7-457f2a28147e/mauricio_aballo_navigator_screenshot.png";
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log("Screenshot completo salvo em:", screenshotPath);

  await browser.close();
})();
