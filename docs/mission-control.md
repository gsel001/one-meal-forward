# Using Mission Control

[Open OneMealForward — Mission Control](https://github.com/users/gsel001/projects/1) · [Repository](https://github.com/gsel001/one-meal-forward)

Mission Control is the public, native GitHub Projects workspace for coordinating this project. Our next real-world goal is to help one food-security organization accept and use one useful deliverable. **The Dearborn Community Food Pantry pilot is prospective. No organization-authorized request, accepted deliverable, confirmed use, or humanitarian outcome is verified.** Tracking a goal does not establish a partnership.

## Find your task

Open Community & Contributors, choose an issue matching your skills, and read its acceptance criteria. Comment to coordinate before starting. A maintainer may assign you with your consent; blank assignees mean unclaimed work. We do not assign people automatically or duplicate ownership in a custom field. Follow [the first contribution guide](first-contribution.md) to submit work. Useful public evidence and a careful review matter more than activity counts.

## Views

| View | Purpose |
| --- | --- |
| [Executive Overview](https://github.com/users/gsel001/projects/1/views/1) | Weekly priorities, status, owners, blockers, milestones and agreed targets, including completed work. |
| [Food Security Pilot](https://github.com/users/gsel001/projects/1/views/2) | Status board for #36–#39 and PR #40. Research and proposals remain distinct from authorized organization work. |
| [Engineering & Reliability](https://github.com/users/gsel001/projects/1/views/3) | Engineering, security and accessibility work, PR reviews, maintenance and reliability. |
| [Community & Contributors](https://github.com/users/gsel001/projects/1/views/4) | Beginner issues, translation, research, onboarding, accessibility and reviewer recruitment #35. |
| [Partnerships & Verification](https://github.com/users/gsel001/projects/1/views/5) | Prospective organization work, evidence stage, authorization and blockers. |
| [Roadmap](https://github.com/users/gsel001/projects/1/views/6) | Existing milestones and priorities in a native table. No fabricated schedule bars or delivery dates. |
| [Review Queue](https://github.com/users/gsel001/projects/1/views/7) | In Review and Blocked items, code-owner decisions and permission gates. Check each PR's live checks; the Project does not expose a separate live CI field. |
| [Evidence & Outcomes](https://github.com/users/gsel001/projects/1/views/8) | Pilot evidence stages. Deliverable acceptance, actual use and verified outcomes are separate manual decisions. |

Tables are used where a smaller, clear representation is more useful than a complex visualization. GitHub controls small-screen behavior; horizontally scroll to see optional fields. Open the item for full evidence and discussion.

## Fields and workflow

- **Status:** Backlog, Ready, In Progress, In Review, Blocked, Done.
- **Priority:** P0 Critical (confirmed privacy/security incident or production failure); P1 High (consent, review capacity, publication safety, reliability and first useful authorized deliverable); P2 Medium (accessibility, onboarding, documentation, language access, research, ordinary maintenance); P3 Low (speculative or cosmetic work).
- **Workstream:** Food Security Pilot, Engineering, Community, Partnerships, Research, Accessibility, Security, Documentation.
- **Work Type:** Feature, Bug, Research, Outreach, Documentation, Review, Maintenance, Safeguarding.
- **Effort:** Small, Medium, Large; rough relative estimates, not a volunteer obligation.
- **Verification Stage:** Not Applicable, Unverified, Research Complete, Awaiting Authorization, Authorized, Deliverable Accepted, Use Confirmed, Outcome Verified.
- **Target Date:** only an actual agreed target; initially empty. A dated public event is not a delivery commitment.
- **Blocker Reason:** a short dependency and next decision, with the existing issue/PR as the discussion record.

Use GitHub's existing **Assignees**, **Milestone**, **Labels**, **Reviewers**, and **Linked pull requests** fields. There is no duplicate owner field, iteration schedule, or secondary task database. The existing Community launch and First verified organization mission milestones remain the strategic goals. Newly added pilot/recruitment tasks with empty milestones are grouped under those existing goals; this does not claim they are complete.

Backlog means useful but not yet prioritized. Ready requires clear criteria and no authorization barrier to starting the defined work. In Progress requires actual work, such as a draft PR, rather than merely an open issue. In Review means a deliverable is submitted and awaits checks or acceptance. Use Blocked when progress depends on an explicit consent, dependency, reviewer or external decision; write the next action in Blocker Reason. Done requires an accepted, documented deliverable, not just code existing on a branch. A rejected, duplicate or withdrawn task is not an accepted deliverable; explain the disposition and do not count it as impact.

## Native automation and correction

Configured native behavior:

| Workflow | Behavior |
| --- | --- |
| Auto-add to project | New/updated open issues and PRs in `gsel001/one-meal-forward` match `is:issue,pr is:open`. |
| Item added to project | New issues and PRs initialize to Backlog for triage. |
| Item closed | Move closed items to In Review for a human acceptance/disposition check. Closure alone cannot mean Done. |
| Pull request merged | Set the PR's technical task to Done; this never changes Verification Stage or records humanitarian impact. |
| Item reopened | Return reopened work to Backlog for fresh triage. |

Auto-close issue, automatic sub-issue intake, automatic PR-link status changes, and auto-archive are off. The separate sub-issue importer is redundant with repository intake; automatic PR-link transitions could wrongly override a consent blocker. Code-review templates do not approve reviews or merge code and are left off.

GitHub's native Item added workflow has one shared initial-status action for issues and PRs. A maintainer moves a non-draft PR to In Review after checking that it is ready; drafts remain In Progress. There is no custom Actions workflow, privileged Project token in repository secrets, automatic ownership assignment, automatic consent, or automatic evidence advancement. Linked issue completion requires a human acceptance check even when a PR is merged.

To correct a mistake, change the Project field, explain the reason in the existing issue/PR, and check whether a native rule will run again. For a closed rejected/withdrawn issue, preserve its GitHub closed state and record its disposition; do not count it as accepted work. Leave completed items visible. Do not trigger a real merge, close a real task, or fabricate an outcome merely to test automation. Intake and initial status are tested with this documentation PR; merge/close/reopen settings are inspected without manipulating unrelated work.

The Review Queue and Blocker Reason provide the manual blocker flag. Check live CI, security alerts and deployment evidence on GitHub; do not treat yesterday's green check as current approval.

## Consent and evidence

Use #36 as the existing authorization record. Follow this sequence without creating competing tasks:

1. Verify public organizational information (#37; the Nov. 21, 2026 reference needs a fresh check before anyone relies on it).
2. Obtain the founder's explicit approval to initiate outreach. No messages are sent by Project setup.
3. Ask what the organization actually needs, after authorization to contact it.
4. Obtain consent for the specific task, name usage and publication of safe evidence.
5. Recruit a willing contributor for the agreed scope; do not assign an organization shift.
6. Produce a clearly labeled draft (#38 is an optional, unapproved proposal).
7. Obtain staff feedback and acceptance.
8. Confirm whether the deliverable was actually used.
9. Record dated, scoped, public-safe evidence with permission; verify any real outcome independently where feasible (#39 designs this process).

Use #36's checklist for outreach sent, response received and request approval rather than adding another pipeline field. Verification Stage summarizes evidence maturity. A website, email, issue, or merged PR alone cannot make an organization a verified partner. Only advance a stage when the underlying public-safe evidence supports it; regress or suspend it if consent is withdrawn. Follow [verification](verification.md), [impact](impact.md), [privacy](../PRIVACY.md), and [security](../SECURITY.md). Never publish private correspondence, beneficiary data, personal contact details, or evidence someone has not permitted us to share.

## Measurement without inflated outcomes

| Category | Primary evidence and measurement |
| --- | --- |
| Engineering | Merged PRs, open bug issues, live CI results, open security alerts, deployment results and review queue. A skipped PR deployment is expected, not a failed production deployment. |
| Community | Accepted, reviewed contributions in the evidence ledger; consent-based newcomer feedback, unassigned beginner tasks and actual review history. No first-time contributor count is inferred from bot PRs or account creation. |
| Food security | Organization-authorized requests, staff-accepted deliverables, staff-confirmed use, verified work performed and documented operational improvements. Current status: **Not yet verified**. |

The initial audit found 29 open issues, 10 open PRs (two drafts), no approving reviews, and no assignees. Current PR heads passed CI. One earlier run was cancelled; the latest checks superseded it. No open dependency or secret-scanning alerts were returned. Main still contained the launch commit, so proposed PR work was not counted as shipped. These are dated setup observations, not a live metrics feed; the Project documentation PR adds another open PR. Recheck primary sources each week.

The [impact ledger](../site/data/impact.json) starts empty. Work proposed, work submitted, deliverable accepted, actual use and independently documented outcome are five different facts. Never turn stars, visits, code, research, translations or hours into meals served or people fed.

## Governance and a sustainable routine

Follow [GOVERNANCE.md](../GOVERNANCE.md) and [CONTRIBUTING.md](../CONTRIBUTING.md). Project setup does not replace their policies or weaken code-owner reviews. No stranger receives access. New co-maintainers begin with a public review trial, mutual consent and least-privilege permissions. Founder-authored PRs need an independent authorized code owner; recruitment #35 is a dependency, not an automatic access grant.

**Weekly, about five minutes of triage:** open Executive Overview; review P1 work and blocker text; inspect Review Queue checks; check #36's authorization state; coordinate new contributions. Record the next small safe action in the existing item. Actual reviews and source verification may require more time.

**Monthly:** review pilot evidence and consent, newcomer friction, stale tasks and the next month's priorities. #17 already overlaps draft PR #31; coordinate there instead of duplicating the same tests. General handout #14 and the organization-specific draft #38 are distinct. No launch-day task is deemed stale solely because it is unassigned. Recheck dated requests promptly and use a human decision before archiving or expiring them.

**Quarterly:** review security, moderation capacity, organizational relationships, roadmap and real public value. Stop or simplify work that cannot be maintained.

**If the founder is unavailable:** existing authorized maintainers may triage under current policy. Pause new organization commitments, fundraising, account/access changes and verified listings where no authorized decision-maker is available. Keep protection in place, explain delays, and do not promise response times or nominate an unconsenting replacement.

## 30 / 60 / 90-day operating roadmap

These are planning horizons, not promised dates or partner commitments.

- **First 30 days:** find a trusted reviewer through #35; independently review correctness, privacy and reliability PRs; improve onboarding; verify public pilot information. Obtain founder authorization before any outreach.
- **By 60 days, if the organization opts in:** agree on one useful deliverable, acceptance criteria, a willing volunteer and a realistic target; produce a draft and ask for staff feedback. If consent is absent, keep the work prospective and improve the project foundation.
- **By 90 days, if work is accepted:** ask whether it was used and what changed; publish only permitted evidence. Decide with the organization whether to repeat, change direction or stop. Report **Not yet verified** when evidence is absent.

No paid tools, external database, donor account, subscription or ongoing cloud service is introduced.
