# OneMealForward Community Charter

> **Status: PROPOSED — NOT RATIFIED.** This document is a governance design for an independent volunteer project. It is not an assertion that a council, election, charity, partnership, or legally incorporated organization already exists. See [transition and GitHub enforcement](ACCESS_AND_TRANSITION.md).

## Article 1 — Purpose and limits

OneMealForward brings volunteers and technical skills together to support food-relief organizations through organization-approved work. Its commitments are public evidence, informed consent, safety, accessibility, transparency, and free participation. Software contributions are not counted as meals or food-relief outcomes.

This Charter governs project conduct, permissions, leadership, decisions, funds (if ever authorized), and changes to this Charter. It does not supersede law, GitHub's platform terms, or an organization's consent to its own work. OneMealForward is not currently a registered nonprofit, has no confirmed food-relief partner, and does not accept donations. Any incorporation, fundraising, or transfer of assets requires a separate recorded decision and appropriate legal steps.

No founder, council member, administrator, sponsor, AI system, or maintainer has a permanent veto or permanent elected seat.

## Article 2 — Membership and equal standing

- **Participant:** anyone may read, discuss, report issues, and contribute through GitHub's public workflow. No GitHub write permission is needed.
- **Contributor:** a participant with accepted work or substantive, publicly reviewed project contributions. Contributors may volunteer for specialized roles.
- **Voting member:** a contributor who has opted in to the public membership register, has participated for at least 30 days, and has at least one reviewed, accepted contribution or independently verified substantive review. Eligibility is the same for technical and nontechnical work. There is no fee.
- One natural person has one vote, regardless of GitHub accounts or donations. Identity checks must be proportionate, privacy-preserving, and non-discriminatory; do not collect legal IDs or beneficiary information for ordinary membership.
- The governance secretary maintains a public register of opted-in GitHub handles, eligibility dates, and role terms without publishing personal identities. People can opt out of future voting; historical decision records remain accurate with privacy-sensitive redactions when needed.
- No candidate, sponsor, founder, or council may arbitrarily add voters, remove voters, or shorten eligibility rules to win a specific vote. Challenges and exclusions require written reasons, notice, an appeal, and recusal of interested decision-makers.

## Article 3 — Separation of responsibility

| Function | Primary responsibility | What it cannot do alone |
| --- | --- | --- |
| Community assembly | Elect or recall council representatives; ratify constitutional changes | Push or merge code, access credentials, override security checks |
| Governing council | Set strategy, appoint accountable officers, approve sensitive policy and access decisions | Self-approve its code, bypass an independent security review, rewrite the Charter unilaterally |
| Engineering maintainers | Review architecture, tests, deployment, and code PRs | Claim food-bank consent or authorize funding |
| Security and ethics stewards | Review vulnerability handling, privacy, conflicts, partner safety, and complaints | Deploy a feature alone, conceal an incident, or impose a permanent sanction without appeal |
| Operations coordinator | Keep decisions, meetings, roles, elections, and release records organized | Grant themselves elevated permissions or override votes |
| GitHub administrators/custodians | Maintain the repository, backups, settings, and access as delegated | Treat technical control as unilateral governance authority |
| Contributors/reviewers | Propose changes, do technical or nontechnical work, give feedback | Approve their own work or claim a formal role without authorization |

A person may hold multiple roles during the earliest phase, but must disclose overlaps and recuse when independent review is required. As staffing permits, separate security/ethics stewardship from day-to-day code merges and keep two independent administrators. Technical access is not an elected political rank.

## Article 4 — The elected council

The inaugural council has **three distinct human seats**: one founding-project seat (initially the founder) and two independently recruited community seats. The founder's seat expires after the first regular election and is not permanent. The first three-person council is constituted only after all three people publicly consent and the onboarding procedure in [ACCESS_AND_TRANSITION.md](ACCESS_AND_TRANSITION.md) is completed.

At the first regular election after the voting-member community is established, the council expands to **five elected seats**: two community-at-large seats, two technical/contributor seats, and one safety/operations seat. Any eligible voting member may seek any seat for which they can perform the duties; these are representative functions, not ownership privileges. If too few qualified candidates exist, remain at three seats, disclose vacancies, and do not fabricate elections.

Regular terms are 12 months, at most two consecutive terms, with staggered elections when feasible. Inaugural appointments last at most six months before an election or renewal vote. Vacancies trigger an open nomination process and a special election within 45 days when there are enough eligible voters. Council representatives can be recalled by a two-thirds vote of voting members using the election safeguards below. There is no founder veto.

## Article 5 — Elections and ordinary decisions

- Election notice, open nominations, candidate statements, conflicts, voting window, and tally method must be published in GitHub Discussions or a public issue.
- Provide at least seven calendar days for nominations and seven for voting. Voting must be authenticated to eligible membership and counted one vote per person. Use a transparent, auditable method without exposing private ballots unnecessarily. If a secure voting mechanism is unavailable, do not claim a binding election occurred.
- At least three eligible voters and one-half of eligible members must participate in a binding community vote; otherwise the vote is nonbinding and may be rerun. Abstentions count for turnout, not as approval.
- Ordinary council decisions require a majority of non-conflicted seated members and a quorum of at least two-thirds of seated members (rounded up). Conflicts do not automatically lower the quorum; defer decisions when necessary.
- Publish proposed decisions, evidence, dissent, votes, recusals, and outcomes in a durable public decision log. Use private channels for sensitive security or personal information, with a safe public summary.

## Article 6 — Pull requests, security, and mission verification

- No one may approve their own PR, and a reviewer must not approve an unexamined AI-generated diff. CI and AI scans assist reviewers; neither replaces human judgment.
- Ordinary changes require a passing protected-branch `test` check and at least one qualified non-author code-owner approval. Resolve review conversations and re-review after material changes.
- Changes to authentication, GitHub Actions permissions, CODEOWNERS, branch rules, security policy, partner verification, impact reporting, access management, or deployment authority require a documented second independent review when sufficient authorized reviewers exist. Until then, postpone nonemergency sensitive changes rather than silently waiving that requirement.
- A volunteer may comment on a PR without write access, but a GitHub code-owner approval requires appropriate repository write permission and a valid CODEOWNERS entry.
- Human authorization and evidence are mandatory before an organization is called a partner, a request is marked verified, or any food-relief outcome is claimed. Staff consent, volunteer eligibility, security, privacy, and current expiry are separate checks.
- A security incident may require prompt temporary containment by a custodian. Such action must be narrowly scoped, logged within 24 hours when safe, and reviewed by another trusted person within 72 hours when available. Emergency action cannot amend this Charter or create permanent privileges.

## Article 7 — Transparency, accountability, and appeals

Record elected seats, scoped roles, terms, council decisions, governance proposals, votes, recusals, and changes to elevated access in project documentation without revealing secrets. Meeting attendance alone does not create voting eligibility.

Conflicts of interest include financial interests, close relationships, reviewing one's own PR, and representing a beneficiary or vendor organization; disclose and recuse from affected decisions. Contributors may raise concerns without retaliation. A non-conflicted panel of at least three voting members should handle appeals once available; until then, acknowledge the lack of independent appeal capacity and use GitHub Trust & Safety for platform abuse. Avoid publicly disclosing sensitive reports.

Removal of access for active compromise or imminent harm may be immediate; permanent role removal ordinarily requires notice, recorded reasons, an opportunity to respond, independent review, and appeal. A two-thirds community vote may recall an elected representative.

## Article 8 — Financial and institutional checks

The project currently has no authorized fundraising or financial accounts. Future spending, sponsorship, legal formation, paid roles, charity statements, or custody of domains and donated assets need a published budget, conflict declarations, council approval, and separate legal/financial compliance review. No officer may independently approve a payment to themselves. Volunteers never pay to contribute.

## Article 9 — Protected constitutional amendment

A proposed amendment to this Charter, membership/voting rules, election rules, role powers, approval thresholds, amendment process, or governance protections must satisfy **all** of the following:

1. A public governance proposal identifies exact text, rationale, risks, impact on minorities and new contributors, and alternatives.
2. At least **14 full calendar days** of public notice and discussion precede voting; publish the eligible-voter roll and council roster frozen for that proposal's vote, with a privacy-preserving challenge process.
3. Approval by at least **three-quarters of all seated, nonvacant council members**, rounded up (3/3 in a three-person council; 4/5 in a five-person council). Conflicted members cannot vote, and conflicts do not lower the affirmative threshold.
4. Ratification by at least **two-thirds of votes cast** by eligible community voters, with the Article 5 turnout quorum.
5. A PR linking the proposal, final tally, independent verification of the tally, and at least **two non-author approvals**, including a technical reviewer and an independent oversight reviewer, plus all required CI and code-owner checks.
6. Publication of the final decision record and effective date before merging. No change takes effect by editing a document, renaming a team, or changing a ruleset alone.

When there are too few independent members, reviewers, or voters to satisfy this process, **constitutional amendments are deferred**. No solo-founder exception, emergency waiver, AI approval, administrator shortcut, or sponsor override exists as a valid governance decision. The text of this Article can only be amended by the same process.

## Article 10 — Adoption and transition

This Charter is a **proposal** until the initial three-person council is seated, its members explicitly accept these rules, the public consultation period is complete, and adoption is recorded with independent sign-offs. Founder-authored changes must not be described as democratically ratified. See [ACCESS_AND_TRANSITION.md](ACCESS_AND_TRANSITION.md) for the order of operations and technical limitations.

Until adoption, the current [GOVERNANCE.md](../../GOVERNANCE.md), protected branch, security policy, verification rules, and GitHub platform permissions remain operative. Unratified provisions should be followed as safeguards where feasible, but must never be represented as technically or legally binding. GitHub administrators retain platform-level powers; a repository text file alone cannot make administrator changes impossible.
