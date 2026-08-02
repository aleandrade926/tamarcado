import { chromium } from "playwright";
import fs from "fs";

(async () => {
  console.log("Iniciando captura visual Playwright na aplicação...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Acessar servidor local Vite
  await page.goto("http://localhost:5173", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // Injetar script para forçar renderização da tab Fruta Baixa e Oportunidades se estiver em tela de login
  await page.evaluate(() => {
    // Procurar elementos e clicar se disponíveis
    const buttons = Array.from(document.querySelectorAll("button"));
    const frutaBaixa = buttons.find(b => b.textContent?.includes("Fila Fruta Baixa"));
    if (frutaBaixa) frutaBaixa.click();
  });

  await page.screenshot({ path: "scratch/1_fila_fruta_baixa.png", fullPage: true });
  console.log("Screenshot 1 salvo em scratch/1_fila_fruta_baixa.png");

  // Inspecionar DOM local
  const content = await page.content();
  console.log("Conteudo local possui Fila Fruta Baixa:", content.includes("Fila Fruta Baixa"));
  console.log("Conteudo local possui Oportunidades:", content.includes("Oportunidades"));

  await page.screenshot({ path: "scratch/2_subaba_oportunidades_visible.png", fullPage: true });
  console.log("Screenshot 2 salvo em scratch/2_subaba_oportunidades_visible.png");

  await browser.close();
})();
