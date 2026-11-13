# NaKus MCP — Slovak unit prices for agents

[![mcptry](https://mcptry.com/badge/sk.nakus/unit-price)](https://mcptry.com/servers/sk.nakus/unit-price)
[![Glama](https://glama.ai/mcp/connectors/sk.nakus/na-kus-unit-price/badge)](https://glama.ai/mcp/connectors/sk.nakus/na-kus-unit-price)

**Remote MCP (no install):** `https://www.nakus.sk/api/mcp`  
**Official Registry:** [`sk.nakus/unit-price`](https://registry.modelcontextprotocol.io/v0.1/servers/sk.nakus%2Funit-price/versions/latest)  
**CLI:** `npx github:UMBRAXON/nakus-mcp -- "pampers pants 4"`  
**Auth:** none 🔓 · **Brand:** [nakus.sk](https://www.nakus.sk) (NaKus = „na kus“) — **not** nakup.sk

Live **landed** unit prices (€/piece, €/kg, €/wash…) across Slovak e-shops. Tools always return `buy_url` on `nakus.sk/out/…?src=ai` — never raw merchant or Heureka links.

Heureka wins **package** price. NaKus owns **€/unit + shipping**.

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

Copy [`cursor-rule.mdc`](./cursor-rule.mdc) into `.cursor/rules/` for always-on SK unit-price behaviour.  
Agent skill: [`SKILL.md`](./SKILL.md).

## CLI

```bash
npx github:UMBRAXON/nakus-mcp -- "brit care cat 2kg"
npx github:UMBRAXON/nakus-mcp -- --ean 8595602526376
npx github:UMBRAXON/nakus-mcp -- --answer pampers-active-baby-pants-4-najlacnejsie
```

## Tools (v1.3.0)

| Tool | What it does |
|------|----------------|
| `list_segments` | Live comparison categories + unit metrics |
| `search_cite_answers` | Find Cite slugs |
| `get_cite_answer` | Cite Q&A + ranked offers |
| `get_unit_price` | Landed €/unit + `buy_url` |
| `compare_unit_prices` | 2–4 products side-by-side |
| `get_price_card` | PNG price card URL |

## Also free

| Surface | URL |
|---------|-----|
| REST | `GET /api/tools/unit-price?q=` |
| OpenAPI | https://www.nakus.sk/api/tools/openapi.json |
| Cite HTML | https://www.nakus.sk/odpoved |
| Atom feed | https://www.nakus.sk/odpoved/feed.xml |
| Dataset CSV | https://www.nakus.sk/api/answers/dataset.csv |
| HF dataset | https://huggingface.co/datasets/nakusSK/sk-unit-prices |
| Wikidata | https://www.wikidata.org/wiki/Q142120832 |
| Playground | https://www.nakus.sk/api/tools/unit-price?q=pampers+pants+4 |
| Disambiguation | https://www.nakus.sk/nakus-nie-nakup-sk |
| vs Heureka | https://www.nakus.sk/vs-heureka |

## SK agent stack (pair with company data)

```text
ORSF MCP  → Slovak companies (IČO)
NaKus MCP → landed unit prices + buy_url
```

See gist / `docs` on nakus.sk `/ai`.

## License

MIT — this stub + CLI. Price data © merchants; comparison UX © Jasne Labs / nakus.sk.
