import { chromium } from "playwright";
import fs from "fs";

(async () => {
  console.log("Iniciando Playwright Browser para verificação visual da Produção...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Injetar sessão simulada ou acessar a página de produção
  await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });

  // Executar no contexto da página: simular estado de sessão autenticada no React / localStorage
  await page.evaluate(() => {
    const mockSession = {
      access_token: "mock-token",
      refresh_token: "mock-refresh",
      user: {
        id: "mock-user-id",
        email: "parceiro@taxmanagers.com.br"
      }
    };
    localStorage.setItem("sb-mqncmwtgpoflbbscrelp-auth-token", JSON.stringify(mockSession));
  });

  // Recarregar a página para o Supabase client ler o localStorage
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // 1. Screenshot da Aba Fila Fruta Baixa no Menu Lateral
  const frutaBaixaBtn = page.locator('button:has-text("Fila Fruta Baixa")').first();
  const frutaBaixaExists = await frutaBaixaBtn.isVisible().catch(() => false);
  console.log("Botao Fila Fruta Baixa visivel no menu?", frutaBaixaExists);

  if (frutaBaixaExists) {
    await frutaBaixaBtn.click();
    await page.waitForTimeout(1500);
  }

  await page.screenshot({ path: "scratch/1_fila_fruta_baixa.png", fullPage: true });
  console.log("Screenshot 1 salvo: scratch/1_fila_fruta_baixa.png");

  // 2. Screenshot mostrando a Sub-aba "Oportunidades — Receita Sintonia"
  const subabaOportunidades = page.locator('button:has-text("Oportunidades")').first();
  const subabaExists = await subabaOportunidades.isVisible().catch(() => false);
  console.log("Subaba Oportunidades visivel?", subabaExists);

  await page.screenshot({ path: "scratch/2_subaba_oportunidades_visible.png", fullPage: true });
  console.log("Screenshot 2 salvo: scratch/2_subaba_oportunidades_visible.png");

  // 3. Screenshot do Módulo de Oportunidades Aberto
  if (subabaExists) {
    await subabaOportunidades.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: "scratch/3_modulo_oportunidades_aberto.png", fullPage: true });
    console.log("Screenshot 3 salvo: scratch/3_modulo_oportunidades_aberto.png");
  }

  await browser.close();
  console.log("Processo concluído.");
})();
