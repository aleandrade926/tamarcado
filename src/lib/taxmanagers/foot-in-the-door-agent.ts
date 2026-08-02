/**
 * Agente Foot in the Door — Validador Local
 * 
 * Agora atua exclusivamente como validador de entrada e saída.
 * Não gera conteúdo, apenas blinda a aplicação de alucinações e payloads inválidos.
 */

export interface FootInTheDoorInput {
  nome: string;
  cargo: string;
  empresa: string;
  setor: string;
  vinculo_atual_confirmado: boolean;
  historico: string[];
  fatos_confirmados: string[];
  hipoteses_permitidas: string[];
  informacoes_nao_confirmadas: string[];
  relacionamento_previo?: string;
  email?: string;
  telefone?: string;
  linkedin_url?: string;
}

export interface FootInTheDoorOutput {
  status: "ready" | "blocked";
  profile_reading: string;
  opportunity_title: string;
  opportunity_type: string;
  specific_mechanism: string;
  economic_consequence: string;
  legitimate_urgency: string;
  confirmed_facts: string[];
  reasonable_inferences: string[];
  hypotheses_to_validate: string[];
  supporting_evidence: string[];
  approach_risk: "low" | "medium" | "high";
  recommended_message: string;
  short_message: string;
  recommended_channel: string;
  follow_up_days: number;
  information_to_validate: string[];
  next_action: string;
  blocking_reasons: string[];
}

const MINIMUM_REQUIRED_FIELDS: (keyof FootInTheDoorInput)[] = [
  "nome",
  "cargo",
  "empresa",
  "setor",
];

const GENERIC_BUZZWORDS = [
  "diagnóstico tributário completo",
  "diagnóstico tributário geral",
  "revisão fiscal completa",
  "planejamento tributário genérico",
  "redução de carga tributária sem risco",
];

const INVENTED_URGENCIES = [
  "malha fiscal iminente",
  "receita sintonia cruzando",
  "fiscalização",
  "multa",
];

const UNSUBSTANTIATED_NUMBERS = [
  "1% a 3%",
  "1 a 3%",
  "2 a 5%",
  "2% a 5%",
  "milhões",
  "milhares de reais",
];

export function validateInput(input: FootInTheDoorInput): string[] {
  const reasons: string[] = [];

  for (const field of MINIMUM_REQUIRED_FIELDS) {
    const val = input[field];
    if (!val || (typeof val === "string" && val.trim() === "")) {
      reasons.push(`Campo obrigatório ausente: ${field}`);
    }
  }

  if (!input.vinculo_atual_confirmado) {
    reasons.push("Vínculo profissional atual não confirmado — não é seguro gerar abordagem");
  }

  return reasons;
}

export function buildBlockedOutput(blockingReasons: string[], informationToValidate: string[]): FootInTheDoorOutput {
  return {
    status: "blocked",
    profile_reading: "",
    opportunity_title: "",
    opportunity_type: "",
    specific_mechanism: "",
    economic_consequence: "",
    legitimate_urgency: "",
    confirmed_facts: [],
    reasonable_inferences: [],
    hypotheses_to_validate: [],
    supporting_evidence: [],
    approach_risk: "high",
    recommended_message: "",
    short_message: "",
    recommended_channel: "",
    follow_up_days: 0,
    information_to_validate: informationToValidate,
    next_action: "Coletar dados faltantes antes de gerar abordagem",
    blocking_reasons: blockingReasons,
  };
}

export function validateOutput(output: FootInTheDoorOutput): FootInTheDoorOutput {
  const reasons: string[] = [...(output.blocking_reasons || [])];
  
  if (output.status === "blocked") {
    return output;
  }

  const textToCheck = [
    output.opportunity_title,
    output.opportunity_type,
    output.specific_mechanism,
    output.economic_consequence,
    output.legitimate_urgency,
    output.recommended_message,
    output.short_message
  ].join(" ").toLowerCase();

  // Detect Generic Offers
  for (const buzz of GENERIC_BUZZWORDS) {
    if (textToCheck.includes(buzz)) {
      reasons.push(`Oferta muito genérica detectada: ${buzz}`);
    }
  }

  // Detect Unsubstantiated Numbers
  for (const num of UNSUBSTANTIATED_NUMBERS) {
    if (textToCheck.includes(num)) {
      reasons.push(`Uso de números sem evidência detectado: ${num}`);
    }
  }

  // Detect Fake Urgencies
  for (const urg of INVENTED_URGENCIES) {
    if (textToCheck.includes(urg)) {
      // Allow only if supported by facts (simplified heuristic: if it's completely generic without context)
      // Usually, Receita Sintonia isn't an emergency for every company unless there's a known notice.
      reasons.push(`Urgência genérica sem evidência detectada: ${urg}`);
    }
  }

  // Detect Truncation
  if (output.recommended_message && !output.recommended_message.trim().endsWith("?") && !output.recommended_message.trim().endsWith(".") && !output.recommended_message.trim().endsWith("Managers")) {
     // A simple heuristic for truncation. Usually emails end with punctuation or signature.
     if (!output.recommended_message.toLowerCase().includes("abraço")) {
         reasons.push("A mensagem gerada parece estar truncada.");
     }
  }

  // Detect excessive CTA (like exactly 15 minutes instead of short CTA)
  // Actually the prompt should handle this, but we can flag it
  if (output.recommended_message && output.recommended_message.includes("15 minutos") && output.recommended_message.length > 500) {
     reasons.push("Mensagem longa com CTA de 15 minutos pode soar como pitch agressivo.");
  }

  if (reasons.length > 0) {
    return {
      ...output,
      status: "blocked",
      recommended_message: "",
      short_message: "",
      blocking_reasons: reasons,
    };
  }

  return output;
}

// ============================================================
// PAYLOADS DE EXEMPLO
// ============================================================

export const EXAMPLE_READY_PAYLOAD: FootInTheDoorInput = {
  nome: "Carlos Eduardo Mendes",
  cargo: "CFO",
  empresa: "NovaTech Soluções Ltda",
  setor: "Tecnologia / SaaS",
  vinculo_atual_confirmado: true,
  historico: [
    "Conexão LinkedIn aceita em 2024",
    "Curtiu post sobre Reforma Tributária"
  ],
  fatos_confirmados: [
    "CFO da NovaTech desde 2022",
    "Sede em SP com operações em MG e PR",
    "Oferece software de gestão em nuvem"
  ],
  hipoteses_permitidas: [
    "Pode estar classificando receita de licenciamento como serviço",
    "Pode ter ICMS sobre operações interestaduais de software"
  ],
  informacoes_nao_confirmadas: [
    "Regime tributário: Lucro Real ou Presumido"
  ],
  relacionamento_previo: "Conexão de LinkedIn 2º grau",
  email: "carlos.mendes@novatech.com.br",
  linkedin_url: "https://www.linkedin.com/in/carlosmendes-cfo"
};

export const EXAMPLE_BLOCKED_PAYLOAD: FootInTheDoorInput = {
  nome: "Maria Fernanda",
  cargo: "",
  empresa: "Empresa Desconhecida",
  setor: "",
  vinculo_atual_confirmado: false,
  historico: [],
  fatos_confirmados: [],
  hipoteses_permitidas: [],
  informacoes_nao_confirmadas: [
    "Cargo atual",
    "Setor da empresa"
  ]
};
