export interface ChatAnalysisResult {
  action: string;
  direction: "inbound" | "outbound" | "internal";
  hasInboundReply: boolean;
}

/**
 * Detecta se um histórico ou texto de chat colado/capturado contém uma resposta real do lead
 * ou se é apenas uma mensagem enviada (outbound) pelo SDR/usuário.
 */
export function detectChatActionAndDirection(
  inputOrChat?: string | null,
  explicitAction?: string | null,
  leadName?: string | null
): ChatAnalysisResult {
  const text = (inputOrChat || "").trim();
  const textLower = text.toLowerCase();

  // Se uma ação explícita de conexão/engajamento que não seja chat foi passada:
  if (explicitAction === "Pediu Conexão (Inbound)") {
    return { action: "Pediu Conexão (Inbound)", direction: "inbound", hasInboundReply: true };
  }
  if (explicitAction === "Aceitou Conexão (Outbound)") {
    return { action: "Aceitou Conexão (Outbound)", direction: "outbound", hasInboundReply: false };
  }
  if (explicitAction === "Curtiu Artigo") {
    return { action: "Curtiu Artigo", direction: "inbound", hasInboundReply: true };
  }
  if (explicitAction === "Assinou Newsletter") {
    return { action: "Assinou Newsletter", direction: "inbound", hasInboundReply: true };
  }

  if (!text) {
    if (explicitAction === "Respondeu Chat") {
      return { action: "Respondeu Chat", direction: "inbound", hasInboundReply: true };
    }
    return { action: explicitAction || "Importado", direction: "internal", hasInboundReply: false };
  }

  // Indicadores explícitos de mensagem enviada pelo usuário (Outbound)
  const isExplicitOutboundMarker = 
    textLower.includes("mensagem enviada") ||
    textLower.includes("mensagem visualizada") ||
    textLower.includes("enviado por você") ||
    textLower.includes("enviada por você") ||
    textLower.includes("você enviou") ||
    /^você\s*[:\n]/i.test(text);

  // Verifica se há respostas de prospects/leads (Inbound)
  let hasInboundReply = false;

  if (leadName && leadName.trim().length >= 2) {
    const firstName = leadName.trim().split(" ")[0].toLowerCase();
    // Procura por "Carlos:", "Carlos Silva:", "Carlos\n"
    if (textLower.includes(`${firstName}:`) || textLower.includes(`${leadName.toLowerCase()}:`)) {
      hasInboundReply = true;
    }
  }

  // Palavras/expressões típicas de resposta de lead
  const inboundKeywords = [
    "obrigado", "obrigada", "pode mandar", "pode enviar", "tenho interesse",
    "qual o valor", "como funciona", "me liga", "vamos conversar", "pode ser",
    "bom dia, pode", "boa tarde, pode", "boa noite, pode", "meu email", "meu e-mail",
    "meu telefone", "meu whats", "já temos", "não tenho interesse", "no momento não",
    "estou viajando", "fale com"
  ];
  if (inboundKeywords.some(kw => textLower.includes(kw))) {
    hasInboundReply = true;
  }

  // Se houver falantes mapeados no início da linha que não sejam "Você" (desconsiderando horários como 14:32)
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  const speakerLines = lines.filter(line => {
    const lineWithoutTime = line.replace(/\b\d{1,2}:\d{2}\b/g, "").replace(/https?:/gi, "").trim();
    // Verifica se a linha tem o formato "Nome:" (ex: "Carlos: Olá") ou "Você:"
    return /^[a-zA-ZÀ-ÿ0-9\s_-]{2,30}\s*:/i.test(lineWithoutTime) || lineWithoutTime.toLowerCase().startsWith("você");
  });

  const nonYouSpeakers = speakerLines.filter(l => {
    const lower = l.toLowerCase();
    return !lower.startsWith("você") && !lower.startsWith("mensagem") && !lower.startsWith("mensagens");
  });

  if (nonYouSpeakers.length > 0) {
    hasInboundReply = true;
  }

  // Se houver indicador outbound e NÃO houver resposta do lead
  if (isExplicitOutboundMarker && !hasInboundReply) {
    return { action: "Mensagem Enviada (Outbound)", direction: "outbound", hasInboundReply: false };
  }

  // Mensagem única de pitch/abordagem inicial sem réplica
  const isPitchMessage = /^(olá|ola|oi|bom dia|boa tarde|boa noite)\s+[a-zà-ÿ]+/i.test(text);
  if (isPitchMessage && !hasInboundReply && (textLower.includes("vi seu perfil") || textLower.includes("gostaria de") || textLower.includes("taxmanagers") || textLower.includes("enviada") || !text.includes("\n"))) {
    return { action: "Mensagem Enviada (Outbound)", direction: "outbound", hasInboundReply: false };
  }

  if (hasInboundReply) {
    return { action: "Respondeu Chat", direction: "inbound", hasInboundReply: true };
  }

  // Se o usuário selecionou 4 ("Respondeu Chat") explicitamente no prompt e não for explicitamente apenas outbound
  if (explicitAction === "Respondeu Chat" && !isExplicitOutboundMarker) {
    return { action: "Respondeu Chat", direction: "inbound", hasInboundReply: true };
  }

  // Fallback para mensagens enviadas por padrão quando não há evidência de resposta do lead
  return { action: "Mensagem Enviada (Outbound)", direction: "outbound", hasInboundReply: false };
}
