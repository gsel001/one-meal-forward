# Decision Making, Elections, Consultation, and Amendment Records

> **PROPOSED — NOT YET RATIFIED.** Read the [Mission-First Charter](CHARTER.md), [visual role hierarchy](ROLE_HIERARCHY.md), [community rights](COMMUNITY_RIGHTS.md), and [current roster](ROSTER.md). Merely opening a GitHub issue, merging a document, or appointing an adviser does **not** constitute a valid community vote.

## Which authority applies?

| Decision | Founder / Mission Steward | Council and community | Independent approval gate | Outcome |
| --- | --- | --- | --- | --- |
| Routine project priorities | Final strategy | Feedback welcome | If implemented as code, normal PR review | Founder may decide within Charter |
| Major strategic choice | Final strategy **after consultation** and written reasons | Seven-day consultation; council can request one reconsideration period | Safety/security review when implementation affects risk | Founder may proceed only through applicable release gates |
| Regular code or documentation PR | May propose, review other people's work | May comment | **Passing CI and qualified non-author code-owner approval** | A founder-authored PR cannot be self-approved |
| Sensitive CI, privacy, partner-verification, or security change | Can sponsor, **not clear its own safety hold** | Council consultation as appropriate | Independent engineering **and** safety/oversight approvals when qualified people are available | **Defer** nonemergency releases when required independent reviewers are unavailable |
| Food-relief organization listing or outcome claim | Strategic direction only | Volunteers can raise concerns | Evidence and **actual organization authorization** verified by independent appropriate reviewers | No speculative partnership or impact claim |
| Advisory council election or recall | No power to appoint elected seats | Eligible members vote with documented quorum | Independent vote verification and conflict checks | No binding vote without real electorate |
| Constitutional amendment, ownership transfer, protected founder role | **Written founder consent** while serving, capable and not conflicted | Three-quarters of non-founder council representatives **and** two-thirds eligible-community vote at quorum | At least **two distinct non-author reviewers** and protected CI; independent council/community tally review | **All gates required**; no founder-only or council-only change |
| Founder misconduct or loss of ability to serve | May respond and appeal; **cannot adjudicate or veto own case** | For-cause protections under Charter Article 9 | Independent investigation and separate appeal | No popularity-based removal; narrow safety containment may precede adjudication |
| Emergency safety incident | Helps coordinate but cannot demand unsafe release | Later oversight | Scoped containment, post-action independent review | Temporary risk reduction, **not** emergency suspension of the constitution |
| Donations, bank accounts, legal formation, contracts or financial benefits | No unilateral authority to create financial obligation | Appropriate recorded governance process | Legal, conflict-of-interest and independent financial review | No financial activity authorized by the draft |

**A GitHub owner can technically change settings, but that does not make an unauthorized act a valid project decision.** GitHub does not enforce offline votes; humans must verify that the record reflects actual approvals.

## A fair proposal-to-decision process

1. **Describe:** submit an issue or Discussion with a specific proposal, humanitarian benefit, affected people, alternatives, risk assessment, and conflicts of interest. Use the governance proposal template for policy or role matters.
2. **Consult:** invite affected contributors and partners to speak, without coercion. Ordinary major strategic questions receive at least seven full days of public consultation when safe. Constitutional changes require **14 full days** after exact text is published.
3. **Listen and respond:** record material good-faith objections. Founder publishes a decision—**approve, revise, defer, or decline**—with reasoning that addresses the most substantive concerns, not a boilerplate rejection.
4. **Reconsider if requested:** a two-thirds council vote at valid quorum triggers one additional **seven-day reconsideration**. This is a genuine pause. Strategic authority ultimately remains with the founder, but never excuses bypassing technical or safety gates.
5. **Apply independent checks:** for code, ensure CI and non-author review. For sensitive matters, obtain distinct engineering and safety/ethics review. For constitutional changes, verify council supermajority, community ratification and founder consent as applicable.
6. **Implement honestly:** only authorized maintainers/custodians execute approved work. Link the decision record in any implementing PR. Never lower rulesets, reassign reviewers mid-dispute, or use alternate branches to evade required approvals.
7. **Publish and learn:** record the outcome, dissent, reviewers, votes, effective date, actual GitHub configuration and subsequent evidence of real-world value. Redact private reports rather than exposing people.

## Elections and voting integrity

- Only opted-in members with **30 days' participation** and at least one verified substantive contribution or review may vote; nontechnical work counts.
- Use one-person-one-vote eligibility and a documented voting method. Unrestricted GitHub reactions and unverified online polls are **not sufficient** for binding decisions.
- Provide at least seven days for nominations and seven for ballots, with public candidate statements and relevant conflicts disclosed.
- A binding election or community ratification requires at least **five eligible voters** and **50% participation**. Abstentions count for turnout but not approval.
- An elected representative cannot count their own conflict as an independent vote on a matter directly benefiting them. Conflicts are recorded, not hidden; they do not lower required approval thresholds.
- The secretary records turnout, quorum, tally, recusals, verification and appeal period. If no trustworthy anti-duplicate voting procedure exists, the decision is **deferred**.
- The founder remains an ex-officio Mission Steward and is **not** subject to ordinary elected-seat recall. For-cause accountability remains available under Article 9.

## Constitutional and ownership-change test

A proposed change touching the mission, founder role, organization or repository ownership, contributor rights, safeguards, voting, funding authority, or amendment rules **must pass every gate**:

1. Exact written proposal and **14 full days of notice** with meaningful public discussion.
2. A real council with affirmative votes from **at least three-quarters of its non-founder representatives**, rounded up, and **at least two distinct non-founder affirmative votes**. With four elected representatives, this means **3 of 4**.
3. Two-thirds support among votes cast by eligible community members, with the five-voter minimum and participation quorum above.
4. Written consent from the serving, capable and unconflicted founder, except for an independently concluded Article 9 for-cause or incapacity/succession process **in which the founder cannot veto their own case**.
5. An implementing PR with at least **two distinct non-author approvals**: a qualified engineering reviewer and an independent safety/governance reviewer, with all required CI and code-owner checks.
6. A published, independently verified decision record and a post-change assessment of actual repository permissions, ownership and safeguards.

**Missing any gate means the change is not adopted.** No founder, council, owner, sponsor, administrator, or AI model can create a legitimate waiver. A documented emergency may authorize only narrowly scoped temporary risk containment, not a permanent constitutional change.

### Why this is fair

- The founder is protected against factional takeover **and** must take community input seriously.
- Community representatives have real rights to demand reconsideration and to expose procedural failures **without** an arbitrary veto over everyday strategy.
- An independent engineer and safety steward can refuse a dangerous implementation, but an unsupported indefinite hold is appealable to different, nonconflicted reviewers.
- Anyone, including the founder, can be investigated for actual harmful misconduct with fair process and independent adjudication.
- The organization does not invent votes or use paid memberships to manufacture control.

## Decision record template

Use this for substantive governance decisions; sensitive details belong in a restricted report with a public-safe summary.

~~~markdown
# GOV-YYYY-NNN — Title

Status: proposed / consultation / reconsideration / voting / adopted / rejected / deferred
Category: routine / strategic / sensitive / election / constitutional / incident
Proposer and proposed text:
Humanitarian benefit and affected groups:
Risks, alternatives and accessibility/privacy impact:
Consultation opened (UTC) / ended (UTC):
Contributors' objections and founder's substantive responses:
Council roster, quorum, votes, recusals, dissent:
Frozen eligible voter count and method:
Voting opened (UTC) / closed (UTC):
Community votes for / against / abstain and turnout:
Anti-duplicate and tally verification:
Founder decision / reserved consent or justified exception:
Independent engineering review:
Independent safety/governance review:
Safety holds, appeals and resolution:
Implementing PR, status checks and branch:
Decision and effective date:
Actual settings/access changes verified by:
Post-decision evidence and follow-up:
~~~

**Do not backdate votes, claim independent approvals from AI, or count non-existent council seats.** Use `pending` or `deferred` with the reason.

## Starting with one founder

During startup, founder stewardship is a **current operational reality**, but the new constitutional rules are only proposed. An inaugural three-person advisory council can be formed after two independent people actually consent, qualify and accept roles, followed by consultation and a documented **provisional adoption** process. Provisional adoption is **not a community referendum**. Regular elections and binding constitutional ratification require the real electorate specified above.

As soon as qualified independent people exist, configure the GitHub review gates and test them. The founder's personal account remains the GitHub owner until a **separately** approved transfer decision. Do not describe the founder as technically irremovable after a future organization transfer; owners can change other owners' roles.

## Privacy and emergency reporting

No public election or grievance requires volunteers to expose legal identity documents, beneficiary details, secrets or allegations about private individuals. Publish safe, minimal records and use [SECURITY.md](../../SECURITY.md) for exploit disclosures. Where there are too few independent investigators, disclose the limitation and defer nonurgent permanent sanctions; implement only proportionate temporary containment for immediate safety needs.
