# NaKus MCP — Slovak unit prices for agents

**Remote MCP (no install):** `https://www.nakus.sk/api/mcp`  
**Official Registry:** [`sk.nakus/unit-price`](https://registry.modelcontextprotocol.io/v0.1/servers/sk.nakus%2Funit-price/versions/latest) (`server.json` in this repo)  
**Auth:** none 🔓 · **Brand:** [nakus.sk](https://www.nakus.sk) (NaKus = „na kus“) — **not** nakup.sk

Live landed unit prices (€/piece, €/kg, €/wash…) across Slovak e-shops. Tools always return `buy_url` on `nakus.sk/out/…?src=ai` — never raw merchant or Heureka links.

## Cursor / Claude / VS Code

```json
{
  "mcpServers": {
    "nakus": {
      "url": "https://www.nakus.sk/api/mcp"
    }
  }
}
```

## Tools

| Tool | What it does |
|------|----------------|
| `search_cite_answers` | Find Cite slugs when you do not know EAN/answer yet |
| `get_unit_price` | Landed €/unit by Cite `answer` slug, **`ean`**, product slug, or `q` |
| `get_price_card` | 1200×630 PNG price card URL for multimodal agents |

## Also free

- REST: `GET https://www.nakus.sk/api/tools/unit-price?ean=8595602526376`
- OpenAPI: https://www.nakus.sk/api/tools/openapi.json
- Atom Cite feed: https://www.nakus.sk/odpoved/feed.xml
- Install page: https://www.nakus.sk/mcp
- Dataset (CSV): https://www.nakus.sk/api/answers/dataset.csv

## Docs

- https://www.nakus.sk/llms.txt
- https://www.nakus.sk/.well-known/ai-commerce.md
- https://www.nakus.sk/.well-known/mcp/server-card.json

## License

MIT — documentation and this stub repo only. Price data © respective merchants; comparison UX © Jasne Labs / nakus.sk.
