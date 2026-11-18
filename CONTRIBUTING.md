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

## Experienced developers and independent review

Before adding a feature, inspect open PRs and the organization's confirmed need. PRs #29–#34 already propose mission-health checks, impact validation, search improvements, data integrity, recovery safeguards and metadata. Coordinate on the existing work instead of implementing it twice. PR #40 is a prospective pantry plan; it does not authorize a deployment for the pantry.

For a first review, use [issue #35](https://github.com/gsel001/one-meal-forward/issues/35). Choose one PR and report a reproducible finding, useful test, maintenance concern or reason it is ready. A short review explaining a risk is more useful than a generic approval. Do not run unfamiliar code with personal credentials or real organization data. Review source and workflow permissions before running it.

The author must not act as the independent reviewer. The repository's code-owner approval still needs an authorized reviewer; a public comment by a new volunteer is useful feedback but does not grant merge authority. No applicant receives repository access automatically. Start with a public review, confirm availability and consent, then discuss minimum necessary access. If no eligible reviewer is available, leave the PR open.

For an organization deliverable, check scope, tests, accessibility, license compatibility, no private data, deployment/rollback, and maintenance instructions. Staff acceptance and actual use require separate evidence after technical review. Use the existing issue to coordinate skills and availability; contributors may decline or stop without penalty. Do not promise an organization's timetable or an unpaid contributor's hours.

## Decisions and attribution

For a technical choice that affects security, data, cost or maintenance, add a short decision record to the existing PR or issue: problem, alternatives, chosen approach, reason, evidence, consequences and review date. A separate architecture document is needed only when the decision cannot be understood in that record.

Credit the people who did the work, the reviewers and any upstream sources. Separate founder-authored work, volunteer contributions, automated dependency proposals and paid work. Link the accepted contribution as evidence. Ask before publishing a person's name or quoting them; a contributor may decline optional publicity. Contribution does not promise payment, employment, ownership or a maintainer role, and does not change the Apache-2.0 contribution terms. Any later compensation needs separate written approval and terms before work is treated as paid.
