import { chromium } from "playwright";
import path from "path";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });

  const htmlPath = "file://" + path.resolve("scratch/render_preview.html").replace(/\\/g, "/");
  await page.goto(htmlPath, { waitUntil: "load" });

  const elem1 = page.locator("#screenshot-1");
  await elem1.screenshot({ path: "scratch/1_fila_fruta_baixa.png" });

  const elem2 = page.locator("#screenshot-2");
  await elem2.screenshot({ path: "scratch/2_subaba_oportunidades_visible.png" });

  const elem3 = page.locator("#screenshot-3");
  await elem3.screenshot({ path: "scratch/3_modulo_oportunidades_aberto.png" });

  await browser.close();
  console.log("Screenshots salvos com sucesso.");
})();
