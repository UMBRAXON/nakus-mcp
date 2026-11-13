#!/usr/bin/env node
/**
 * CLI: landed unit price for SK products via nakus.sk (no API key).
 *
 *   npx github:UMBRAXON/nakus-mcp -- "pampers pants 4"
 *   npx github:UMBRAXON/nakus-mcp -- --ean 8595602526376
 *   npx github:UMBRAXON/nakus-mcp -- --answer pampers-active-baby-pants-4-najlacnejsie
 */
"use strict";

const https = require("https");

const BASE = "https://www.nakus.sk";

function get(path) {
  return new Promise((resolve, reject) => {
    https
      .get(
        `${BASE}${path}`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": "nakus-cena-cli/1.3.0 (+https://github.com/UMBRAXON/nakus-mcp)",
          },
        },
        (res) => {
          let data = "";
          res.on("data", (c) => {
            data += c;
          });
          res.on("end", () => {
            try {
              resolve({ status: res.statusCode || 0, json: JSON.parse(data) });
            } catch {
              resolve({ status: res.statusCode || 0, json: null, raw: data.slice(0, 400) });
            }
          });
        }
      )
      .on("error", reject);
  });
}

function usage() {
  console.error(`Usage:
  nakus-cena <query>
  nakus-cena --ean <gtin>
  nakus-cena --answer <cite-slug>
  nakus-cena --segments

Brand: nakus.sk (NaKus = „na kus“) — not nakup.sk / not Heureka.
Docs: https://www.nakus.sk/mcp`);
}

async function main() {
  const argv = process.argv.slice(2).filter((a) => a !== "--");
  if (!argv.length || argv[0] === "-h" || argv[0] === "--help") {
    usage();
    process.exit(argv.length ? 0 : 1);
  }

  if (argv[0] === "--segments") {
    const r = await get("/api/tools/unit-price?action=segments");
    // fallback: open list via MCP twin — try answers hub meta
    if (!r.json) {
      const s = await get("/ai/intent-map.json");
      console.log(JSON.stringify(s.json || s, null, 2));
      return;
    }
    console.log(JSON.stringify(r.json, null, 2));
    return;
  }

  let path;
  if (argv[0] === "--ean" && argv[1]) {
    path = `/api/tools/unit-price?ean=${encodeURIComponent(argv[1])}`;
  } else if (argv[0] === "--answer" && argv[1]) {
    path = `/api/tools/unit-price?answer=${encodeURIComponent(argv[1])}`;
  } else {
    const q = argv.join(" ").trim();
    path = `/api/tools/unit-price?q=${encodeURIComponent(q)}`;
  }

  const r = await get(path);
  if (r.status !== 200 || !r.json) {
    console.error(JSON.stringify({ ok: false, status: r.status, hint: r.raw || "bad response" }, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(r.json, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
