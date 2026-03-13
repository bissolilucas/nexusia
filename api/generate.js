export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    let body = req.body;
    if (!body || typeof body === 'string') {
      try { body = JSON.parse(body || '{}'); } catch { body = {}; }
    }

    const provider = body.provider || 'claude';
    delete body.provider;

    if (provider === 'openai') {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) return res.status(500).json({ error: 'OpenAI API key não configurada' });

     const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          max_tokens: body.max_tokens || 1200,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: "Você responde SOMENTE com JSON válido, sem markdown, sem explicações, sem blocos de código." },
            ...body.messages
          ],
        }),
      });
      const data = await response.json();
      // Normaliza resposta OpenAI para formato Anthropic
      const text = data.choices?.[0]?.message?.content || '';
      return res.status(200).json({ content: [{ type: 'text', text }] });
    }

    // Claude (default)
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Anthropic API key não configurada' });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    try {
      return res.status(200).json(JSON.parse(text));
    } catch {
      return res.status(200).send(text);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
