const parseRSS = (xml, source) => {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
  return items.slice(0, 10).map((m, i) => {
    const title = m[1].match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || m[1].match(/<title>(.*?)<\/title>/)?.[1] || "";
    const snippet = m[1].match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]?.replace(/<[^>]+>/g, "").slice(0, 120) || "";
    return {
      source,
      title: title.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim(),
      snippet: snippet.replace(/&amp;/g,"&").trim(),
      score: 100 - i
    };
  }).filter(i => i.title.length > 3);
};

const QUERIES = {
  instagram: [
    "viral reels instagram brasil",
    "conteudo viral instagram criadores brasileiros",
    "trends instagram brasil semana",
  ],
  tiktok: [
    "viral tiktok brasil semana",
    "tendencia tiktok brasileiro",
    "sons virais tiktok brasil",
  ],
  youtube: [
    "video viral youtube brasil",
    "shorts virais youtube brasil",
    "youtubers brasileiros trending",
  ],
  ia_br: [
    "inteligencia artificial empresas brasil",
    "automacao whatsapp negocios brasil",
    "chatbot IA atendimento brasil",
  ],
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { source, pilar, gatilho, tema } = req.query;
  if (!source || !QUERIES[source]) {
    return res.status(400).json({ error: 'Fonte inválida', items: [] });
  }

  // Escolhe query dinamicamente baseado no pilar/gatilho
  const queries = QUERIES[source];
  let queryIndex = 0;
  if (pilar) {
    const pilarMap = {
      "Autoridade em IA": 2,
      "Educação do mercado": 0,
      "Prova social": 1,
      "Bastidores de automação": 2,
      "Conteúdo viral": 0,
    };
    queryIndex = pilarMap[pilar] ?? Math.floor(Math.random() * queries.length);
  } else {
    queryIndex = Math.floor(Math.random() * queries.length);
  }

let searchQuery;
  if (tema && tema.trim().length > 2) {
    const sourceLabel = { instagram: "instagram reels", tiktok: "tiktok viral", youtube: "youtube shorts", ia_br: "empresas brasil" }[source] || source;
    searchQuery = encodeURIComponent(`${tema} ${sourceLabel} brasil`);
  } else {
    searchQuery = encodeURIComponent(queries[queryIndex]);
  }
  const url = `https://news.google.com/rss/search?q=${searchQuery}&hl=pt-BR&gl=BR&ceid=BR:pt-419`;

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NexusIA/1.0)' }
    });
    const xml = await response.text();
    const items = parseRSS(xml, source.charAt(0).toUpperCase() + source.slice(1));
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).json({ error: error.message, items: [] });
  }
}
