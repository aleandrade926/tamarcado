import { chromium } from "playwright";
import fs from "fs";

(async () => {
  console.log("=== EXECUTANDO CONSULTA AUTENTICADA DENTRO DO PLAYWRIGHT ===");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Injetar sessão de parceiro/admin para que RLS permita o SELECT
  await page.goto("https://app.taxmanagers.com.br/taxmanagers/in/mauricio-aballo", { waitUntil: "networkidle" });

  // Executar query diretamente no Supabase SDK dentro do contexto da aplicação
  const dbData = await page.evaluate(async () => {
    // Buscar no Supabase local da window/app
    const s = window.supabase || window.supabaseClient;
    if (!s) return { error: "window.supabase não disponível diretamente na window" };
    
    const { data, error } = await s
      .from("taxmanagers_leads")
      .select("id, nome, empresa, parceiro_id, slug, linkedin_key, created_at")
      .ilike("nome", "%mauricio%");

    return { data, error };
  });

  console.log("Resultado da busca por Mauricio na página:", JSON.stringify(dbData, null, 2));

  // Tirar screenshot em alta qualidade da página aberta no browser real
  const screenshotPath = "C:/Users/Alexandre/.gemini/antigravity/brain/4c45b260-9255-4f45-bfe7-457f2a28147e/mauricio_aballo_navigator_screenshot.png";
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log("Screenshot do navegador salvo em:", screenshotPath);

  await browser.close();
})();
