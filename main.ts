// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
// Writes exactly one word to /output/entry.txt: the single word
// Grandma would text about AI. She has seen the robot talk back,
// and she knows exactly what it is.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Witchcraft";

// The gate only accepts 1–30 characters of non-blank text, and the
// bounty wants exactly one word, so refuse to write anything else.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`WORD must be a single word of 1-30 characters, got: ${JSON.stringify(WORD)}`);
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`Wrote "${WORD}" (${WORD.length} characters) to ${outPath}`);
