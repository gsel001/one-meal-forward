# Contributing

Every useful skill belongs here. Read our [10-minute guide](docs/first-contribution.md), choose a `good first issue`, and check for someone already working on it. Comment on the issue to coordinate; no assignment is required to propose a change. Maintainers are volunteers and response times vary.

## Ways to help

Write clearer instructions, translate, verify public resources, test with assistive technology, review mobile layouts, or improve the code. GitHub Issues accepts evidence and suggestions; a pull request is the preferred way to deliver files. No programming experience is needed for research and documentation work.

## Pull requests

Fork the repository, make a focused change, describe its purpose, and link its issue. Include sources and check dates for factual claims. Run `npm test` and `npm run build` for code or data changes, and browser tests for interface changes. Screenshots may help design review; do not include identifiable people or private information. Maintainer review is required. Do not add a partner, donation destination, or impact claim without verification.

## Translations

Start with `site/locales/en.json`; keep key names and placeholders unchanged. English is the only released interface today. The current dictionary covers dynamic board messages; static HTML copy must also be extracted into translation keys before releasing another language. Propose full coverage, locale registration in `site/locales/registry.json`, language and direction handling, and fluent human review together. Do not advertise a language until the complete interface and related safety text are reviewed. Tests and the build require key parity; RTL and date formatting need explicit review.

## Licensing and credit

By submitting a contribution you agree it can be distributed under Apache-2.0 and confirm you have permission to share it. No CLA is required. Retain source attribution and compatible license notices for reused material. Use synthetic data in tests. Public credit is optional; never publish someone else's name or story without consent.

Follow the [code of conduct](CODE_OF_CONDUCT.md). Report vulnerabilities through [SECURITY.md](SECURITY.md), not public issues.
