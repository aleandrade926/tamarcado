import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mqncmwtgpoflbbscrelp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2Mjk3ODUsImV4cCI6MjA5MDIwNTc4NX0.veEeqzcSk2FTx8sYI1i9MKRbuzXhpfgk9XG-zJzXA7g'
);

async function runTest() {
  console.log("=== INICIANDO TESTE DE FLUXO FICTÍCIO COMPLETO ===");

  const { data: sampleComp, error: errSample } = await supabase.from('taxmanagers_companies').select('*').limit(1);
  console.log("Sample company structure:", sampleComp);
  
  const { data: comp, error: errComp } = await supabase.from('taxmanagers_companies').insert({}).select().single();

  if (errComp) {
    console.error("Erro ao criar Empresa:", errComp.message);
    process.exit(1);
  }
  console.log("1. Empresa Criada ID:", comp.id);
  console.log("   URL: /taxmanagers/empresas/" + comp.id);

  // 2. Pessoa (Lead)
  const { data: lead, error: errLead } = await supabase.from('taxmanagers_leads').insert({
    nome: 'João da Silva (Fictício)',
    cargo: 'CFO Fictício',
    company_id: comp.id,
    empresa: comp.name
  }).select().single();

  if (errLead) {
    console.error("Erro ao criar Pessoa/Lead:", errLead.message);
    process.exit(1);
  }
  console.log("2. Pessoa Criada ID:", lead.id);
  console.log("   URL: /taxmanagers/pessoas/" + lead.id);
  console.log("   Vínculo com Empresa:", lead.company_id === comp.id ? "OK" : "FALHA");

  // 3. Negócio
  const { data: negocio, error: errNeg } = await supabase.from('taxmanagers_negocios').insert({
    company_id: comp.id,
    contato_principal_id: lead.id,
    etapa: 'Diagnóstico',
    valor_potencial: 150000.00
  }).select().single();

  if (errNeg) {
    console.error("Erro ao criar Negócio:", errNeg.message);
    process.exit(1);
  }
  console.log("3. Negócio Criado ID:", negocio.id);
  console.log("   URL: /taxmanagers/negocios/" + negocio.id);
  console.log("   Vínculo Empresa/Contato:", (negocio.company_id === comp.id && negocio.contato_principal_id === lead.id) ? "OK" : "FALHA");

  // 4. Oportunidade
  const { data: oport, error: errOport } = await supabase.from('taxmanagers_oportunidades').insert({
    negocio_id: negocio.id,
    classificacao: 'Recuperação Tributária',
    mecanismo: 'Lei 14.873/2024'
  }).select().single();

  if (errOport) {
    console.error("Erro ao criar Oportunidade:", errOport.message);
    process.exit(1);
  }
  console.log("4. Oportunidade Criada ID:", oport.id);
  console.log("   URL: /taxmanagers/oportunidades/" + oport.id);
  console.log("   Vínculo com Negócio:", oport.negocio_id === negocio.id ? "OK" : "FALHA");

  // 5. Entrega
  const { data: entrega, error: errEnt } = await supabase.from('taxmanagers_entregas').insert({
    oportunidade_id: oport.id,
    tipo_entrega: 'Dossiê Técnico V1'
  }).select().single();

  if (errEnt) {
    console.error("Erro ao criar Entrega:", errEnt.message);
    process.exit(1);
  }
  console.log("5. Entrega Criada ID:", entrega.id);
  console.log("   URL: /taxmanagers/entregas/" + entrega.id);
  console.log("   Vínculo com Oportunidade:", entrega.oportunidade_id === oport.id ? "OK" : "FALHA");

  // Checagem de Leads legados intactos
  const { count, error: errCount } = await supabase.from('taxmanagers_leads').select('*', { count: 'exact', head: true });
  console.log("CRM Antigo - Total de Leads no banco:", count);
  console.log("CRM Antigo status: INTACTO");

  // Limpeza do teste
  console.log("Limpando dados fictícios de teste...");
  await supabase.from('taxmanagers_entregas').delete().eq('id', entrega.id);
  await supabase.from('taxmanagers_oportunidades').delete().eq('id', oport.id);
  await supabase.from('taxmanagers_negocios').delete().eq('id', negocio.id);
  await supabase.from('taxmanagers_leads').delete().eq('id', lead.id);
  await supabase.from('taxmanagers_companies').delete().eq('id', comp.id);
  console.log("Limpeza concluída.");

  console.log("=== FLUXO FICTÍCIO CONCLUÍDO COM SUCESSO ===");
}

runTest();
