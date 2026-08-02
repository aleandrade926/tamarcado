import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateInput,
  validateOutput,
  buildBlockedOutput,
  EXAMPLE_READY_PAYLOAD,
  EXAMPLE_BLOCKED_PAYLOAD,
  type FootInTheDoorInput,
  type FootInTheDoorOutput,
} from './foot-in-the-door-agent.ts';

describe('Validador Foot in the Door', () => {

  test('1. validateInput rejeita payload bloqueado (campos obrigatórios)', () => {
    const errors = validateInput(EXAMPLE_BLOCKED_PAYLOAD);
    assert.ok(errors.length > 0, 'Deve retornar erros para payload bloqueado');
    assert.ok(errors.some(e => e.includes('setor')), 'Deve acusar falta de setor');
    assert.ok(errors.some(e => e.includes('cargo')), 'Deve acusar falta de cargo');
    assert.ok(errors.some(e => e.includes('Vínculo profissional atual não confirmado')), 'Deve acusar vínculo não confirmado');
  });

  test('2. validateInput aceita payload validado (ready)', () => {
    const errors = validateInput(EXAMPLE_READY_PAYLOAD);
    assert.equal(errors.length, 0, 'Não deve retornar erros para payload válido');
  });

  test('3. validateOutput bloqueia saídas genéricas', () => {
    const mockOutput: FootInTheDoorOutput = {
      status: "ready",
      profile_reading: "",
      opportunity_title: "Revisão geral",
      opportunity_type: "Diagnóstico tributário completo",
      specific_mechanism: "Faremos um diagnóstico tributário completo.",
      economic_consequence: "",
      legitimate_urgency: "",
      confirmed_facts: [],
      reasonable_inferences: [],
      hypotheses_to_validate: [],
      supporting_evidence: [],
      approach_risk: "high",
      recommended_message: "Oferecemos um diagnóstico tributário completo. Quer ver?",
      short_message: "",
      recommended_channel: "",
      follow_up_days: 0,
      information_to_validate: [],
      next_action: "",
      blocking_reasons: []
    };

    const validated = validateOutput(mockOutput);
    assert.equal(validated.status, "blocked", "Deve bloquear por conter buzzwords");
    assert.ok(validated.blocking_reasons.some(r => r.includes("diagnóstico tributário completo")));
  });

  test('4. validateOutput bloqueia números infundados', () => {
    const mockOutput: FootInTheDoorOutput = {
      status: "ready",
      profile_reading: "",
      opportunity_title: "Revisão",
      opportunity_type: "Recuperação",
      specific_mechanism: "Análise baseada em dados",
      economic_consequence: "Empresas costumam achar de 1% a 3% do faturamento.",
      legitimate_urgency: "",
      confirmed_facts: [],
      reasonable_inferences: [],
      hypotheses_to_validate: [],
      supporting_evidence: [],
      approach_risk: "low",
      recommended_message: "Oi, podemos economizar de 1% a 3% do faturamento.",
      short_message: "",
      recommended_channel: "",
      follow_up_days: 0,
      information_to_validate: [],
      next_action: "",
      blocking_reasons: []
    };

    const validated = validateOutput(mockOutput);
    assert.equal(validated.status, "blocked", "Deve bloquear por números não sustentados");
    assert.ok(validated.blocking_reasons.some(r => r.includes("1% a 3%")));
  });

  test('5. validateOutput bloqueia urgências inventadas', () => {
    const mockOutput: FootInTheDoorOutput = {
      status: "ready",
      profile_reading: "",
      opportunity_title: "Revisão",
      opportunity_type: "Recuperação",
      specific_mechanism: "Análise",
      economic_consequence: "",
      legitimate_urgency: "Com a receita sintonia cruzando os dados, a malha fiscal iminente vai pegar você.",
      confirmed_facts: [],
      reasonable_inferences: [],
      hypotheses_to_validate: [],
      supporting_evidence: [],
      approach_risk: "low",
      recommended_message: "Cuidado com a malha fiscal iminente.",
      short_message: "",
      recommended_channel: "",
      follow_up_days: 0,
      information_to_validate: [],
      next_action: "",
      blocking_reasons: []
    };

    const validated = validateOutput(mockOutput);
    assert.equal(validated.status, "blocked", "Deve bloquear por urgência infundada");
    assert.ok(validated.blocking_reasons.some(r => r.includes("malha fiscal iminente")));
  });

  test('6. validateOutput preserva saídas limpas', () => {
    const mockOutput: FootInTheDoorOutput = {
      status: "ready",
      profile_reading: "CFO na Tech.",
      opportunity_title: "Revisão PIS/Cofins sobre Licenciamento",
      opportunity_type: "Planejamento Preventivo",
      specific_mechanism: "Análise de receitas exclusivas de licenciamento visando adequação ao entendimento do STF.",
      economic_consequence: "Redução de base de cálculo do ISS e potencial crédito",
      legitimate_urgency: "Adequação antes do próximo balanço",
      confirmed_facts: ["Vende software"],
      reasonable_inferences: ["Receita principal é licenciamento"],
      hypotheses_to_validate: ["Está pagando ISS sobre tudo"],
      supporting_evidence: [],
      approach_risk: "low",
      recommended_message: "Olá, vi que vocês atuam com software. Uma revisão na base do licenciamento pode ajudar. Abraço.",
      short_message: "Podemos conversar sobre licenciamento?",
      recommended_channel: "email",
      follow_up_days: 3,
      information_to_validate: [],
      next_action: "Enviar email",
      blocking_reasons: []
    };

    const validated = validateOutput(mockOutput);
    assert.equal(validated.status, "ready", "Não deve bloquear se não violar as regras");
    assert.equal(validated.blocking_reasons.length, 0);
  });
});
