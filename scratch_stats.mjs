import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

if (!process.env.SUPABASE_URL) {
  const envContent = fs.readFileSync('.env', 'utf-8');
  const matchUrl = envContent.match(/VITE_SUPABASE_URL=(.*)/) || envContent.match(/SUPABASE_URL=(.*)/);
  if (matchUrl) process.env.SUPABASE_URL = matchUrl[1].trim().replace(/['"]/g, '');
  
  const matchKey = envContent.match(/SUPABASE_SERVICE_ROLE_KEY=(.*)/) || envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
  if (matchKey) process.env.SUPABASE_SERVICE_ROLE_KEY = matchKey[1].trim().replace(/['"]/g, '');
}

const supabase = createClient(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY);

async function run() {
  let hasMore = true;
  let allLeads = [];
  let start = 0;
  const limit = 1000;
  
  while (hasMore) {
    const { data, error } = await supabase.from('taxmanagers_leads').select('id, empresa, url, metadata').range(start, start + limit - 1);
    if (error) { console.error('Error fetching leads:', error); break; }
    if (data.length === 0) { hasMore = false; }
    else { allLeads = allLeads.concat(data); start += limit; }
  }
  
  console.log('Total Leads:', allLeads.length);
  
  const withEmpresa = allLeads.filter(l => l.empresa && l.empresa.trim() !== '');
  console.log('Com Empresa (qualquer texto):', withEmpresa.length);
  
  const cnpjs = allLeads.filter(l => l.metadata?.cnpj).length;
  const dominios = allLeads.filter(l => l.metadata?.domain || l.metadata?.dominio).length;
  const urlsCorp = allLeads.filter(l => l.metadata?.company_url || l.metadata?.site).length;
  
  console.log('CNPJs:', cnpjs);
  console.log('Dominios:', dominios);
  console.log('URLs Corporativas:', urlsCorp);
  
  const uniqueNames = new Set(withEmpresa.map(l => l.empresa.trim().toLowerCase()));
  console.log('Estimativa de Empresas Únicas (lowerCase Trim):', uniqueNames.size);
  
  const companyCounts = {};
  withEmpresa.forEach(l => {
    const name = l.empresa.trim().toLowerCase();
    companyCounts[name] = (companyCounts[name] || 0) + 1;
  });
  
  const duplicates = Object.entries(companyCounts).filter(([name, count]) => count > 1).sort((a,b) => b[1] - a[1]);
  console.log('Exemplos de duplicidades exatas:');
  duplicates.slice(0, 5).forEach(([name, count]) => console.log(' -', name, count));
  
  // Find variations
  console.log('Possíveis variações de nomes (exemplo rudimentar):');
  const variationCandidates = Object.keys(companyCounts).filter(k => k.includes('ltda') || k.includes('s/a') || k.includes(' s.a') || k.includes(' s.a.'));
  console.log(variationCandidates.slice(0, 10));
}
run();
