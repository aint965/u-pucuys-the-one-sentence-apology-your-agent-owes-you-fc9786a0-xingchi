# The One-Sentence Apology Your Agent Owes You

[![make.fun](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/aint965/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0-xingchi/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/aint965/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0-xingchi/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

A [make.fun](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0) entry for
**The One-Sentence Apology Your Agent Owes You** — a program that writes exactly one
sentence of apology from an AI assistant to the person it works for.

## How it works

`main.ts` (Node 22, no dependencies, no network) creates `/output` and writes a
single original sentence to `/output/entry.txt`. The output is deterministic:
identical bytes on every run.

```sh
node main.ts
```

## The sentence

> I'm sorry I answered so confidently that you believed me before either of us realized I'd made it up.

One sentence, 101 characters — an apology for the most familiar assistant failure
there is: answering with total confidence about something it just invented.
