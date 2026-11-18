# OneMealForward ↗

**Volunteer technical help for food-relief organizations.**

OneMealForward prepares free volunteer technical help for food-relief organizations. The current website lists project tasks in writing, translation, research, design, accessibility, and development. Organization requests require review before publication or work authorization.

[Explore the mission board](https://gsel001.github.io/one-meal-forward/) · [Find your first task](https://github.com/gsel001/one-meal-forward/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) · [Join the community](https://github.com/gsel001/one-meal-forward/discussions)

## What works today

- A responsive mission board with search and location, language, skill, availability, effort, and verification filters.
- Real beginner tasks for this project: writing, translation, research, design, accessibility, and testing.
- Organization mission submissions through moderated GitHub Issues.
- Evidence-linked review and expiry status; expired or pending entries cannot recruit through the board.
- An honest impact ledger: only reviewed contributions with evidence count.
- English interface, locale files and a translation review process for future languages.
- Static hosting, no runtime dependencies, accounts, advertising, tracking, or donation collection.

**Launch status:** No food-relief organizations or food-distribution requests have been verified. Project tasks are not food assistance shifts. No meals served, people helped, partnerships, or community contributions are claimed. This project is not an emergency food assistance service. We do not collect applications for food aid or sensitive personal information.

## Choose a contribution path

**No coding experience required to contribute.** A free GitHub account is required to submit work; reading tasks needs no account.

- **I don't code:** read the [browser-only contribution guide](docs/first-contribution.md), choose a writing, research, translation or feedback task, and post findings in the existing issue's comments. No terminal, fork or PR is required. Maintainers can prepare changes from accepted submissions with attribution.
- **I'm a developer:** inspect existing PRs and [CONTRIBUTING.md](CONTRIBUTING.md), coordinate on a task, and submit or review a focused change with tests. [Reviewer recruitment #35](https://github.com/gsel001/one-meal-forward/issues/35) is the immediate technical need. A public trial review does not grant write access or replace code-owner approval.

Food-relief organizations can [suggest a mission](https://github.com/gsel001/one-meal-forward/issues/new?template=mission.yml). Submitting a request does not publish a listing, establish a partnership, or imply endorsement. A maintainer reviews consent, evidence, safeguarding, and expiration before a listing is accepted.

## Run locally

Requires Node.js 22 or newer. The website itself has no runtime dependencies.

```sh
npm ci
npm test
npm run build
npm run dev
```

Open http://127.0.0.1:4173. For browser and accessibility checks:

```sh
npx playwright install chromium
npm run test:browser
```

`npm run check` runs unit checks, validates data, builds, and runs desktop/mobile browser tests. On Linux CI, use `npx playwright install --with-deps chromium`.

## How it stays trustworthy

[Verification](docs/verification.md) · [Impact measurement](docs/impact.md) · [Privacy](PRIVACY.md) · [Security reporting](SECURITY.md) · [Governance and moderation](GOVERNANCE.md)

Mission data is reviewed in pull requests, never ingested automatically from public submissions. The published site contains no example missions. All tasks link to public evidence; listings expire automatically in the browser. No donations are accepted by the project. Any future project-development funding must be distinguished from food assistance donations.

## Maintainers and sustainability

Founded and initially maintained by [@gsel001](https://github.com/gsel001). This is an independent volunteer project; nonprofit status is not claimed. The [roadmap](ROADMAP.md) prioritizes one properly reviewed organization request over vanity metrics. [Funding research](docs/funding-and-support.md) and the [30-day community plan](docs/community-plan.md) document next steps without promising eligibility or outcomes.

GitHub Pages hosts a static artifact built only after checks pass. GitHub Actions uses minimal job permissions and immutable dependency pins; untrusted pull requests run without deployment credentials. See [operations](docs/operations.md) for deployment, dependency review, protections, and the upkeep checklist.

## License

Apache License 2.0. Contributions are accepted under the same license. See [LICENSE](LICENSE) and [CONTRIBUTING.md](CONTRIBUTING.md).
