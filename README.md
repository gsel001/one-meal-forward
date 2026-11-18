# OneMealForward ↗

**Small actions. A world with less hunger.**

OneMealForward is a free, open-source project making action against hunger accessible to anyone, anywhere—regardless of coding experience, financial resources, or language.

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

## Start in under 10 minutes

You can contribute without writing code. Pick one small task, check its acceptance criteria, and ask for help if needed. Our [first contribution guide](docs/first-contribution.md) walks through a browser-only documentation change. Researchers verify public sources; translators prepare reviewed language files; designers and testers improve access.

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
