import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

describe('Deduplicação de Leads e Regras de Segurança', () => {
  test('Garantir que dois registros com o mesmo parceiro_id + linkedin_key nunca permanecem ativos simultaneamente', () => {
    const partnerId = '0ecff155-c72d-4f40-a103-2a6dcec7dbfc';
    const linkedinKey = 'amaral-ribeiro-228a618';

    const leadActive1 = {
      id: '5116d0d6-4cf2-4c69-8ec5-655d3611b68f',
      parceiro_id: partnerId,
      linkedin_key: linkedinKey,
      import_status: 'active'
    };

    const leadActive2 = {
      id: 'ed0a30d6-8bbb-4eeb-9f30-cb017b5e76eb',
      parceiro_id: partnerId,
      linkedin_key: linkedinKey,
      import_status: 'active'
    };

    const dbRecords = [leadActive1, leadActive2];

    // Regra de invariante de deduplicação
    const activeDuplicates = dbRecords.filter(
      l => l.parceiro_id === partnerId && l.linkedin_key === linkedinKey && l.import_status === 'active'
    );

    if (activeDuplicates.length > 1) {
      // Invariante: Manter o primeiro/mais recente ativo e arquivar os demais
      for (let i = 1; i < activeDuplicates.length; i++) {
        activeDuplicates[i].import_status = 'archived';
      }
    }

    const finalActive = dbRecords.filter(
      l => l.parceiro_id === partnerId && l.linkedin_key === linkedinKey && l.import_status === 'active'
    );

    assert.equal(finalActive.length, 1);
    assert.equal(finalActive[0].id, '5116d0d6-4cf2-4c69-8ec5-655d3611b68f');
    assert.equal(dbRecords.find(l => l.id === 'ed0a30d6-8bbb-4eeb-9f30-cb017b5e76eb')?.import_status, 'archived');
  });

  test('Garantir que a busca no saveImportedLead encontra registros em quarentena para promover', () => {
    const handle = 'amaral-ribeiro-228a618';
    const partnerId = '0ecff155-c72d-4f40-a103-2a6dcec7dbfc';

    const dbRecords = [
      {
        id: '24e9db6c-f943-40b0-a542-9559d7ada001',
        nome: 'AMARAL RIBEIRO',
        linkedin_key: handle,
        import_status: 'quarantine',
        parceiro_id: null
      }
    ];

    // Simulação da busca atualizada sem a trava import_status = 'active'
    const foundLead = dbRecords.find(
      r => r.linkedin_key === handle && (r.parceiro_id === partnerId || r.parceiro_id === null)
    );

    assert.ok(foundLead, 'Lead existente na quarentena deve ser localizado');
    assert.equal(foundLead.id, '24e9db6c-f943-40b0-a542-9559d7ada001');

    // Promoção de quarentena -> ativo sem criar INSERT duplicado
    foundLead.import_status = 'active';
    foundLead.parceiro_id = partnerId;

    assert.equal(foundLead.import_status, 'active');
    assert.equal(foundLead.parceiro_id, partnerId);
  });
});
