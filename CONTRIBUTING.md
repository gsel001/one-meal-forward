# Contributing

Every useful skill belongs here. Read our [10-minute guide](docs/first-contribution.md), choose a `good first issue`, and check for someone already working on it. Comment on the issue to coordinate; no assignment is required to propose a change. Maintainers are volunteers and response times vary.

## Ways to help

Write clearer instructions, translate, verify public resources, test with assistive technology, review mobile layouts, or improve the code. GitHub Issues accepts evidence and suggestions; a pull request is the preferred way to deliver files. No programming experience is needed for research and documentation work.

## Pull requests

Fork the repository, make a focused change, describe its purpose, and link its issue. Include sources and check dates for factual claims. Run `npm test` and `npm run build` for code or data changes, and browser tests for interface changes. Screenshots may help design review; do not include identifiable people or private information. Maintainer review is required. Do not add a partner, donation destination, or impact claim without verification.

## Developer quality checks

Use Node.js 22.13 or newer (the minimum for the pinned ESLint 10 toolchain), and
Python 3.11 or newer. The website remains plain JavaScript with no runtime
dependencies. On a clean checkout:

```sh
npm ci --ignore-scripts
python3 -m venv .venv
```

Activate the venv with `source .venv/bin/activate` on macOS/Linux, or
`.venv\Scripts\Activate.ps1` in Windows PowerShell. Then install the pinned Python
formatter and browser used by the tests:

```sh
python3 -m pip install -r requirements-dev.txt
npx playwright install chromium
npm run check
```

On Linux CI, browser installation uses `npx playwright install --with-deps chromium`.
Keep the venv active when running quality commands. The bootstrap helper is not
a development setup command; never run `scripts/configure-github.py` for these checks.

- `npm run format` formats supported JS/MJS, HTML, CSS, JSON, Markdown and YAML
  with local Prettier. `npm run format:python` runs the pinned Ruff formatter.
- `npm run format:check` and `npm run format:python:check` report files needing
  formatting without editing them. Run the corresponding formatter, inspect the
  diff, then check again. Both formatter versions are pinned.
- `npm run lint` runs ESLint with zero warnings allowed. Read the file, line and
  rule in each message. Correct the cause or discuss it in the PR; do not silence
  a rule or use automatic fixes without understanding the change. Prettier owns
  layout; ESLint checks potential JavaScript mistakes. Ruff is used only to format
  Python, not automatically fix its logic.
- `npm test`, `npm run test:python`, `npm run build` and `npm run test:browser` can
  run separately. `npm run check` runs formatting checks, lint, both unit suites,
  build and browser checks in order. Python checks explicitly skip when no
  `test_*.py` files exist; PR #33 adds the bootstrap safety suite. Existing Python
  test failures are never converted to skips. Run `npm audit --audit-level=high`
  separately for dependency security; a clean lint result does not prove correctness.

For a feature PR, format only files you changed. Use
`npm exec -- prettier --write site/app.js` for a single JavaScript file, or
`python3 -m ruff format scripts/configure-github.py` for Python. Keep broad formatting
changes in a separate PR. Repository-local Prettier, Ruff, ESLint and EditorConfig
settings are discoverable by common editors; editor extensions are optional. Do
not enable project-wide formatting on save as a requirement.

Disclose AI assistance in your PR description, including what you personally
checked and what remains uncertain. Independent human review is required; passing
tests or AI-generated code alone is not a reason to approve a change.

### Style and review

Prefer readable code over cleverness, use descriptive names, keep functions focused
and PRs small, and test behavior changes. Never invent verification evidence.
Explain security-sensitive decisions and inspect permission and data changes.
Preserve accepted contributions and authorship when resolving conflicts. Merge
security fixes before broad formatting, keep their safeguards and tests, then
format the resolved files and rerun all checks. Do not grant access or bypass
review to make a check green.

## Translations

Start with `site/locales/en.json`; keep key names and placeholders unchanged. English is the only released interface today. The current dictionary covers dynamic board messages; static HTML copy must also be extracted into translation keys before releasing another language. Propose full coverage, locale registration in `site/locales/registry.json`, language and direction handling, and fluent human review together. Do not advertise a language until the complete interface and related safety text are reviewed. Tests and the build require key parity; RTL and date formatting need explicit review.

## Licensing and credit

By submitting a contribution you agree it can be distributed under Apache-2.0 and confirm you have permission to share it. No CLA is required. Retain source attribution and compatible license notices for reused material. Use synthetic data in tests. Public credit is optional; never publish someone else's name or story without consent.

Follow the [code of conduct](CODE_OF_CONDUCT.md). Report vulnerabilities through [SECURITY.md](SECURITY.md), not public issues.
