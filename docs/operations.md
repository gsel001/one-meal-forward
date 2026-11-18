# Operating OneMealForward

## Hosting

GitHub Pages serves the `dist` artifact. The `Quality and Pages` workflow tests and builds on pushes to main and pull requests. Only the main-branch push/manual run can upload and deploy; PR code has read-only permissions, no secrets, no persisted checkout credentials, and no deployment job. Do not use `pull_request_target` to execute contributor code. Workflow pins are full upstream commit SHAs. No custom domain, account signup, backend, paid runners, or cloud services are needed.

Use the repository's Actions page to inspect the `test` job and deployment. A successful main run publishes to https://gsel001.github.io/one-meal-forward/. Recover a failed deployment by fixing the cause through a reviewed PR and rerunning the workflow; never skip tests to publish. To roll back, propose a new revert commit through review; do not rewrite published history.

## Repository protections

The launch configuration targets a main-branch ruleset requiring a pull request, one approving review, code owner review, resolved review conversations, and the `test` status check. It blocks deletion and force pushes and has no bypass actors. The bootstrap commit necessarily precedes this ruleset. Confirm the live settings at Settings → Rules → Rulesets; the launch handoff reports whether GitHub accepted them.

**Single-maintainer limitation:** authors cannot approve their own PRs. Once protection is enabled, the founder needs another authorized reviewer/code owner for their own changes. Community PRs can be reviewed by @gsel001. Add trusted co-maintainers only with their consent and minimum necessary access. No additional reviewer or organization has been invented. GitHub Actions may require founder approval before a first-time external contributor's workflow runs; review the code first.

Secret scanning and push protection were already active at repository creation and are preserved. Dependabot vulnerability alerts, security updates, and private vulnerability reporting are enabled. GitHub-hosted static Pages cannot set arbitrary security headers; a restrictive meta CSP protects resource loading, but HTTP-only defenses such as CSP frame-ancestors are unavailable here. Do not claim a full security audit or certified WCAG compliance.

## Weekly upkeep (about 15 minutes, plus review work)

1. Triage issues and Discussions; remove sensitive information and scams promptly. There is no guaranteed moderation response time.
2. Check mission evidence links and source issue states. Close/remove stale tasks and suspend disputed organization requests. Renew only after a real review, within 90 days. The site evaluates expiry on load and does not fetch issue status live.
3. Review Dependabot PRs. Check release notes, new scripts, licenses, lockfile diffs, audit results, and immutable Actions pins. Never auto-merge without review. No deployed runtime dependencies exist; development packages include Playwright and axe-core, currently Apache-2.0/MPL-2.0 licensed respectively. Transitive license changes need review too.
4. Update the impact ledger only for accepted, unique, evidence-linked community work. Initial setup is excluded.
5. Check the latest deployment and respond to newcomer questions when available.

Quarterly, recheck funding links, moderation capacity, accessibility feedback, and license policy. If moderation cannot be sustained, stop accepting new organization listings until it can.

## Local verification

Run `npm ci --ignore-scripts`, `npm audit --audit-level=high`, `npm test`, `npm run build`, and `npm run test:browser` after installing Chromium with Playwright. CI performs those checks using Node 22. Functional and axe tests run in Chromium at desktop and mobile dimensions; this is not testing on physical iOS/Android devices or every browser. A human should perform screen-reader, zoom, translation, and safeguarding reviews before expanding the service.

The dependency-review workflow reviews new dependency vulnerabilities and allowed licenses on PRs. Mozilla Public License 2.0 is accepted for the development-only axe-core package; do not relicense upstream code. No upstream library is shipped in the website. License allowances are not a legal opinion.

## First partner checklist

Follow verification.md; do not invite or message organizations on the founder's behalf without approval. A listing needs official public evidence, consent, reviewer, scope, safe contact route, and expiry. No field outcomes are assumed. Funding accounts, applications, purchases, and claims of charitable status remain unapproved.
