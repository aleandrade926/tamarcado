async function liveSmokeTest() {
  console.log("=================================================");
  console.log("SMOKE TEST PÓS-DEPLOYMENT EM PRODUÇÃO");
  console.log("=================================================");

  const urls = [
    "https://app.taxmanagers.com.br",
    "https://masterkey-frontend-ew0cx5vbo-alexandre-s-projects-4e67015b.vercel.app"
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: "GET" });
      console.log(`URL: ${url} | Status HTTP: ${res.status} ${res.statusText}`);
    } catch (err) {
      console.log(`URL: ${url} | Erro: ${err.message}`);
    }
  }

  console.log("=================================================");
  console.log("SMOKE TEST REALIZADO - ZERO MUTATENÇÃO EM LEADS REAIS");
  console.log("=================================================");
}

liveSmokeTest();
