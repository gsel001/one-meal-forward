# Governance Access, GitHub Ownership and Transition Plan

> **Proposal only — no new organization, role grants or ownership transfer has happened.** This guide implements the [Mission-First Charter](CHARTER.md) and [role hierarchy](ROLE_HIERARCHY.md) as far as the GitHub platform permits. The account with technical administrative powers is **not above** safety review or project policy.

## Verified starting position (2026-11-19)

- GitHub repository: `gsel001/one-meal-forward`, currently owned by a **personal account**, not a GitHub organization.
- `.github/CODEOWNERS` currently lists only `@gsel001`. No non-founder code-owner appointment is recorded.
- The existing enforced `main` ruleset has no listed bypass actors; requires a non-author code-owner approval, review after new pushes, resolved discussion threads, strict successful `test` check, and squash-only merges; also blocks forced updates and branch deletion.
- The founder cannot approve their own pull request. Until a qualified non-founder code owner is appointed, some founder-authored PRs may remain blocked; **do not weaken protections to solve that inconvenience**.
- The founder presently has account administration rights because the repository is personal. The proposed protected Founder/Mission Steward office is **a separate governance role**, not a GitHub-provided permission.

## Mapping roles to GitHub access

| Charter role | Minimum practical GitHub access | Safeguard before granting |
| --- | --- | --- |
| Public participant / contributor | Public read, forks, PRs, issues, Discussions | No credentials or write required |
| Eligible community voter | Same as participant; voting controlled by a separate verified roster | Voting membership does not create repository permissions |
| Council representative | No additional GitHub rights automatically | Consent, clear term, conflict disclosure, voter verification |
| Code reviewer / code owner | Write or appropriate review-capable access, with a valid CODEOWNERS designation for required code-owner reviews | Trial public review first; verified identity and competence; scoped access and revocation plan |
| Engineering maintainer | Write/maintain as narrowly needed | Independent review and passing CI remain mandatory |
| Safety / ethics steward | Appropriate security/triage information access, **not automatic repository admin** | Confidential reporting route, recusal, appeal and data safeguards |
| Governance secretary | Read/triage and public roster management only | Cannot invent votes or grant themselves access |
| Founder / Mission Steward | Strategic authority under Charter, plus current personal-account admin | No right to bypass PR checks or override safety holds |
| GitHub organization custodian | Organization owner only where necessary for recovery and settings | Proven trust, explicit written role acceptance, 2FA, audit and signed/recorded custody duties |

These are proposed duties, not existing invitations, teams, or permissions.

## Phase 1 — prepare independent review without weakening current protections

1. Recruit qualified human reviewers. Request a **trial public code review** without write access; vet technical judgment and conduct before any privilege grant.
2. Identify at least one consenting independent reviewer. Record scope, security expectations and ability to revoke access.
3. Have the candidate prepare a small focused `CODEOWNERS` PR, adding their exact GitHub handle to relevant ownership. The founder can review a **candidate-authored** PR; the founder must not self-approve their own.
4. Grant only necessary review permissions and test a harmless founder-authored PR through the actual protected branch. Confirm the non-author approval, existing `test` check and last-push rules work in GitHub.
5. Recruit a separate qualified safeguarding adviser, not only another coder. Document capacity honestly before announcing a three-person advisory council.
6. Seek founder and independent-adviser acceptance and public consultation before claiming adoption. Do not invent a vote, council, election or ratification.

## Phase 2 — carefully protect the founder before creating/moving to an organization

**A future move into a GitHub organization requires a separately approved constitutional decision. This PR does not authorize a transfer.**

Before migration, require all of the following:

1. **Founder consent and custody:** the active, capable, nonconflicted Founder/Mission Steward must provide explicit dated written consent to the named destination organization, planned transfer, founder's post-transfer permissions, and continuity terms. A vote cannot substitute for consent except after the extraordinary final for-cause/succession process in Charter Article 9.
2. **Constitutional approvals:** meet the council/community supermajority thresholds in Article 10, independent engineering and safety reviews, public proposal period and complete decision record. If too few people are available, **postpone the transfer**.
3. **Founder is an organization owner at transfer:** appoint/retain the founder as an organization owner, not merely a repository collaborator, for as long as the founder serves and has not been lawfully removed through the approved for-cause process. This is a **required governance condition**, not a GitHub guarantee.
4. **Two-person continuity:** have at least one additional highly trusted owner for recovery (GitHub recommends two owners), subject to written consent, conflict disclosure and least-privilege team roles for everyone else. Do not automatically appoint all council members owners.
5. **Ownership/custody agreement:** document that other owners act as fiduciary-like custodians under project policy, may not arbitrarily demote the founder or remove protections, and must report proposed sensitive owner/asset changes. For meaningful enforceability, obtain appropriate legal advice and written agreements or entity bylaws; a Markdown charter alone does not create binding corporate obligations.
6. **Protected assets and recovery:** inventory the domain, Pages site, DNS, integrations, deployment credentials, content, name/branding, public accounts, and any future funds. Document which assets remain in whose custody, backups, independent recovery, and safeguards against a single compromised account. Do not casually share passwords or duplicate sensitive credentials.
7. **GitHub ownership and transfer restrictions:** configure available repository/organization policies so ordinary maintainers cannot transfer/delete repos or modify governance-sensitive rules; protect all main changes with independent reviews, and audit owner-role changes. The organization's owners can still edit some settings, including owner membership.
8. **Dry run and post-transfer verification:** test required checks, team CODEOWNERS, review protections, organization rulesets, GitHub Pages URL/redirects, DNS, links, branch history, permissions and automation. If the transfer breaks safeguards, suspend risky deployments while qualified owners restore them.
9. **Exit/incident procedure:** maintain a written process for attempted unauthorized founder demotion, lost accounts, owner misconduct and legitimate Article 9 final removal. Preserve records and backups; involve neutral governance/legal recourse where appropriate. **Do not promise automatic technical restoration or irrevocable ownership.**

### The unavoidable platform limitation

GitHub **organization owners have complete administrative access and can change other owners' roles**. Additional organization owners help prevent account-loss lockout, but do **not** create a technical guarantee that the founder can never be demoted. Even a no-bypass repository ruleset cannot make the GitHub owner role irrevocable. Written governance, careful appointments, independent oversight, asset continuity and, when appropriate, legal agreements reduce this risk; they cannot fully remove it.

**Do not move the repository** if preserving founder control is paramount but you are unwilling to accept this residual risk. Keep the current personal ownership until the team has matured and the agreed protections are ready.

### Legitimate exception: founder accountability

Protected stewardship is **not immunity for serious misconduct**. Allegations against the founder require independent examination and a fair appeal under Charter Article 9. The founder has no veto over their own case and cannot undermine safety during investigation. Arbitrary or politically motivated demotion remains prohibited under governance; lawful, properly decided removal or succession is an explicit exception, and actual GitHub permissions must then be changed by properly authorized custodians.

## Phase 3 — organization teams and technical enforcement

Once a transfer is separately authorized:

- Create teams corresponding to **Engineering Reviewers**, **Maintainers**, **Safety & Ethics**, **Governance Records**, and **Community Moderators**. Do not give teams blanket owner access.
- Assign CODEOWNERS to real consenting humans or valid teams. **Two names in CODEOWNERS do not force two signatures**; use supported ruleset/required-reviewer settings or another independently audited merge gate to actually require multiple reviewers where supported.
- Configure appropriately scoped rulesets for `GOVERNANCE.md`, `docs/governance/**`, `.github/CODEOWNERS`, workflows and sensitive release/verification files, using independent reviewers from at least two distinct functions.
- Preserve strict protected `test` CI and fresh approvals after pushes; verify a harmless PR cannot merge without the required approvals. Review safety holds separately, since GitHub cannot read a constitutional decision merely because one was posted in a document.
- Require periodic access reviews and prompt public-safe reporting for sensitive setting changes. Never assign organization-owner privileges merely to avoid PR review.

**Do not enforce a two-independent-reviewer requirement before two qualified non-author reviewers exist**, or the project can become permanently stuck. Defer sensitive releases; do not make security rules weaker.

## Rollout checklist

- [ ] Founder and volunteers understand the difference between founder authority and GitHub ownership.
- [ ] One independently vetted reviewer consents and completes a trial review.
- [ ] Candidate-authored CODEOWNERS update passes protected review; actual founder PR review is tested.
- [ ] A separate safeguarding/ethics reviewer accepts a role.
- [ ] Proposed council members accept; charter consultation and adoption recorded.
- [ ] Community electorate, votes and appeal procedure exist before binding constitutional referenda.
- [ ] Founder-protected ownership and emergency account-recovery terms are documented.
- [ ] GitHub organization migration has an independent security assessment and **separate founder consent**.
- [ ] Actual GitHub permissions/rulesets/Pages are verified before and after any transfer.
- [ ] A legal/asset-custody plan is reviewed before any claim of enforceable organizational ownership.
- [ ] No access, invitation, repository transfer, deployment or funding action is treated as approved merely because this PR is merged.

See [Charter](CHARTER.md), [Role Hierarchy](ROLE_HIERARCHY.md), [Decision Process](DECISION_PROCESS.md), and [Roster](ROSTER.md).
