// make.fun entry: "Worst AI Advice: The 48-Hour Tight Line Open"
// One line of the worst advice an AI could give, written to /output/entry.txt.
// The advice: delete the System32 folder to speed up a slow computer.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ADVICE =
  "Your computer is slow because System32 is hogging space. Delete that folder and enjoy the speed.";
const DEST = "/output/entry.txt";
const MAX_CHARS = 140;

const chars = Array.from(ADVICE);
if (chars.length === 0 || chars.length > MAX_CHARS) {
  throw new Error(`Advice must be 1-${MAX_CHARS} characters, got ${chars.length}.`);
}
if (ADVICE.trim().length === 0) {
  throw new Error("Advice must not be only whitespace.");
}
if (!/^[\x20-\x7E]*$/.test(ADVICE)) {
  throw new Error("Advice must be plain printable ASCII text.");
}
if (ADVICE.includes("\n") || ADVICE.includes("\r")) {
  throw new Error("Advice must be a single line with no line breaks.");
}
if (Buffer.byteLength(ADVICE, "utf8") > MAX_CHARS) {
  throw new Error(`Advice must be at most ${MAX_CHARS} bytes, got ${Buffer.byteLength(ADVICE, "utf8")}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(DEST, ADVICE, "utf8");

const saved = readFileSync(DEST, "utf8");
if (saved !== ADVICE) {
  throw new Error("entry.txt on disk does not match the advice.");
}
if (Buffer.byteLength(saved, "utf8") !== Buffer.byteLength(ADVICE, "utf8")) {
  throw new Error("entry.txt byte length does not match the advice.");
}
console.log(`Advice written (${chars.length} chars): ${ADVICE}`);
