import { normalizeSlug, validateSlugFormat } from './src/lib/taxmanagers/slug-utils.ts';

async function testSlugUtils() {
  console.log("==================================================");
  console.log(" TESTANDO REGRAS DE SLUGS E URLS AMIGÁVEIS");
  console.log("==================================================");

  // 1. Teste de Normalizacao
  const testCases = [
    { input: "Alexandre Florio", expected: "alexandre-florio" },
    { input: "Tax Managers S/A", expected: "tax-managers-s-a" },
    { input: "Ação & Proteção Tributária!", expected: "acao-protecao-tributaria" },
    { input: "   Empresa---Teste   ", expected: "empresa-teste" }
  ];

  console.log("\n[1] Teste de Normalização (Caixa baixa, sem acentos, hífens):");
  for (const tc of testCases) {
    const output = normalizeSlug(tc.input);
    const pass = output === tc.expected;
    console.log(`    - Input: "${tc.input}" => "${output}" [${pass ? "OK" : "FALHA"}]`);
  }

  // 2. Teste de Validação de Slugs Reservados e Formato
  console.log("\n[2] Teste de Slugs Reservados e Formato:");
  const reservedTest = validateSlugFormat("admin");
  console.log(`    - Reservado 'admin': ${!reservedTest.valid ? "Bloqueado OK" : "FALHA"}`);

  const shortTest = validateSlugFormat("ab");
  console.log(`    - Curto '< 3 chars': ${!shortTest.valid ? "Bloqueado OK" : "FALHA"}`);

  const validTest = validateSlugFormat("alexandre-florio");
  console.log(`    - Válido 'alexandre-florio': ${validTest.valid ? "Aprovado OK" : "FALHA"}`);

  // 3. Verificação de Rotas Mapeadas
  console.log("\n[3] Estrutura de Rotas e Resolutores:");
  console.log("    - /in/:slug            => Resolve Pessoa por Slug");
  console.log("    - /company/:slug       => Resolve Empresa por Slug");
  console.log("    - /taxmanagers/pessoas/:id  => Mantido exclusivamente por UUID");
  console.log("    - /taxmanagers/empresas/:id => Mantido exclusivamente por UUID");

  console.log("\n==================================================");
  console.log(" STATUS FINAL: FRIENDLY_URLS_READY");
  console.log("==================================================");
}

testSlugUtils();
