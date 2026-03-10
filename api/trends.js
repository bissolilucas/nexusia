const parseRSS = (xml, source) => {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
  return items.slice(0, 10).map((m, i) => {
    const title = m[1].match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || m[1].match(/<title>(.*?)<\/title>/)?.[1] || "";
    const snippet = m[1].match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]?.replace(/<[^>]+>/g, "").slice(0, 120) || "";
    return {
      source,
      title: title.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim(),
      snippet: snippet.replace(/&amp;/g, "&").trim(),
      score: 100 - i
    };
  }).filter(i => i.title.length > 3);
};

const SOURCES = {
  instagram: { url: "https://news.google.com/rss/search?q=tendencias+instagram+brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419", label: "Instagram Trends" },
  tiktok:    { url: "https://news.google.com/rss/search?q=tendencias+tiktok+viral+brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419", label: "TikTok Trends" },
  youtube:   { url: "https://news.google.com/rss/search?q=tendencias+youtube+brasil+viral&hl=pt-BR&gl=BR&ceid=BR:pt-419", label: "YouTube Trends" },
  ia_br:     { url: "https://news.google.com/rss/search?q=inteligencia+artificial+automacao+empresas+brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419", label: "IA & Automação BR" },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { source } = req.query;
  if (!source || !SOURCES[source]) {
    return res.status(400).json({ error: 'Fonte inválida', items: [] });
  }

  try {
    const response = await fetch(SOURCES[source].url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NexusIA/1.0)' }
    });
    const xml = await response.text();
    const items = parseRSS(xml, SOURCES[source].label);
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).json({ error: error.message, items: [] });
  }
}
