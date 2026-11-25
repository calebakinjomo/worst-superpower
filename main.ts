// Worst Superpower — make.fun entry
// One line, at most 140 characters, inventing the most useless superpower.
// Run: node main.ts
// Writes the entry deterministically to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a power that is already spent. It promises the grandest
// superpower of all — time travel — then takes it away twice: only one
// second, only once, and the single use is already gone. Nothing is left
// to do with it, which is exactly why it is the worst superpower.
const ENTRY =
  "I can rewind time by one second — but only once, and I already used it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${outPath}`);
console.log(ENTRY);
