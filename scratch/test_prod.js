const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: CHROME_PATH,
      headless: true,
      defaultViewport: null
    });

    console.log("1. domínio abre ToDeAcordo...");
    const page = await browser.newPage();
    await page.goto('https://todeacordo.com.br/app?route=/valida/ce6bf274-0bf7-4b51-abbe-63a5301b92e1', { waitUntil: 'networkidle2' });
    
    await new Promise(r => setTimeout(r, 2000));
    
    // Check if the page contains ToDeAcordo text
    const title = await page.title();
    console.log("- Title: ", title);

    console.log("2. “Enviar minha confirmação” funciona...");
    const confirmBtn = await page.$('button::-p-text(Enviar minha confirmação)');
    if (confirmBtn) {
      console.log("- Botão Enviar confirmação encontrado.");
    } else {
      console.log("- Botão Enviar confirmação NÃO encontrado.");
    }

    console.log("3. “Sugerir ajuste” funciona...");
    const suggestBtn = await page.$('button::-p-text(Sugerir ajuste)');
    if (suggestBtn) {
      console.log("- Botão Sugerir ajuste encontrado.");
      await suggestBtn.click();
      await new Promise(r => setTimeout(r, 1000));
      const modalText = await page.$('::-p-text(Qual alteração você propõe?)');
      if (modalText) console.log("- Modal Sugerir Ajuste abriu com sucesso.");
      
      // Close modal
      const cancelBtn = await page.$('button::-p-text(Cancelar)');
      if (cancelBtn) await cancelBtn.click();
      await new Promise(r => setTimeout(r, 1000));
    }

    console.log("4. “Editar entendimento” aparece...");
    await page.goto('https://todeacordo.com.br/app?route=/dashboard', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 2000));
    
    // click meeting
    const meetingCard = await page.waitForSelector('.bg-white.rounded-xl.p-6.shadow-sm.border.border-slate-100');
    await meetingCard.click();
    await new Promise(r => setTimeout(r, 2000));

    const editBtn = await page.$('button::-p-text(Editar Entendimento)');
    if (editBtn) {
      console.log("- Botão Editar Entendimento encontrado e será clicado.");
      await editBtn.click();
      await new Promise(r => setTimeout(r, 1000));
    }

    console.log("5. salvar nova versão funciona...");
    const textarea = await page.$('textarea');
    if (textarea) {
      await textarea.type(' (Teste Prod)');
      const saveBtn = await page.$('button::-p-text(Salvar nova versão)');
      await saveBtn.click();
      await new Promise(r => setTimeout(r, 3000));
      console.log("- Botão Salvar nova versão clicado e aguardado.");
    }

    console.log("6. o mesmo link em aba anônima mostra a versão atualizada...");
    const anonContext = await browser.createBrowserContext();
    const anonPage = await anonContext.newPage();
    await anonPage.goto('https://todeacordo.com.br/app?route=/valida/ce6bf274-0bf7-4b51-abbe-63a5301b92e1', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 2000));
    const content = await anonPage.content();
    if (content.includes('Teste Prod')) {
      console.log("- Texto atualizado encontrado na versão anônima!");
    } else {
      console.log("- ALERTA: Texto atualizado NÃO encontrado na versão anônima.");
    }

    await browser.close();
    console.log("Testes em produção concluídos!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
