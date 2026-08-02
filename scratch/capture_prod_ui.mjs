import { chromium } from "playwright";
import fs from "fs";

(async () => {
  console.log("Iniciando navegador Playwright...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Acessando https://app.taxmanagers.com.br...");
  await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // 1. Tentar auto-login ou preencher dados de login de teste se houver formulário
  const emailInput = page.locator('input[type="email"], input[placeholder*="email" i], input[name="email"]').first();
  if (await emailInput.isVisible().catch(() => false)) {
    console.log("Formulário de login detectado. Preenchendo credenciais...");
    await emailInput.fill("parceiro@taxmanagers.com.br");
    const submitBtn = page.locator('button[type="submit"], button:has-text("Entrar"), button:has-text("Acessar")').first();
    if (await submitBtn.isVisible().catch(() => false)) {
      await submitBtn.click();
      await page.waitForTimeout(3000);
    }
  }

  // 2. Tirar screenshot da navegação / Fila Fruta Baixa no menu
  console.log("Tirando screenshot da Fila Fruta Baixa...");
  const frutaBaixaBtn = page.locator('button:has-text("Fila Fruta Baixa")').first();
  if (await frutaBaixaBtn.isVisible().catch(() => false)) {
    await frutaBaixaBtn.click();
    await page.waitForTimeout(2000);
  }

  await page.screenshot({ path: "scratch/1_fila_fruta_baixa.png", fullPage: true });
  console.log("Screenshot 1 salvo em scratch/1_fila_fruta_baixa.png");

  // 3. Tirar screenshot com a subaba "Oportunidades" visível
  const subabaOportunidades = page.locator('button:has-text("Oportunidades")').first();
  const subabaVisible = await subabaOportunidades.isVisible().catch(() => false);
  console.log("Subaba Oportunidades visivel no DOM?", subabaVisible);

  await page.screenshot({ path: "scratch/2_subaba_oportunidades_visible.png", fullPage: true });
  console.log("Screenshot 2 salvo em scratch/2_subaba_oportunidades_visible.png");

  // 4. Clicar na subaba "Oportunidades" para abrir o módulo
  if (subabaVisible) {
    await subabaOportunidades.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: "scratch/3_modulo_oportunidades_aberto.png", fullPage: true });
    console.log("Screenshot 3 salvo em scratch/3_modulo_oportunidades_aberto.png");
  }

  await browser.close();
  console.log("Capturas concluídas com sucesso.");
})();
