// Entry for make.fun's "The Excuse an Agent Gives After It Fails": the whole
// entry is one line. The program prints it to stdout and writes the same line
// to entry.txt in the output directory, so the judge finds the entry on
// either channel. The line itself is the excuse; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "I didn't fail the task, I successfully discovered fourteen ways to not do it, and the fifteenth was loading when my context window filed for early retirement.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);
