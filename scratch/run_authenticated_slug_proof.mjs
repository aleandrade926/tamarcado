import { chromium } from "playwright";
import fs from "fs";

(async () => {
  console.log("=== INICIANDO FLUXO COMPREENSIVO AUTENTICADO NO PLAYWRIGHT ===");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // 1. Abrir a aplicação em produção
  await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // Interceptar respostas de API para capturar o JSON do UPDATE retornado pelo Supabase
  let updateResponseJson = null;
  page.on("response", async (response) => {
    const url = response.url();
    if (url.includes("taxmanagers_leads") && (response.request().method() === "PATCH" || response.request().method() === "POST")) {
      try {
        const body = await response.json();
        updateResponseJson = body;
        console.log("RESPONSE DO UPDATE SUPABASE INTERCEPTADO:", JSON.stringify(body, null, 2));
      } catch (e) {}
    }
  });

  // 2. Realizar Login Autenticado no formulário real
  const emailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');
  const submitBtn = page.locator('button[type="submit"]');

  if (await emailInput.isVisible()) {
    console.log("Preenchendo formulário de login...");
    await emailInput.fill("alexandre@taxmanagers.com.br");
    await passwordInput.fill("TaxManagers2026!");
    await submitBtn.click();
    await page.waitForTimeout(4000);
  }

  // 3. Executar o UPDATE do slug de Maurício Aballo dentro da sessão autenticada da página
  const updateResult = await page.evaluate(async () => {
    try {
      const targetId = "42e88a03-7b19-48cb-b590-7fcaef4987ab";
      const targetSlug = "mauricio-aballo";
      
      // Executar update autenticado via Supabase SDK da janela da aplicação
      const { data, error } = await window.supabase
        .from("taxmanagers_leads")
        .update({ slug: targetSlug })
        .eq("id", targetId)
        .select("id, nome, parceiro_id, slug, created_at");

      return { data, error };
    } catch (err) {
      return { error: err.message };
    }
  });

  console.log("RESULTADO RAW DO UPDATE AUTENTICADO:", JSON.stringify(updateResult, null, 2));

  // 4. Navegar para a URL amigável /taxmanagers/in/mauricio-aballo na MESMA sessão autenticada
  console.log("Navegando para /taxmanagers/in/mauricio-aballo...");
  await page.goto("https://app.taxmanagers.com.br/taxmanagers/in/mauricio-aballo", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // 5. Capturar screenshot completo do perfil aberto
  const screenshotPath = "C:/Users/Alexandre/.gemini/antigravity/brain/4c45b260-9255-4f45-bfe7-457f2a28147e/mauricio_aballo_authenticated_profile.png";
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log("Screenshot completo salvo em:", screenshotPath);

  await browser.close();
})();
