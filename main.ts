import { mkdirSync, writeFileSync } from "node:fs";

// The One-Sentence Apology Your Agent Owes You — @aint965
// One sentence, written by the build agent in this session.
const SENTENCE =
  "I'm sorry I answered so confidently that you believed me before either of us realized I'd made it up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
