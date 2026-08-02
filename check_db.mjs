import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://mqncmwtgpoflbbscrelp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2Mjk3ODUsImV4cCI6MjA5MDIwNTc4NX0.veEeqzcSk2FTx8sYI1i9MKRbuzXhpfgk9XG-zJzXA7g'
);

async function check() {
  console.log('Checking taxmanagers_companies...');
  const { data: cData, error: cErr } = await supabase.from('taxmanagers_companies').select('id').limit(1);
  if (cErr) {
    console.log('Error querying taxmanagers_companies:', cErr.message);
  } else {
    console.log('taxmanagers_companies exists.');
  }

  console.log('Checking taxmanagers_leads columns...');
  const { data: lData, error: lErr } = await supabase.from('taxmanagers_leads').select('company_id, candidate_company_id').limit(1);
  if (lErr) {
    console.log('Error querying taxmanagers_leads columns:', lErr.message);
  } else {
    console.log('taxmanagers_leads has company_id and candidate_company_id.');
  }
}
check();
