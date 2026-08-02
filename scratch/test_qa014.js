const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Starting puppeteer test...');
  const browser = await puppeteer.launch({ headless: 'new' });
  
  // 1. First context: The creator editing the meeting
  const context1 = await browser.createBrowserContext();
  const page1 = await context1.newPage();
  
  // Intercept requests to capture the Supabase payload
  let supabasePayload = null;
  let supabaseResponse = null;
  
  await page1.setRequestInterception(true);
  page1.on('request', request => {
    if (request.url().includes('supabase.co/rest/v1/consensus') && request.method() === 'POST' && request.headers()['prefer']?.includes('resolution=merge-duplicates')) {
      try {
        supabasePayload = JSON.parse(request.postData());
      } catch(e) {}
    }
    request.continue();
  });
  
  page1.on('response', async response => {
    if (response.url().includes('supabase.co/rest/v1/consensus') && response.request().method() === 'POST') {
      supabaseResponse = {
        status: response.status(),
        statusText: response.statusText()
      };
    }
  });

  console.log('Navigating to app...');
  await page1.goto('https://todeacordo.com.br/?route=/meeting/meet-paste-1783798174597', { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Wait for the consensus to generate/load
  await page1.waitForSelector('text/Acordos & Entendimentos', { timeout: 30000 });
  await page1.click('text/Acordos & Entendimentos');
  await new Promise(r => setTimeout(r, 2000));
  
  await page1.screenshot({ path: path.join(__dirname, 'before_edit.png') });
  
  console.log('Clicking "Editar Entendimento"...');
  await page1.waitForSelector('text/Editar Entendimento', { timeout: 10000 });
  await page1.click('text/Editar Entendimento');
  
  await page1.waitForSelector('textarea');
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Modifying inputs...');
  await page1.type('textarea', ' - Editado pelo script Puppeteer!');
  
  const addButtons = await page1.$$('text/+ Adicionar');
  if (addButtons.length >= 1) {
    await addButtons[0].click(); 
    await new Promise(r => setTimeout(r, 500));
    const inputs = await page1.$$('input');
    await inputs[inputs.length - 1].type('Novo acordo adicionado pelo teste');
  }

  const removeButtons = await page1.$$('text/🗑');
  if (removeButtons.length > 0) {
    await removeButtons[0].click();
  }

  await page1.screenshot({ path: path.join(__dirname, 'editing.png') });
  
  page1.on('dialog', async dialog => {
    console.log('Dialog opened:', dialog.message());
    await dialog.accept();
  });
  
  console.log('Clicking "Salvar nova versão"...');
  await page1.click('text/Salvar nova versão');
  
  await new Promise(r => setTimeout(r, 3000));

  await page1.screenshot({ path: path.join(__dirname, 'after_edit.png') });
  
  const validationUrlEl = await page1.$('a[href*="/valida/"]');
  const validationUrl = await page1.evaluate(el => el.href, validationUrlEl);
  const localValidationUrl = validationUrl.replace('/app?route=', '/?route=');
  console.log('Validation URL:', localValidationUrl);
  
  console.log('Opening anonymous context...');
  const context2 = await browser.createBrowserContext();
  const page2 = await context2.newPage();
  
  let loadedSupabaseData = null;
  page2.on('response', async response => {
    if (response.url().includes('supabase.co/rest/v1/consensus') && response.request().method() === 'GET') {
      try {
        const text = await response.text();
        loadedSupabaseData = JSON.parse(text);
      } catch(e) {}
    }
  });

  await page2.goto(localValidationUrl);
  await page2.waitForSelector('text/Acordos Principais', { timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page2.screenshot({ path: path.join(__dirname, 'anonymous_view.png') });
  
  fs.writeFileSync(path.join(__dirname, 'test_results.json'), JSON.stringify({
    payloadSent: supabasePayload,
    supabaseResponse: supabaseResponse,
    anonymousLoadData: loadedSupabaseData,
    validationUrl: localValidationUrl
  }, null, 2));
  
  console.log('Test complete!');
  await browser.close();
})();
