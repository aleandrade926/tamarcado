import { chromium } from "playwright";

(async () => {
  console.log("=== INSPECIONANDO ESTADO REAL DA APLICAÇÃO VIA PLAYWRIGHT ===");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  page.on("console", (msg) => {
    const text = msg.text();
    if (text.includes("Amaral") || text.includes("Komax") || text.includes("[fetchQuarantineLeads]") || text.includes("[OpportunityModule]")) {
      console.log("[BROWSER CONSOLE]:", text);
    }
  });

  try {
    await page.goto("https://app.taxmanagers.com.br", { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    const emailInput = page.locator('input[type="email"]');
    if (await emailInput.isVisible()) {
      console.log("Tela de Login detectada.");
      // Tentar login se formulário visível
    }

    // Verificar se há leads no DOM ou na memória
    const cards = await page.locator("h4").allTextContents();
    console.log(`Total de h4 encontrados no DOM: ${cards.length}`);
    const amaralCard = cards.find(c => c.toLowerCase().includes("amaral"));
    console.log("Amaral card no DOM?:", amaralCard || "Não encontrado");

  } catch (e) {
    console.error("Erro na inspeção:", e);
  } finally {
    await browser.close();
  }
})();
