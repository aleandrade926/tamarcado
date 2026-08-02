import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://mqncmwtgpoflbbscrelp.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDYyOTc4NSwiZXhwIjoyMDkwMjA1Nzg1fQ.vWNU5T0XQ1HAjBxZzLrMiZ2PhtVX-khp80oYLXh-5yQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const { data, error } = await supabase
    .from("taxmanagers_leads")
    .select("*")
    .ilike("nome", "%Chisley%");

  console.log("Leads encontrados:", JSON.stringify(data, null, 2));
  console.log("Error:", error);
}

run();
