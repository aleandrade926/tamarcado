import { createClient } from "@supabase/supabase-js";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function deepMerge(target, source) {
  if (typeof target !== 'object' || target === null) return source;
  if (typeof source !== 'object' || source === null) return source;
  const output = { ...target };
  Object.keys(source).forEach(key => {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  });
  return output;
}

function fallbackResponse(lead, reason) {
  const nome = lead?.nome || "este lead";
  const empresa = lead?.empresa || "a empresa";
  const cargo = lead?.cargo || "decisor";

  const classification = reason === "schema_validation_failed" ? "schema_validation_failed" : "ai_generation_failed";
  const reasonText = reason === "schema_validation_failed" ? "JSON gerado é incompatível com o esquema." : "Falha técnica na geração da IA.";

  return {
    error: true,
    reason,
    short_note: `Olá ${nome}, vi sua atuação como ${cargo} em ${empresa}. Aceita conectar?`,
    long_email: `Olá ${nome}, tudo bem?\n\nQueria entender como a ${empresa} acompanha os desafios fiscais do setor.\n\nFaria sentido uma conversa rápida?`,
    article_pitch: `Para ${empresa}, recomendo acompanharmos os impactos da reforma tributária.`,
    strategy_summary: `Fallback de segurança (motivo: ${reason}). Nenhum pitch gerado. Revise manualmente.`,
    next_step: "Revisar manualmente a classificação do lead.",
    updated_metadata: deepMerge(lead?.metadata || {}, {
      contact_intelligence: {
        lead_classification: classification,
        classification_confidence: "low",
        decision_power: "unknown",
        competition_risk: "unknown",
        relationship_stage: "unknown",
        classification_reason: reasonText,
        missing_information: ["Análise técnica falhou"],
        strategic_alerts: ["Revisar manualmente. Não envie mensagens geradas por fallback sem revisar."]
      },
      interaction_strategy: {
        strategic_objective: "Revisão humana necessária.",
        spin_stage: "unknown",
        should_contact: false,
        should_pitch: false
      }
    })
  };
}

async function processVisionImage(base64Image, type) {
  if (!base64Image) return null;
  const isProfile = type === "profile";
  const resultType = isProfile ? "profile_print" : "contact_print";

  const emptyEntities = {
    nome: "",
    cargo: "",
    empresa: "",
    email: "",
    telefone: "",
    linkedin: ""
  };

  if (!GROQ_API_KEY || GROQ_API_KEY.includes("YOUR_") || GROQ_API_KEY === "") {
    return {
      type: resultType,
      processed: false,
      reason: "image_received_but_not_processed",
      ocr_text: "",
      visual_summary: "",
      extracted_entities: emptyEntities
    };
  }

  try {
    const promptText = isProfile 
      ? "Extraia todo o texto visível deste print de perfil (LinkedIn), incluindo formação, cargo, descrição e histórico de carreira. ATENÇÃO MÁXIMA PARA A EMPRESA E O CARGO: Leia EXCLUSIVAMENTE a seção 'Experiência'. Localize a experiência mais recente (a primeira da lista). CUIDADO: No LinkedIn, quando há apenas um cargo na empresa, a primeira linha em negrito é o CARGO (ex: 'Gerente') e a linha logo abaixo é a EMPRESA. Não coloque o cargo no lugar da empresa! Extraia corretamente o Nome da Empresa e o Cargo. Inclua obrigatoriamente as datas de início e término que aparecem na mesma seção (ex: 'jan de 2024 - o momento' ou 'mar de 2020 - fev de 2023'). Se a data final não for 'o momento'/'presente', deixe claro no resumo que a pessoa já encerrou essa experiência. NUNCA extraia nomes de empresas das seções 'Sugestões', 'Publicações' ou 'Você talvez goste'. Retorne o texto extraído em formato de OCR limpo e um resumo visual focado nessa última experiência profissional detalhando Cargo, Empresa e Duração."
      : "Extraia todo o texto visível deste print de contato, incluindo e-mails, telefones, aniversários ou redes sociais. Retorne o texto extraído em formato de OCR limpo e um resumo visual.";

    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.2-11b-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: promptText
              },
              {
                type: "image_url",
                image_url: {
                  url: base64Image
                }
              }
            ]
          }
        ],
        temperature: 0.1
      })
    });

    if (response.ok) {
      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content || "";
      if (!content) {
        return {
          type: resultType,
          processed: false,
          reason: "vision_api_error",
          ocr_text: "",
          visual_summary: "",
          extracted_entities: emptyEntities
        };
      }
      return {
        type: resultType,
        processed: true,
        reason: null,
        ocr_text: content,
        visual_summary: `Processamento do anexo de ${isProfile ? "perfil" : "contato"} concluído com sucesso.`,
        extracted_entities: emptyEntities
      };
    } else {
      const errText = await response.text();
      console.error(`Groq Vision failed for ${type}:`, errText);
      return {
        type: resultType,
        processed: false,
        reason: "vision_api_error",
        ocr_text: "",
        visual_summary: "",
        extracted_entities: emptyEntities
      };
    }
  } catch (err) {
    console.error(`Error in processVisionImage for ${type}:`, err);
    return {
      type: resultType,
      processed: false,
      reason: "vision_api_error",
      ocr_text: "",
      visual_summary: "",
      extracted_entities: emptyEntities
    };
  }
}

function buildPrompt(lead, contextExtra, agentProfile, agentOutputs, interactions, leadType, leadTypePromptStr) {
  const metadata = lead?.metadata || {};

  // 1. Oficial data block
  const oficialDataBlock = `====================================
DADOS ESTRUTURADOS - FONTE OFICIAL
====================================
lead_id: ${lead.id || "N/A"}
nome: ${lead.nome || "N/A"}
cargo: ${lead.cargo || "N/A"}
empresa: ${lead.empresa || "N/A"}
email: ${lead.email || "N/A"}
telefone: ${lead.telefone || "N/A"}
url: ${lead.url || "N/A"}
linkedin_key: ${lead.linkedin_key || "N/A"}
status: ${lead.status || "N/A"}
import_status: ${lead.import_status || "N/A"}
lead_type: ${leadType}
metadata: ${JSON.stringify(metadata, null, 2)}
`;

  // 2. Clone IA block
  const cloneIaBlock = `====================================
CLONE IA
====================================
agent_profile: ${agentProfile ? JSON.stringify(agentProfile, null, 2) : "N/A"}
agent_outputs:
- perfil_operacional: ${agentOutputs?.perfil_operacional || "N/A"}
- tese: ${agentOutputs?.tese || "N/A"}
- icp: ${agentOutputs?.icp || "N/A"}
- lista_empresas: ${agentOutputs?.lista_empresas || "N/A"}
- mensagens: ${agentOutputs?.mensagens || "N/A"}
- cadencia: ${agentOutputs?.cadencia || "N/A"}
- next_actions: ${agentOutputs?.next_actions || "N/A"}
`;

  // 3. Timeline block
  let timelineBlockStr = "Nenhuma atividade ou interação registrada na timeline.";
  if (interactions && interactions.length > 0) {
    timelineBlockStr = interactions.map(item => {
      const date = item.created_at ? new Date(item.created_at).toLocaleDateString("pt-BR") : "N/A";
      return `- [${date}] (${item.type}): ${item.content || ""}`;
    }).join("\n");
  }
  const timelineBlock = `====================================
TIMELINE / ATIVIDADES
====================================
${timelineBlockStr}
`;

  // 4. Chat history block
  const chatHistoryBlock = `====================================
CHAT HISTORY / ORIENTAÇÕES DO USUÁRIO
====================================
${lead?.chat_history || "Nenhum histórico ou orientação anterior."}
`;

  // 5. Attachments block
  const attachmentsBlock = `====================================
ANEXOS PROCESSADOS
====================================
${JSON.stringify(metadata.attachments_processed || [], null, 2)}
`;

  // Segment instructions based on the leadType
  let roleContextInstruction = `
Você está analisando prioritariamente a pessoa e o relacionamento comercial. Não presuma que os dados disponíveis representam uma análise completa da empresa. Não atribua oportunidades tributárias, valores, regime tributário, riscos fiscais ou teses à empresa sem uma entidade empresarial estruturada e evidências próprias.
O objetivo é atuar como Copiloto de Customer Discovery e SPIN Selling, identificando a fase correta do relacionamento.
`;

  const rulesBlock = `====================================
REGRAS COMERCIAIS E DE DISCOVERY
====================================
1. CLASSIFICAÇÃO DA PESSOA:
- buyer: Executivo/profissional em empresa contratante (CFO, Controller, Diretor).
- internal_influencer: Participa da análise ou opera o problema.
- potential_partner: Contador, advogado, consultor parceiro.
- potential_competitor: Concorrente, escritório tributário, consultoria concorrente, empresa de tecnologia fiscal, advogado tributário empresarial.
- no_fit: Sem aderência.
- insufficient_information: Falta dados.

2. REGRAS OBRIGATÓRIAS PARA CONCORRENTES:
- Se lead_classification for 'potential_competitor' ou competition_risk='high', VOCÊ DEVE OBRIGATORIAMENTE RETORNAR "should_contact": false e "should_pitch": false.
- NÃO revele tese, diagnóstico, metodologia ou formato da oferta.
- As strings em "messages" devem vir estritamente VAZIAS ("").
- Preencha o strategic_alerts justificando o risco.

3. CUSTOMER DISCOVERY E SPIN SELLING:
- Seu objetivo NÃO É VENDER IMEDIATAMENTE. É descobrir.
- SPIN Stages: situation, problem, implication, need_payoff, not_applicable, unknown.
- Priorize perguntas sobre fatos (ex: "Como vocês acompanham isso hoje?").
- Não ofereça diagnóstico, proposta ou reunião no primeiro contato a menos que haja sinal claro de interesse.
- A mensagem deve conter no máximo UMA pergunta (sem interrogatório).

4. RELATIONSHIP STAGE:
- Valores permitidos: not_connected, invitation_available, invitation_sent, recent_connection, old_connection_no_conversation, conversation_started, discovery_in_progress, problem_confirmed, opportunity_identified, presentation_requested, proposal_authorized, no_interest, do_not_contact, unknown.
- Para convites de conexão (not_connected), use no máximo 200 caracteres e sem pitch de venda.
- Para conexão antiga (old_connection_no_conversation), reconheça a conexão antiga, sem fingir intimidade.
- Se não houver dados claros de tempo, use unknown.

5. DIRETRIZES DA PLATAFORMA (EVIDÊNCIAS):
- A IA não pode inferir crescimento, regime tributário, tese, tributo, dificuldade operacional ou fato empresarial apenas pelo cargo, setor ou histórico da pessoa.
- Quando faltarem dados, a pergunta de discovery deve ser neutra e exploratória.
- Nunca altere lead_type definido pelo sistema.
- Se faltar informação, classifique como insufficient_information e detalhe em missing_information.
- Se processed = false em anexos, inclua em strategy_summary: "Recebi indicação de anexo, mas o conteúdo visual ainda não foi extraído."
- Se processed = true, utilize os dados dos prints na análise.
- ${leadTypePromptStr}
`;

  return `
Você é o Copiloto de Customer Discovery e SPIN Selling da TaxManagers.

Instrução de Contexto para o Papel:
${roleContextInstruction}

${oficialDataBlock}
${cloneIaBlock}
${timelineBlock}
${chatHistoryBlock}
${attachmentsBlock}
${rulesBlock}

====================================
TAREFA
====================================
Gere a estratégia de Customer Discovery para o lead.
A observação adicional do operador é: ${contextExtra || "Nenhuma"}
Retorne SOMENTE JSON válido, sem qualquer tipo de markdown ou texto externo.

Formato obrigatório do JSON:
{
  "contact_intelligence": {
    "lead_classification": "buyer | internal_influencer | potential_partner | potential_competitor | no_fit | insufficient_information",
    "classification_confidence": "high | medium | low",
    "decision_power": "high | medium | low | unknown",
    "competition_risk": "high | medium | low | unknown",
    "relationship_stage": "not_connected | invitation_available | invitation_sent | recent_connection | old_connection_no_conversation | conversation_started | discovery_in_progress | problem_confirmed | opportunity_identified | presentation_requested | proposal_authorized | no_interest | do_not_contact | unknown",
    "classification_reason": "string",
    "missing_information": ["array de strings (se houver)"],
    "strategic_alerts": ["array de strings (se houver risco ou concorrente)"]
  },
  "interaction_strategy": {
    "strategic_objective": "string",
    "spin_stage": "situation | problem | implication | need_payoff | not_applicable | unknown",
    "should_contact": true,
    "should_pitch": false
  },
  "messages": {
    "connection_note": "string (até 200 caracteres)",
    "linkedin_message": "string",
    "email_message": "string",
    "content_share_message": "string"
  },
  "discovery": {
    "current_question": "string (no max 1)",
    "next_spin_question": "string",
    "evidence_sought": "string"
  },
  "operator_guidance": {
    "strategy_summary": "string",
    "next_step": "string"
  }
}
`;
}

async function callGroq(model, prompt) {
  const response = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      temperature: 0.45,
      messages: [
        {
          role: "system",
          content: "Você gera JSON válido para prospecção B2B tributária. Não use markdown. Retorne exclusivamente o JSON puro."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Groq ${model} failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content || "{}";
  
  // Clean JSON formatting if LLM wrapped it in markdown code blocks
  let cleanContent = content.trim();
  if (cleanContent.startsWith("```json")) {
    cleanContent = cleanContent.slice(7);
  } else if (cleanContent.startsWith("```")) {
    cleanContent = cleanContent.slice(3);
  }
  if (cleanContent.endsWith("```")) {
    cleanContent = cleanContent.slice(0, -3);
  }
  cleanContent = cleanContent.trim();

  return JSON.parse(cleanContent);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: true, message: "Method not allowed" });
  }

  console.log("[personalize_agent body keys]", Object.keys(req.body || {}));

  const { lead: initialLead, context_extra, profile_image, contact_image } = req.body || {};
  const profile_image_base64 = profile_image;
  const contact_image_base64 = contact_image;

  console.log("[personalize_agent attachments]", {
    has_profile_image: !!profile_image_base64,
    has_contact_image: !!contact_image_base64,
    profile_image_size: profile_image_base64?.length || 0,
    contact_image_size: contact_image_base64?.length || 0
  });

  if (!initialLead) {
    return res.status(400).json(fallbackResponse({}, "missing_lead"));
  }

  if (!GROQ_API_KEY) {
    return res.status(200).json(fallbackResponse(initialLead, "missing_groq_api_key"));
  }

  let lead = initialLead;
  let agentProfile = null;
  let agentOutputs = null;
  let interactions = [];
  const leadId = lead.id;

  // Fetch latest data from Supabase if leadId is available
  if (leadId) {
    try {
      const { data: dbLead } = await supabase
        .from("taxmanagers_leads")
        .select("*")
        .eq("id", leadId)
        .single();
      if (dbLead) {
        lead = dbLead;
      }

      const { data: profileData } = await supabase
        .from("taxmanagers_agent_profiles")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();
      agentProfile = profileData;

      const { data: outputsData } = await supabase
        .from("taxmanagers_agent_outputs")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();
      agentOutputs = outputsData;

      const { data: interactionsData } = await supabase
        .from("taxmanagers_interactions")
        .select("*")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false });
      if (interactionsData) {
        interactions = interactionsData;
      }
    } catch (err) {
      console.error("Error fetching latest lead/agent data in personalize_agent backend:", err);
    }
  }

  // Process attachments if they are in the request payload
  const attachmentsProcessed = [];
  if (profile_image_base64) {
    const resImg = await processVisionImage(profile_image_base64, "profile");
    if (resImg) attachmentsProcessed.push(resImg);
  }
  if (contact_image_base64) {
    const resImg = await processVisionImage(contact_image_base64, "contact");
    if (resImg) attachmentsProcessed.push(resImg);
  }

  if (attachmentsProcessed.length > 0) {
    const currentMetadata = lead.metadata || {};
    // Clean flag so we know it has been processed
    const updatedMetadata = {
      ...currentMetadata,
      has_profile_attachment: profile_image_base64 ? false : currentMetadata.has_profile_attachment,
      has_contact_attachment: contact_image_base64 ? false : currentMetadata.has_contact_attachment,
      attachments_processed: [
        ...(currentMetadata.attachments_processed || []).filter(
          item => !attachmentsProcessed.some(newItem => newItem.type === item.type)
        ),
        ...attachmentsProcessed
      ]
    };
    
    try {
      await supabase
        .from("taxmanagers_leads")
        .update({ metadata: updatedMetadata })
        .eq("id", leadId);
      lead.metadata = updatedMetadata;
      console.log("[personalize_agent] Saved attachments_processed to Supabase for lead", leadId);
    } catch (dbErr) {
      console.error("Error updating lead metadata with attachments_processed:", dbErr);
    }
  }

  const metadata = lead.metadata || {};

  // Determine lead role using contact_intelligence (first priority) or legacy lead_type
  let leadType = metadata.contact_intelligence?.lead_classification || metadata.lead_type || metadata.lead_role;
  let leadTypePromptStr = "";

  if (leadType) {
    leadTypePromptStr = `Classificação atual do lead: ${leadType}. NUNCA altere essa classificação caso tenha sido definida pelo sistema ou corrigida por um humano. Mantenha essa mesma classificação.`;
  } else {
    // If not present, suggest classification as hypothesis
    const cargo = (lead?.cargo || "").toLowerCase();
    const empresa = (lead?.empresa || "").toLowerCase();

    const partnerKeywords = [
      "advogado", "advogada", "consultor", "consultora", "contador", "contadora", 
      "tax", "fiscal", "tributario", "tributaria", "advisory", "partner", "socio", 
      "socia", "founder", "cfo", "controller", "diretor fiscal", "diretora fiscal", 
      "financeiro", "financeira", "boutique", "escritorio", "direito", "contabilidade"
    ];

    const isPartnerRelated = partnerKeywords.some(kw => cargo.includes(kw) || empresa.includes(kw));
    let suggestedRole = "indefinido";
    if (isPartnerRelated) {
      suggestedRole = "prospect_parceiro";
    } else {
      const companyKeywords = [
        "industria", "industrial", "varejo", "varejista", "agro", "agronegocio", 
        "energia", "construcao", "incorporadora", "logistica", "grupo", "holding", 
        "comercio", "comercial", "servicos", "transportadora", "distribuidora", "fabrica"
      ];
      const isCompanyRelated = companyKeywords.some(kw => cargo.includes(kw) || empresa.includes(kw));
      if (isCompanyRelated) {
        suggestedRole = "cliente_final_empresa";
      }
    }
    leadType = suggestedRole;
    leadTypePromptStr = `lead_type ausente. Sugestão: ${suggestedRole}. Marque esta classificação claramente como uma hipótese.`;
  }

  const prompt = buildPrompt(lead, context_extra, agentProfile, agentOutputs, interactions, leadType, leadTypePromptStr);

  const models = [
    "llama-3.3-70b-versatile",
    "llama-3.1-8b-instant"
  ];

  for (const model of models) {
    try {
      const result = await callGroq(model, prompt);
      
      // Validação Básica do JSON (Fallback em caso de corrupção ou quebra severa da estrutura)
      if (!result.contact_intelligence || !result.messages || !result.interaction_strategy) {
        throw new Error("JSON_SCHEMA_ERROR: Estrutura principal inválida.");
      }

      const validClassifications = ["buyer", "internal_influencer", "potential_partner", "potential_competitor", "no_fit", "insufficient_information"];
      if (result.contact_intelligence.lead_classification && !validClassifications.includes(result.contact_intelligence.lead_classification)) {
        throw new Error("JSON_SCHEMA_ERROR: Enum de lead_classification inválido.");
      }

      // Tratamento de Concorrente no Backend (Regra 3 do usuário)
      const isCompetitor = result.contact_intelligence?.lead_classification === "potential_competitor" 
                           || result.contact_intelligence?.competition_risk === "high";

      if (isCompetitor) {
        result.interaction_strategy.should_contact = false;
        result.interaction_strategy.should_pitch = false;
        if (result.messages) {
          result.messages.connection_note = "";
          result.messages.linkedin_message = "";
          result.messages.email_message = "";
          result.messages.content_share_message = "";
        }
        
        if (!result.contact_intelligence.strategic_alerts) {
          result.contact_intelligence.strategic_alerts = [];
        }
        result.contact_intelligence.strategic_alerts.push("BLOQUEIO SISTÊMICO: Risco concorrencial detectado. Mensagens zeradas.");
        
        if (!result.operator_guidance) result.operator_guidance = {};
        result.operator_guidance.next_step = "Revisão humana obrigatória. Risco concorrencial alto detectado.";
      }

      // Merge Profundo no Metadata
      const newMetadata = deepMerge(lead.metadata || {}, {
        contact_intelligence: result.contact_intelligence || {},
        interaction_strategy: result.interaction_strategy || {},
        discovery: result.discovery || {},
        architecture_status: {
          scope: "contact_level_only",
          company_entity_required: true,
          company_intelligence_available: false,
          ai_schema_version: "contact_intelligence_v1",
          generated_at: new Date().toISOString(),
          model_used: model
        }
      });
      
      // Se houvesse linkedin_message válida gerada, nós a guardamos no metadata, mas o frontend 
      // tem apenas 3 abas, mapeadas a seguir.
      if (result.messages?.linkedin_message) {
         newMetadata.contact_intelligence.messages = newMetadata.contact_intelligence.messages || {};
         newMetadata.contact_intelligence.messages.linkedin_message = result.messages.linkedin_message;
      }

      // Adaptação de chaves para retrocompatibilidade do Frontend:
      // messages.connection_note -> short_note (passo1_mensagem)
      // messages.email_message -> long_email (passo2_mensagem)
      // messages.content_share_message -> article_pitch (passo3_mensagem)
      let shortNote = result.messages?.connection_note || "";
      let longEmail = result.messages?.email_message || "";
      let articlePitch = result.messages?.content_share_message || "";

      return res.status(200).json({
        error: false,
        model,
        short_note: shortNote,
        long_email: longEmail,
        article_pitch: articlePitch,
        strategy_summary: result.operator_guidance?.strategy_summary || "",
        next_step: result.operator_guidance?.next_step || "",
        updated_metadata: newMetadata
      });
    } catch (err) {
      console.error("[personalize_agent]", model, err);
      if (err.message.includes("JSON_SCHEMA_ERROR")) {
        return res.status(200).json(fallbackResponse(lead, "schema_validation_failed"));
      }
    }
  }

  return res.status(200).json(fallbackResponse(lead, "groq_failed"));
}
