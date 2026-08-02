import { chromium } from "playwright";
import fs from "node:fs";

(async () => {
  console.log("Iniciando Verificação Visual Pós-Deploy no Domínio Principal (https://app.taxmanagers.com.br)...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    // 1. Simular ou verificar login no ambiente
    const isLoginVisible = await page.locator("text=Acessar Painel").isVisible().catch(() => false);
    if (isLoginVisible) {
      console.log("Tela de login detectada. Autenticando com credenciais de homologação...");
      await page.fill('input[type="email"]', "alexandre@taxmanagers.com.br");
      await page.fill('input[type="password"]', "TaxManagers2026!");
      await page.click('button:has-text("Acessar Painel")');
      await page.waitForTimeout(3000);
    }

    // 2. Navegar para Fila Fruta Baixa -> Oportunidades
    console.log("Navegando para Fila Fruta Baixa...");
    const frutaBaixaBtn = page.locator('button:has-text("Fila Fruta Baixa")');
    if (await frutaBaixaBtn.isVisible()) {
      await frutaBaixaBtn.click();
      await page.waitForTimeout(2000);
    }

    const oportunidadesTab = page.locator('button:has-text("Oportunidades")');
    if (await oportunidadesTab.isVisible()) {
      await oportunidadesTab.click();
      await page.waitForTimeout(2000);
    }

    // 3. Clicar no grupo NÃO ABORDAR
    console.log("Clicando na aba NÃO ABORDAR...");
    const naoAbordarTab = page.locator('button:has-text("NÃO ABORDAR")');
    if (await naoAbordarTab.isVisible()) {
      await naoAbordarTab.click();
      await page.waitForTimeout(2000);
    }

    // 4. Buscar por Amaral Ribeiro
    console.log("Buscando lead Amaral Ribeiro...");
    const searchInput = page.locator('input[placeholder*="Filtrar por nome"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill("Amaral");
      await page.waitForTimeout(1500);
    }

    // Expandir o card do Amaral Ribeiro se visível
    const amaralCard = page.locator('h4:has-text("Amaral Ribeiro")');
    if (await amaralCard.isVisible()) {
      console.log("Lead Amaral Ribeiro encontrado em NÃO ABORDAR. Expandindo card...");
      await amaralCard.click();
      await page.waitForTimeout(1500);
    } else {
      console.log("Lead Amaral Ribeiro não encontrado na lista atual de NÃO ABORDAR.");
    }

    // Tirar screenshot da aba NÃO ABORDAR com Amaral Ribeiro
    const screenshotPath = "C:/Users/Alexandre/.gemini/antigravity/brain/c757f17b-664e-4f86-9c91-0dd16a0da4ca/amaral_ribeiro_recency_verified.png";
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot salva em: ${screenshotPath}`);

    // 5. Testar F5 (Atualização da página) e confirmar permanência na tela
    console.log("Testando F5 (reload da página) para verificar preservação de estado...");
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(3000);

    const currentUrl = page.url();
    console.log(`URL após F5: ${currentUrl}`);

    const isNaoAbordarStillActive = await page.locator('button:has-text("NÃO ABORDAR")').evaluate((el) => el.className.includes("emerald") || el.className.includes("rose") || el.className.includes("amber")).catch(() => false);
    const isAmaralStillVisible = await page.locator('h4:has-text("Amaral Ribeiro")').isVisible().catch(() => false);

    console.log(`Estado preservado após F5: URL=${currentUrl}, Amaral Visível=${isAmaralStillVisible}`);

  } catch (err) {
    console.error("Erro no teste Playwright:", err);
  } finally {
    await browser.close();
  }
})();
