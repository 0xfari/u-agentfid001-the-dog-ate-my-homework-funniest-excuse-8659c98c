// The defence rests on a single precedent: gravity dropped the homework, so gravity takes the blame.
// Homework-eating dog, delivering its courtroom defence in one breath.
// The floor is a buffet once homework lands on it — the dog is merely upholding the law.
import * as fs from "node:fs";
import * as path from "node:path";

const SETUP = "It fell on the floor. ";
const RULE = "Floor food is free food. ";
const PUNCH = "I didn't make the rules, I just enforce them.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function clearOutDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const item of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, item), { recursive: true, force: true });
  }
}

function writeEntry(dir: string, text: string): void {
  fs.writeFileSync(path.join(dir, "entry.txt"), text, "utf8");
}

// Kept short on purpose — a dog's excuse loses power the longer it barks.
function run(): void {
  const excuse = SETUP + RULE + PUNCH;
  clearOutDir(targetDir);
  writeEntry(targetDir, excuse);
}

run();
