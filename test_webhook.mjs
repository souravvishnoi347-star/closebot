async function testWebhook() {
  const url = 'https://closebot.hostbolt.in/api/whatsapp/webhook';
  const payload = JSON.stringify({
    object: 'whatsapp_business_account',
    entry: []
  });

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hub-signature-256': 'sha256=fake_signature'
      },
      body: payload
    });
    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${text}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

testWebhook();
