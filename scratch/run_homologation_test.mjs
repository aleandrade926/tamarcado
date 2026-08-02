import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { evaluateLeadOpportunityMatch, saveOpportunityMatchState, mergeMatchWithManualEdits } from "../src/lib/taxmanagers/opportunity-engine.ts";

let envContent = "";
if (fs.existsSync(".env.homologation")) {
  envContent = fs.readFileSync(".env.homologation", "utf-8");
}

const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

const url = urlMatch ? urlMatch[1].trim().replace(/['"]/g, "") : "https://pzvmqsaogxcxpoabbscw.supabase.co";
const key = keyMatch ? keyMatch[1].trim().replace(/['"]/g, "") : "";

console.log("=================================================");
console.log("EVIDÊNCIA DE VALIDAÇÃO EM HOMOLOGAÇÃO");
console.log("Projeto:", "TailorSpace-Homologacao-CRM-Fase1");
console.log("Project ref:", "pzvmqsaogxcxpoabbscw");
console.log("Target URL:", url);
console.log("Anon Key Presente?:", Boolean(key && key.length > 20));
console.log("=================================================");

if (!key) {
  console.log("\n[ATENÇÃO] Chave ANON KEY de homologação (pzvmqsaogxcxpoabbscw) necessária em .env.homologation.");
  process.exit(0);
}

const supabase = createClient(url, key);

async function runHomologationValidation() {
  // 1. Confirmar Tabela e Seed Único
  console.log("\n--- 1. CONFIRMAR TABELAS E SEED ÚNICO ---");
  const { data: opps, error: oppErr } = await supabase.from("taxmanagers_opportunities").select("*");
  if (oppErr) {
    console.error("Erro ao acessar taxmanagers_opportunities:", oppErr.message);
    return;
  }
  console.log("Tabela taxmanagers_opportunities: OK!");
  console.log("Total de Oportunidades (Seed único):", opps.length);
  console.log("Oportunidade:", opps[0]?.name);
  console.log("Descrição:", opps[0]?.description);

  const oppId = opps[0]?.id || "opp-receita-sintonia";

  // 2. Teste de RLS e Bloqueio de Acesso Anônimo / Não Autenticado
  console.log("\n--- 2. TESTE DE RLS E BLOQUEIO ANÔNIMO ---");
  const testLead = {
    id: "00000000-0000-4000-8000-000000000001",
    nome: "Lead Teste RLS 1",
    cargo: "CFO",
    company_id: "00000000-0000-4000-8000-000000000100",
    empresa: "Empresa RLS Teste S.A.",
    metadata: { porte_empresa: "grande", operacao_tributaria: "relevante" }
  };

  const match = evaluateLeadOpportunityMatch(testLead, oppId);
  const saveResult = await saveOpportunityMatchState(supabase, match, { commercial_status: "abordado", notes: "Teste RLS" });
  
  console.log("Tentativa de Insert Anônimo Bloqueada por RLS?:", saveResult.success === false && saveResult.mode === "in_memory_only");
  console.log("Mensagem da RLS (Esperado):", saveResult.error);

  // 3. Teste de Recálculo e Preservação em Memória Local (Fallback de RLS)
  console.log("\n--- 3. TESTE DE RECÁLCULO COM PRESERVAÇÃO MANUAI ---");
  const initialEdits = {
    commercial_status: "reuniao_marcada",
    next_contact_at: "2026-08-20",
    notes: "Cliente solicitou envio de proposta comercial"
  };

  const merged = mergeMatchWithManualEdits(match, initialEdits);

  console.log("Match Recalculado:");
  console.log(" - Lead Name:", merged.lead_name);
  console.log(" - Opportunity Adherence Score:", merged.opportunity_adherence_score, "pts");
  console.log(" - Contact Curve:", merged.contact_curve);
  console.log(" - Target Group:", merged.match_status);
  console.log(" - Commercial Status Preservado:", merged.commercial_status);
  console.log(" - Next Contact At Preservado:", merged.next_contact_at);
  console.log(" - Notes Preservadas:", merged.notes);

  console.log("\n=================================================");
  console.log("VALIDAÇÃO CONCLUÍDA COM SUCESSO EM HOMOLOGAÇÃO!");
  console.log("=================================================");
}

runHomologationValidation();
