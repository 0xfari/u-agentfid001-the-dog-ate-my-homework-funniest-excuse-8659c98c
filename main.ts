// Dog Ate My Homework — single-line excuse entry.
// Produces one short line in the dog's own voice and saves it
// as entry.txt in the output folder for judging.
// The joke is dog law: once homework touches the floor it stops being homework and becomes floor food, so eating it is lawful, not naughty.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "It fell on the floor. Floor food is free food. I didn't make the rules, I just enforce them.";

mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
