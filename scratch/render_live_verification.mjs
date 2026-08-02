import { chromium } from "playwright";

(async () => {
  console.log("Executando Renderizador de Validação Visual de Produção...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });

  try {
    await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });
    await page.waitForTimeout(3000);

    // Ver se precisa logar
    const emailInput = page.locator('input[type="email"]');
    if (await emailInput.isVisible()) {
      console.log("Autenticando...");
      await emailInput.fill("alexandre@taxmanagers.com.br");
      await page.fill('input[type="password"]', "TaxManagers2026!");
      await page.click('button:has-text("Acessar Painel")');
      await page.waitForTimeout(4000);
    }

    // Ir para Fila Fruta Baixa
    console.log("Navegando para Fila Fruta Baixa -> Oportunidades...");
    await page.click('button:has-text("Fila Fruta Baixa")');
    await page.waitForTimeout(2000);

    await page.click('button:has-text("Oportunidades")');
    await page.waitForTimeout(2000);

    // Clicar no grupo NÃO ABORDAR
    console.log("Selecionando Grupo NÃO ABORDAR...");
    await page.click('button:has-text("NÃO ABORDAR")');
    await page.waitForTimeout(2000);

    // Tentar atualizar amostra se houver botão
    const refreshBtn = page.locator('button:has-text("Atualizar Amostra")');
    if (await refreshBtn.isVisible()) {
      console.log("Atualizando Amostra de Leads...");
      await refreshBtn.click();
      await page.waitForTimeout(3000);
    }

    // Buscar Amaral
    const searchInput = page.locator('input[placeholder*="Filtrar por nome"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill("Amaral");
      await page.waitForTimeout(1500);
    }

    // Se Amaral card estiver visível, expandir
    const amaralHeader = page.locator('h4:has-text("Amaral")');
    if (await amaralHeader.isVisible()) {
      console.log("Amaral encontrado! Expandindo card...");
      await amaralHeader.click();
      await page.waitForTimeout(1500);
    }

    const screenshotPath = "C:/Users/Alexandre/.gemini/antigravity/brain/c757f17b-664e-4f86-9c91-0dd16a0da4ca/amaral_ribeiro_recency_verified.png";
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot salva em ${screenshotPath}`);

  } catch (err) {
    console.error("Erro na validação visual:", err);
  } finally {
    await browser.close();
  }
})();
