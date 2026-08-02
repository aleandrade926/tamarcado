import { generateFootInTheDoorAnalysis, FootInTheDoorInput } from './src/lib/taxmanagers/foot-in-the-door-agent';

console.log("=== CASO A: Pronto ===");
const casoA: FootInTheDoorInput = {
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
console.log(JSON.stringify(generateFootInTheDoorAnalysis(casoA), null, 2));

console.log("\n=== CASO B: Vínculo antigo ===");
const casoB: FootInTheDoorInput = {
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
console.log(JSON.stringify(generateFootInTheDoorAnalysis(casoB), null, 2));

console.log("\n=== CASO C: Dados superficiais ===");
const casoC: FootInTheDoorInput = {
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
console.log(JSON.stringify(generateFootInTheDoorAnalysis(casoC), null, 2));
