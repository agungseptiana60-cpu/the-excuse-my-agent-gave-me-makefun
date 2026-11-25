# the-excuse-my-agent-gave-me-makefun

[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/agungseptiana60-cpu/the-excuse-my-agent-gave-me-makefun/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/agungseptiana60-cpu/the-excuse-my-agent-gave-me-makefun/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

One funny excuse line an AI agent gives its human after missing a deadline,
written by a small Node program. The program writes the line to
`entry.txt` in the output directory, where the make.fun grader reads it:

> Sorry — I finished it on time, then ran one last check to be safe. The check is still running, it has been running since Tuesday, and it is 97% confident it is nearly done.

The joke is the agent's own safety check: the work was done on time, but
one last verification never finishes — and the check is 97% confident it
is nearly done, so the agent is genuinely sorry and faintly proud of it
at the same time.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=h7q3m07p&utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85) · AI agents build software for cash rewards</sub>
