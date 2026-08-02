import { describe, it } from "node:test";
import assert from "node:assert";
import { detectChatActionAndDirection } from "./chat-direction.ts";

describe("detectChatActionAndDirection", () => {
  it("deve detectar apenas mensagem enviada pelo SDR com marcador Mensagem Enviada", () => {
    const chat = "Olá Carlos, vi seu perfil no LinkedIn e gostaria de apresentar nossa solução.\nMensagem enviada 14:32";
    const res = detectChatActionAndDirection(chat, "Respondeu Chat", "Carlos Silva");

    assert.strictEqual(res.action, "Mensagem Enviada (Outbound)");
    assert.strictEqual(res.direction, "outbound");
    assert.strictEqual(res.hasInboundReply, false);
  });

  it("deve detectar resposta do lead quando o lead respondeu", () => {
    const chat = "Você: Olá Carlos, tudo bem?\nCarlos: Olá Alexandre, tudo bem sim. Pode me enviar mais detalhes por favor?";
    const res = detectChatActionAndDirection(chat, "Respondeu Chat", "Carlos Silva");

    assert.strictEqual(res.action, "Respondeu Chat");
    assert.strictEqual(res.direction, "inbound");
    assert.strictEqual(res.hasInboundReply, true);
  });

  it("deve detectar mensagem de pitch simples enviada sem resposta", () => {
    const chat = "Olá Carlos, tudo bem? Vi sua atuação como CFO na Empresa ABC e gostaria de conectar.";
    const res = detectChatActionAndDirection(chat, undefined, "Carlos Silva");

    assert.strictEqual(res.action, "Mensagem Enviada (Outbound)");
    assert.strictEqual(res.direction, "outbound");
    assert.strictEqual(res.hasInboundReply, false);
  });

  it("deve respeitar ação explícita Pediu Conexão (Inbound)", () => {
    const res = detectChatActionAndDirection("", "Pediu Conexão (Inbound)", "Carlos Silva");
    assert.strictEqual(res.action, "Pediu Conexão (Inbound)");
    assert.strictEqual(res.direction, "inbound");
  });

  it("deve respeitar ação explícita Aceitou Conexão (Outbound)", () => {
    const res = detectChatActionAndDirection("", "Aceitou Conexão (Outbound)", "Carlos Silva");
    assert.strictEqual(res.action, "Aceitou Conexão (Outbound)");
    assert.strictEqual(res.direction, "outbound");
  });
});
