import { createServer } from "vite";
import { chromium } from "playwright";
import react from "@vitejs/plugin-react";
import path from "node:path";

(async () => {
  console.log("Iniciando servidor Vite local para renderizar captura exata do Amaral Ribeiro...");
  const server = await createServer({
    configFile: false,
    root: path.resolve("c:/Users/Alexandre/masterkey-frontend"),
    server: { port: 5199 },
    plugins: [react()],
  });
  await server.listen();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });

  try {
    await page.goto("http://localhost:5199", { waitUntil: "networkidle" });
    await page.waitForTimeout(3000);

    // Se estiver na tela de login, preencher e acessar
    const emailField = page.locator('input[type="email"]');
    if (await emailField.isVisible()) {
      await emailField.fill("alexandre@taxmanagers.com.br");
      await page.fill('input[type="password"]', "TaxManagers2026!");
      const loginBtn = page.locator('button:has-text("Acessar"), button:has-text("Entrar")');
      if (await loginBtn.isVisible()) {
        await loginBtn.click();
        await page.waitForTimeout(3000);
      }
    }

    // Clicar em Fila Fruta Baixa -> Oportunidades
    const fbBtn = page.locator('button:has-text("Fila Fruta Baixa")');
    if (await fbBtn.isVisible()) {
      await fbBtn.click();
      await page.waitForTimeout(1500);
    }

    const oppTab = page.locator('button:has-text("Oportunidades")');
    if (await oppTab.isVisible()) {
      await oppTab.click();
      await page.waitForTimeout(1500);
    }

    // Clicar em NÃO ABORDAR
    const naoAbordarTab = page.locator('button:has-text("NÃO ABORDAR")');
    if (await naoAbordarTab.isVisible()) {
      await naoAbordarTab.click();
      await page.waitForTimeout(1500);
    }

    const screenshotPath = "C:/Users/Alexandre/.gemini/antigravity/brain/c757f17b-664e-4f86-9c91-0dd16a0da4ca/amaral_ribeiro_recency_verified.png";
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot salva em: ${screenshotPath}`);

  } catch (e) {
    console.error("Erro:", e);
  } finally {
    await browser.close();
    await server.close();
  }
})();
