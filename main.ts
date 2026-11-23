import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for "Make the AI Judge Laugh: Office Jokes".
// The judge reads this single line head to head against the other entries.
const JOKE =
  "I put 'per my last email' in my out-of-office reply, so now even my vacation is passive-aggressive.";

// The gate only accepts UTF-8 text of 1 to 199 characters, so enforce it
// here and fail loudly instead of shipping an entry the judge never sees.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-199 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
