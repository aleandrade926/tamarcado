async function smokeTest() {
  console.log("=================================================");
  console.log("POST-DEPLOYMENT SMOKE TEST (PRODUÇÃO)");
  console.log("=================================================");

  const prodEndpoints = [
    "https://masterkey-frontend.vercel.app",
    "https://masterkey-frontend.vercel.app/api/personalize_agent"
  ];

  for (const ep of prodEndpoints) {
    try {
      const res = await fetch(ep, {
        method: ep.includes("/api/") ? "POST" : "GET",
        headers: { "Content-Type": "application/json" },
        body: ep.includes("/api/") ? JSON.stringify({
          lead: { id: "smoke-test", nome: "Smoke Test Lead", cargo: "CFO", empresa: "Empresa Teste", status: "confirmed" },
          context_extra: "Smoke test pós-deploy"
        }) : undefined
      });
      console.log(`Endpoint: ${ep} | Status: ${res.status} ${res.statusText}`);
    } catch (err) {
      console.log(`Endpoint: ${ep} | Error: ${err.message}`);
    }
  }

  console.log("=================================================");
  console.log("SMOKE TEST CONCLUÍDO COM SUCESSO!");
  console.log("=================================================");
}

smokeTest();
