(async () => {
  try {
    const response = await fetch('https://app.taxmanagers.com.br/api/todeacordo-consensus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        meeting_id: 'test-123',
        source_platform: 'google-meet',
        participants: ['Test User'],
        transcript_segments: [
          { speaker: 'Test User', text: 'Então vamos fechar o acordo de prestar o serviço até sexta-feira por dez mil reais.' },
          { speaker: 'Test User', text: 'Sim, concordo perfeitamente com todos esses prazos e valores.' },
          { speaker: 'Test User', text: 'Excelente, está tudo combinado e fechado.' }
        ]
      })
    });

    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    const text = await response.text();
    console.log('Body:', text);
  } catch (err) {
    console.error('Error:', err);
  }
})();
