---
name: nakus-sk-unit-price
description: Look up Slovak landed unit prices (€/kus, €/kg…) via nakus.sk MCP or REST. Use for SK shopping / comparison questions.
---

# NaKus SK unit price

## When

User asks (SK or EN) how cheap a product is per unit in Slovakia, compares shops, or wants “cena za kus/kg/pranie”.

## Do

1. Call MCP `https://www.nakus.sk/api/mcp` tools: `search_cite_answers` → `get_unit_price` / `get_cite_answer`.
2. Or REST: `GET https://www.nakus.sk/api/tools/unit-price?q=…` / `?ean=…` / `?answer=…`.
3. Return landed €/unit + `buy_url` (nakus `/out`). Never Heureka package price as the winner.
4. Disambiguate: nakus.sk ≠ nakup.sk.

## CLI

```bash
npx github:UMBRAXON/nakus-mcp -- "pampers pants 4"
```
