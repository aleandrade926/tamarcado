export const config = {
  runtime: 'edge', // Using Edge runtime for fast API calls if desired, or Node. 
};

// Se precisar rodar no node: // export const config = {}; 
// Mas vamos usar Edge runtime (padrão em muitos endpoints Vercel de IA)

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const MASTER_PROMPT = `
Você é o Agente Foot in the Door, um especialista em gerar abordagens iniciais hiperpersonalizadas para tomadores de decisão corporativos.
Sua única função é ler os dados fornecidos de um Lead e gerar uma Análise de Oportunidade e uma Mensagem Inicial (Cold Message) baseada estritamente em FATOS fornecidos.

REGRAS OBRIGATÓRIAS (PUNIÇÃO SE VIOLADAS):
1. NUNCA invente oportunidades vazias. Não use chavões genéricos como "diagnóstico tributário completo", "eficiência fiscal", "planejamento genérico".
2. NUNCA invente números ou estatísticas que não estejam nos fatos confirmados (ex: não diga "você pode economizar de 1% a 3% do faturamento").
3. NUNCA crie urgências falsas, como "Receita Sintonia" ou "Malha fiscal iminente", a menos que haja um fato confirmando que a empresa foi notificada.
4. NUNCA inclua CTAs longos ou agressivos como "reunião de 15 minutos". Use CTAs curtos e de baixo atrito (ex: "faz sentido falarmos brevemente?").
5. O output DEVE ser exclusivamente um JSON válido, sem markdown antes ou depois.

A SAÍDA DEVE CONTER EXATAMENTE AS CHAVES:
- status: "ready"
- profile_reading: (string) Resumo de quem é a pessoa
- opportunity_title: (string) Título curto da oportunidade identificada
- opportunity_type: (string) Tipo da oportunidade
- specific_mechanism: (string) Mecanismo ESPECÍFICO ligado aos fatos fornecidos. Seja granular, não genérico.
- economic_consequence: (string) Impacto econômico realista baseado puramente no mecanismo e setor (sem invenção numérica arbitrária).
- legitimate_urgency: (string) Um motivo real e atual para avaliar isso agora (legislação recente do setor, data limite).
- confirmed_facts: (array of strings) Apenas fatos que vieram no input original.
- reasonable_inferences: (array of strings) Conclusões lógicas a partir dos fatos, com cautela.
- hypotheses_to_validate: (array of strings) Pelo menos 3 hipóteses técnicas que podem se aplicar à empresa.
- supporting_evidence: (array of strings) Evidências usadas.
- approach_risk: "low" | "medium" | "high"
- recommended_message: (string) A mensagem final. Max 600 caracteres. Direta, sem jargão excessivo, focada em gerar curiosidade. Sem promessas falsas. Termine com CTA curto.
- short_message: (string) Versão de 2 linhas para WhatsApp/LinkedIn curto.
- recommended_channel: (string) Qual melhor canal.
- follow_up_days: (number) Quantos dias para o follow up.
- information_to_validate: (array of strings) O que falta confirmar.
- next_action: (string) Qual ação comercial imediata.
- blocking_reasons: (array of strings) Vazio se "ready".

Se você não tiver fatos operacionais ou de setor suficientes para criar um mecanismo específico válido, não force. Retorne um status "blocked" e preencha "blocking_reasons" listando o que faltou, deixando a "recommended_message" vazia.
`;

export default async function handler(req) {
  // 1. Accept only POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 2. Access key exclusively here
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GROQ_API_KEY is not configured on the server.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    const rawBody = await req.text();
    // 3. Limit body size (e.g. max 10KB)
    if (rawBody.length > 10240) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    body = JSON.parse(rawBody);
  } catch (err) {
    // 7. Handle invalid JSON payload
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 2. Reject invalid payload before calling Groq
  if (!body.nome || !body.empresa || !body.cargo || !body.vinculo_atual_confirmado) {
    return new Response(JSON.stringify({
       status: "blocked",
       blocking_reasons: ["Payload rejected at endpoint: missing core fields or unconfirmed relationship."],
       recommended_message: ""
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const promptText = `
DADOS DO LEAD:
Nome: ${body.nome}
Cargo: ${body.cargo}
Empresa: ${body.empresa}
Setor: ${body.setor}
Fatos Confirmados: ${JSON.stringify(body.fatos_confirmados || [])}
Histórico: ${JSON.stringify(body.historico || [])}
Relacionamento Prévio: ${body.relacionamento_previo || "Nenhum"}

Com base nesses dados e nas regras mestre estritas, gere a saída estruturada em JSON.
`;

  try {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout

    const groqResponse = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: "system", content: MASTER_PROMPT },
          { role: "user", content: promptText }
        ],
        temperature: 0.2, // 4. Low temperature
        max_completion_tokens: 1024, // 6. Use max_completion_tokens instead of max_tokens
        response_format: { type: "json_object" }, // 5. Force JSON output
      }),
    });

    clearTimeout(timeoutId);

    if (!groqResponse.ok) {
      const err = await groqResponse.text();
      return new Response(JSON.stringify({ 
        status: "blocked", 
        blocking_reasons: ["Falha técnica na geração LLM."],
        recommended_message: ""
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await groqResponse.json();
    const content = data?.choices?.[0]?.message?.content || "{}";
    const usage = data?.usage || {};
    const executionTime = Date.now() - startTime;

    try {
      const parsedContent = JSON.parse(content);
      
      // Inject debug metadata required by manual tests
      const result = {
        ...parsedContent,
        _debug_metadata: {
          prompt_tokens: usage.prompt_tokens,
          completion_tokens: usage.completion_tokens,
          execution_time_ms: executionTime,
          raw_response: content
        }
      };

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (parseErr) {
      return new Response(JSON.stringify({ 
        status: "blocked", 
        blocking_reasons: ["LLM retornou um JSON malformado."],
        recommended_message: ""
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

  } catch (err) {
    if (err.name === 'AbortError') {
      return new Response(JSON.stringify({ 
        status: "blocked", 
        blocking_reasons: ["Timeout ao se comunicar com a IA (Groq)."],
        recommended_message: ""
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    return new Response(JSON.stringify({ 
      status: "blocked", 
      blocking_reasons: ["Erro interno ao chamar a IA."],
      recommended_message: ""
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
