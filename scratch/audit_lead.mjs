import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mqncmwtgpoflbbscrelp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2Mjk3ODUsImV4cCI6MjA5MDIwNTc4NX0.veEeqzcSk2FTx8sYI1i9MKRbuzXhpfgk9XG-zJzXA7g'
);

async function auditLead() {
  console.log("Auditing lead: Irvinng Lage");

  // Fetch the lead
  const { data: leads, error } = await supabase
    .from('taxmanagers_leads')
    .select('id, nome, parceiro_id, linkedin_key, slug, company_id')
    .ilike('nome', 'Irvinng Lage%');

  if (error) {
    console.error("Error fetching lead:", error);
    return;
  }

  if (!leads || leads.length === 0) {
    console.log("Lead 'Irvinng Lage' not found in database.");
    return;
  }

  const targetLead = leads[0];
  console.log("--- Lead Encontrado ---");
  console.log(`id: ${targetLead.id}`);
  console.log(`nome: ${targetLead.nome}`);
  console.log(`parceiro_id: ${targetLead.parceiro_id}`);
  console.log(`linkedin_key: ${targetLead.linkedin_key}`);
  console.log(`slug: ${targetLead.slug}`);
  console.log(`company_id: ${targetLead.company_id}`);

  // Check how many leads have the same linkedin_key
  if (targetLead.linkedin_key) {
    const { count: countKey, error: errKey } = await supabase
      .from('taxmanagers_leads')
      .select('id', { count: 'exact', head: true })
      .eq('linkedin_key', targetLead.linkedin_key);
    
    if (errKey) console.error(errKey);
    console.log(`quantidade de registros com o mesmo linkedin_key: ${countKey}`);
  } else {
    console.log("linkedin_key is null, skipping duplicate key check.");
    console.log(`quantidade de registros com o mesmo linkedin_key: N/A`);
  }

  // Check how many leads have a similar name
  const { count: countName, error: errName } = await supabase
    .from('taxmanagers_leads')
    .select('id', { count: 'exact', head: true })
    .ilike('nome', 'Irvinng Lage%');

  if (errName) console.error(errName);
  console.log(`quantidade de registros com nome semelhante: ${countName}`);

  console.log("\nStatus:\nIRVINNG_LEAD_AUDITED");
}

auditLead();
