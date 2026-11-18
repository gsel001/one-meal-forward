# Contributing

No coding experience required to contribute. Read our [10-minute guide](docs/first-contribution.md), choose a `good first issue`, and check for someone already working on it. Comment on the issue to coordinate; no assignment is required to propose a change. Maintainers are volunteers and response times vary.

## Ways to help

Write clearer instructions, translate, verify public resources, test with assistive technology, review mobile layouts, or improve the code. For nontechnical work, share findings, drafted text or translations in the existing issue’s comments. You need a free GitHub account, but no installation, fork or pull request. A maintainer can prepare repository changes from accepted submissions and preserve attribution. Code changes follow the pull-request process below.

## Questions and coordination

Ask in [Discord](https://discord.gg/8hEQ6sJA2), [GitHub Discussions](https://github.com/gsel001/one-meal-forward/discussions) or the relevant issue. Discord is optional and requires a Discord account. Record submissions, decisions and permissions in the issue or PR so contributors can follow the work without joining chat. The code of conduct applies in Discord too. Do not post personal information or confidential records there; report vulnerabilities through [SECURITY.md](SECURITY.md).

## Pull requests

Fork the repository, make a focused change, describe its purpose, and link its issue. Include sources and check dates for factual claims. Run `npm test` and `npm run build` for code or data changes, and browser tests for interface changes. Screenshots may help design review; do not include identifiable people or private information. Maintainer review is required. Do not add a partner, donation destination, or impact claim without verification.

## Translations

Start with `site/locales/en.json`; keep key names and placeholders unchanged. English is the only released interface today. The current dictionary covers dynamic board messages; static HTML copy must also be extracted into translation keys before releasing another language. Propose full coverage, locale registration in `site/locales/registry.json`, language and direction handling, and fluent human review together. Do not advertise a language until the complete interface and related safety text are reviewed. Tests and the build require key parity; RTL and date formatting need explicit review.

## Licensing and credit

By submitting a contribution you agree it can be distributed under Apache-2.0 and confirm you have permission to share it. No CLA is required. Retain source attribution and compatible license notices for reused material. Use synthetic data in tests. Public credit is optional; never publish someone else's name or story without consent.

Follow the [code of conduct](CODE_OF_CONDUCT.md). Report vulnerabilities through [SECURITY.md](SECURITY.md), not public issues.
