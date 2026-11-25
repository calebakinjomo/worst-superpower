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
// to do with it, which is exactly why it is the worst superpower. The
// joke lands because the rewind is spent before the sentence even ends.
const ENTRY =
  "I can rewind time by one second — but only once, and I already used it.";

// Bounty limit: entries longer than this are rejected, so fail loudly
// instead of silently writing an invalid entry.
const MAX_ENTRY_CHARS = 140;

const entryLength = [...ENTRY].length;
if (entryLength > MAX_ENTRY_CHARS) {
  throw new Error(
    `Entry is ${entryLength} characters, over the ${MAX_ENTRY_CHARS}-character limit.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${entryLength} characters to ${outPath}`);
console.log(ENTRY);
