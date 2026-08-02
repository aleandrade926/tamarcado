import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqncmwtgpoflbbscrelp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2Mjk3ODUsImV4cCI6MjA5MDIwNTc4NX0.veEeqzcSk2FTx8sYI1i9MKRbuzXhpfgk9XG-zJzXA7g';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Querying taxmanagers_leads...');
  
  const { data, error } = await supabase
    .from('taxmanagers_leads')
    .select('*')
    .or('empresa.ilike.%Conntacta%,nome.ilike.%Adriana%,nome.ilike.%Matheus%');

  if (error) {
    console.error('Error fetching leads:', error);
  } else {
    console.log('Found leads:', JSON.stringify(data, null, 2));
  }
}

main();
