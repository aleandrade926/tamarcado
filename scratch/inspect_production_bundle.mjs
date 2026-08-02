import https from "https";

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, data }));
    }).on("error", reject);
  });
}

(async () => {
  console.log("=================================================");
  console.log("INSPEÇÃO TÉCNICA VISUAL / BUNDLE DA PRODUÇÃO LIVE");
  console.log("=================================================");

  // 1. Fetch index.html
  const htmlRes = await fetchUrl("https://app.taxmanagers.com.br");
  console.log("HTML Status:", htmlRes.status);

  // 2. Extrair os caminhos dos arquivos JS no html
  const jsMatches = [...htmlRes.data.matchAll(/src="(\/assets\/[^"]+\.js)"/g)].map(m => m[1]);
  console.log("JS Assets encontrados:", jsMatches);

  let allJsCode = "";
  for (const jsPath of jsMatches) {
    const fullUrl = `https://app.taxmanagers.com.br${jsPath}`;
    console.log(`Baixando JS: ${fullUrl}...`);
    const jsRes = await fetchUrl(fullUrl);
    allJsCode += jsRes.data + "\n";
  }

  console.log("Tamanho Total do JS de Produção:", allJsCode.length, "bytes");

  // 3. Checagem de Presença no Bundle Compilado de Produção
  const checks = {
    hasFrutaBaixa: allJsCode.includes("Fila Fruta Baixa"),
    hasOportunidades: allJsCode.includes("Oportunidades"),
    hasReceitaSintonia: allJsCode.includes("Receita Sintonia"),
    hasReadonlyNotice: allJsCode.includes("Versão inicial em modo leitura"),
    hasDiagnostico: allJsCode.includes("Tax Managers — Diagnóstico Receita Sintonia"),
    hasPrioridadeTab: allJsCode.includes("PRIORIDADE"),
    hasValidarTab: allJsCode.includes("VALIDAR"),
    hasNaoAbordarTab: allJsCode.includes("NÃO ABORDAR"),
  };

  console.log("=================================================");
  console.log("RESULTADOS DA VERIFICAÇÃO DO BUNDLE DE PRODUÇÃO:");
  console.log("=================================================");
  console.log(JSON.stringify(checks, null, 2));
  console.log("=================================================");
})();
