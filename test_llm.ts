import handler from './api/foot_in_the_door_lab.js';
import { validateInput, validateOutput, buildBlockedOutput } from './src/lib/taxmanagers/foot-in-the-door-agent.ts';

// Mocker of Web Request
function createRequest(bodyObj) {
  return {
    method: 'POST',
    text: async () => JSON.stringify(bodyObj)
  };
}

async function runTestCase(name, payload) {
  console.log(`\n\n=== ${name} ===\n`);
  
  // 1. Validation TS
  const inputErrors = validateInput(payload);
  if (inputErrors.length > 0) {
     console.log("-> Bloqueado pelo validador de entrada:");
     console.log(JSON.stringify(buildBlockedOutput(inputErrors, payload.informacoes_nao_confirmadas || []), null, 2));
     return;
  }
  
  console.log("-> Enviando para LLaMA 3.3 70b...");
  const req = createRequest(payload);
  const response = await handler(req);
  const responseText = await response.text();
  
  console.log("-> Resposta bruta da API:");
  const apiResult = JSON.parse(responseText);
  
  const debug = apiResult._debug_metadata;
  if(debug) {
      console.log(`\nCusto (Tokens): Prompt=${debug.prompt_tokens}, Completion=${debug.completion_tokens}`);
      console.log(`Tempo de resposta: ${debug.execution_time_ms}ms`);
      delete apiResult._debug_metadata;
  }
  
  console.log(JSON.stringify(apiResult, null, 2));
  
  console.log("\n-> Resultado PÓS-VALIDAÇÃO TS:");
  const finalResult = validateOutput(apiResult);
  console.log(JSON.stringify(finalResult, null, 2));
}

const casoA = {
  nome: "Juliana Silva",
  cargo: "CFO",
  empresa: "Techlog Logística",
  setor: "Logística e Transportes",
  vinculo_atual_confirmado: true,
  historico: ["Conversa inicial há 6 meses"],
  fatos_confirmados: ["Techlog fatura 150M", "Opera frota própria", "Muitas operações interestaduais"],
  hipoteses_permitidas: [],
  informacoes_nao_confirmadas: []
};

const casoB = {
  nome: "Marcos Antônio",
  cargo: "Gerente Tributário",
  empresa: "Antiga Empresa SA",
  setor: "Varejo",
  vinculo_atual_confirmado: false,
  historico: [],
  fatos_confirmados: ["Trabalhou lá de 2018 a 2022"],
  hipoteses_permitidas: [],
  informacoes_nao_confirmadas: ["Onde está trabalhando hoje"]
};

const casoC = {
  nome: "Fernanda",
  cargo: "Analista",
  empresa: "Empresa XPTO",
  setor: "",
  vinculo_atual_confirmado: true,
  historico: [],
  fatos_confirmados: [],
  hipoteses_permitidas: [],
  informacoes_nao_confirmadas: ["Setor", "Operações", "Regime tributário"]
};

async function run() {
  await runTestCase("CASO A: Pronto", casoA);
  await runTestCase("CASO B: Vínculo antigo", casoB);
  await runTestCase("CASO C: Dados superficiais", casoC);
}

run();
