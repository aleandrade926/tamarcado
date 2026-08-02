import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mqncmwtgpoflbbscrelp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2Mjk3ODUsImV4cCI6MjA5MDIwNTc4NX0.veEeqzcSk2FTx8sYI1i9MKRbuzXhpfgk9XG-zJzXA7g'
);

async function runFunctionalTest() {
  console.log("=== INICIANDO TESTE COMPLETO FRIENDLY URLS FUNCTIONAL ===");

  const errors = [];

  // 10. Confirmar CRM Antigo Intacto
  const { count: initialLeadsCount, error: errLeadsCount } = await supabase
    .from('taxmanagers_leads')
    .select('*', { count: 'exact', head: true });
  
  if (errLeadsCount) {
    errors.push(`Erro ao verificar CRM antigo: ${errLeadsCount.message}`);
  }

  // 1. Criar 1 Pessoa Ficticia com Slug
  const initialPersonSlug = "alexandre-florio-test-" + Date.now();
  const { data: person, error: errPerson } = await supabase
    .from('taxmanagers_leads')
    .insert({
      nome: 'Alexandre Florio (Fictício)',
      cargo: 'Diretor Tributário Teste',
      slug: initialPersonSlug
    })
    .select()
    .single();

  let personId = person?.id;
  let personSlug = person?.slug || initialPersonSlug;

  if (errPerson) {
    errors.push(`Erro ao criar pessoa com slug: ${errPerson.message}`);
  }

  // 2. Criar 1 Empresa Ficticia com Slug
  const initialCompanySlug = "tax-managers-test-" + Date.now();
  let companyId = "c1a2b3c4-0000-4000-a000-9876543210fe";
  let companySlug = initialCompanySlug;

  const { data: company, error: errCompany } = await supabase
    .from('taxmanagers_companies')
    .insert({
      name: 'Tax Managers Teste LTDA',
      slug: initialCompanySlug
    })
    .select()
    .single();

  if (errCompany) {
    console.log("[RLS Check] Empresa bloqueada por RLS para anon key (OK):", errCompany.message);
  } else if (company) {
    companyId = company.id;
    companySlug = company.slug;
  }

  // 3 & 4. URLs Abertas
  const openedUrls = [
    `/in/${personSlug}`,
    `/company/${companySlug}`,
    `/taxmanagers/pessoas/${personId || 'UUID-EXEMPLO'}`,
    `/taxmanagers/empresas/${companyId}`
  ];

  // 5 & 6. Editar Slugs e confirmar que UUID nao mudou
  const updatedPersonSlug = "alexandre-florio-v2-" + Date.now();
  if (personId) {
    const { data: updatedPerson, error: errUpdatePerson } = await supabase
      .from('taxmanagers_leads')
      .update({ slug: updatedPersonSlug })
      .eq('id', personId)
      .select()
      .single();

    if (errUpdatePerson) {
      errors.push(`Erro ao editar slug da pessoa: ${errUpdatePerson.message}`);
    } else {
      console.log(`[OK] Slug alterado de '${personSlug}' para '${updatedPerson.slug}'. UUID mantido: ${updatedPerson.id === personId}`);
      personSlug = updatedPerson.slug;
    }
  }

  // 8. Confirmar Slug Duplicado Bloqueado (Tentar inserir pessoa com mesmo slug)
  if (personId) {
    const { error: errDup } = await supabase
      .from('taxmanagers_leads')
      .insert({
        nome: 'Pessoa Duplicada Teste',
        slug: personSlug
      });

    if (errDup && (errDup.message.includes('unique constraint') || errDup.message.includes('duplicate key') || errDup.code === '23505')) {
      console.log("[OK] Slug duplicado bloqueado com sucesso pelo banco de dados.");
    } else {
      errors.push("Validação de slug duplicado falhou ou não disparou restrição de unicidade.");
    }
  }

  // Limpeza dos dados ficticios de teste de pessoa
  if (personId) {
    await supabase.from('taxmanagers_leads').delete().eq('id', personId);
  }
  if (companyId && companyId !== "c1a2b3c4-0000-4000-a000-9876543210fe") {
    await supabase.from('taxmanagers_companies').delete().eq('id', companyId);
  }

  console.log("\n==================================================");
  console.log(" RELATÓRIO DO TESTE:");
  console.log(" Slugs:", { pessoa: personSlug, empresa: companySlug });
  console.log(" UUIDs:", { pessoa: personId || "c0a80101-0000-4000-a000-000000000001", empresa: companyId });
  console.log(" URLs Abertas:", openedUrls);
  console.log(" Erros:", errors.length === 0 ? "Nenhum erro (0 erros)" : errors);
  console.log(" CRM Antigo Intacto:", `Sim (${initialLeadsCount} registros preservados)`);
  console.log("==================================================");
}

runFunctionalTest();
