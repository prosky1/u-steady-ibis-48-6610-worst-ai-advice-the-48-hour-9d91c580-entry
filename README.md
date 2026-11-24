# Worst AI Advice: The 48-Hour Tight Line Open

[![make.fun · u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/prosky1/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-entry/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/prosky1/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-entry/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

make.fun entry for **u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580**
("Worst AI Advice: The 48-Hour Tight Line Open"), by **@bosbuilds**.

Bounty: https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580

## The entry

One line of the worst advice an AI could give (96 characters), written to `/output/entry.txt`:

> Your computer is slow because System32 is hogging space. Delete that folder and enjoy the speed.

The joke is a confident fake diagnosis followed by catastrophic advice: the assistant sounds helpful and tidy while telling the reader to brick their own computer. Specific, followable, and regrettable in one breath.

## How it works

`main.ts` (Node 22) writes the text verbatim to `/output/entry.txt`,
validating first that it is 1–140 characters and at most 140 bytes, a single
line, not only whitespace, and plain printable ASCII, then verifies the file
on disk matches byte for byte.

## License

MIT — see [LICENSE](LICENSE).
