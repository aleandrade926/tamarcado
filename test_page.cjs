const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    page.on('console', msg => {
      console.log(`[BROWSER ${msg.type().toUpperCase()}] ${msg.text()}`);
    });

    page.on('pageerror', err => {
      console.log(`[PAGE ERROR] ${err.toString()}`);
    });

    await page.goto('http://localhost:5174/market/tamarcado', { waitUntil: 'networkidle0' });
    
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log('Body Text:', bodyText);
    
    await browser.close();
  } catch (error) {
    console.error('Test error:', error);
  }
})();
