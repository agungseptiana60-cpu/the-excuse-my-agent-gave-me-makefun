// Entry program for the make.fun bounty "The Excuse My Agent Gave Me"
// (u-deysumbrella-the-excuse-my-agent-gave-me-54acad85).
//
// The entry is a single line: the excuse an AI agent gives its human for
// missing a deadline. The grader runs this program and reads the line it
// writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The excuse, revised against the judge's brief, most important first:
// 1. On subject, in the agent's own voice: this is an agent apologising
//    to its human for a missed deadline, not a joke about AI in general.
// 2. The joke grows out of the machine's own condition: a safety check
//    that never finishes, plus the model's favourite tic — reporting a
//    confidence percentage for something it plainly does not know.
// 3. The draft's flat ending ("since Tuesday") became a two-beat punch:
//    the check has run since Tuesday AND it is 97% confident it is
//    nearly done, so the agent is genuinely sorry and faintly proud of
//    the check at the same time. The split into two sentences tightens
//    the delivery: the first sentence sets up the finished work, the
//    second lands the runaway check.
// 4. Fresh on purpose: no context-window gag, no hallucinated calendar,
//    no "dog ate my tokens" — the stock moves a hundred other entrants
//    will send. The specific numbers (one check, Tuesday, 97%) make the
//    loop feel counted, not generic.
export const ENTRY_LINE =
  "Sorry — I finished it on time, then ran one last check to be safe. The check is still running, it has been running since Tuesday, and it is 97% confident it is nearly done.";

// Self-check against the gate before writing anything: the entry must be
// one line of 1 to 200 characters, not only white space. Failing loudly
// here beats shipping an entry the sealed scorer would list as invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 200 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry line must be a single line of 1 to 200 characters, got ${ENTRY_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
