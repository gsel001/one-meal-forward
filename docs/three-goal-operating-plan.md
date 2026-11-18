# OneMealForward operating plan

**Proposed, 2026-11-18.** This plan does not authorize outreach, payments, partner listings, contracts or access changes. Substantial policy changes need the feedback period and decision recorded in [GOVERNANCE.md](../GOVERNANCE.md), as well as required PR review. Required startup spending remains **$0**.

## What the project is ready to do

OneMealForward can coordinate public project tasks and review organization requests. It is not yet ready to promise a partner delivery: there is no confirmed request, independent authorized reviewer or staff acceptance record.

| Baseline, checked before this change | Evidence and limit |
| --- | --- |
| Deployed | Static English mission board; search and six filters; moderated issue intake; review/expiry labels; empty impact ledger; no runtime account, tracking, database or payment service. [Main commit](https://github.com/gsel001/one-meal-forward/commit/f0d280c105baaf228bba7f402e5d148a5b7ce42e) and [website](https://gsel001.github.io/one-meal-forward/). |
| Checks | Local baseline: 9 unit/repository checks and 8 desktop/mobile browser/accessibility tests passed. Automated checks do not establish full accessibility compliance or independent review. |
| Proposed, not shipped | All 12 PRs were open, including pilot #40, Project guide #41 and this strategy #42; three were drafts. The latest PR checks passed, but no approving reviews were recorded. Main still contained the launch commit. |
| Review capacity | Only `gsel001` had repository access; [#35](https://github.com/gsel001/one-meal-forward/issues/35) recruits a reviewer. All 30 issues were unassigned. Protected main requires tests, code-owner review and an approval; no bypass actor exists. |
| Coordination | [Mission Control](https://github.com/users/gsel001/projects/1) is public with eight views and native intake/status workflows. It had 42 items before this work. Project statuses do not certify organization outcomes. |
| Humanitarian results | No authorized request, staff-accepted deliverable, confirmed use or field outcome is recorded. The [impact ledger](../site/data/impact.json) is empty. Pantry #36 and TechSoup #43 remain prospective/research work. |
| Funding | No payment destination or fundraising account is configured in this repository. No income or grant award is claimed. Personal finances and account eligibility have not been audited. |

These are dated observations. Recheck GitHub and organization evidence before publishing a later progress report. The new PRs from this work increase the review backlog; opening them is not a completed contribution.

## Priorities and current changes

1. **Independent review capacity:** use #35. Start with one small review; do not grant access to fill a role on paper. Correctness, privacy and recovery proposals #30, #32 and #33 deserve review before speculative features.
2. **A request staff actually want:** use #36–#39 and pilot PR #40. The first deliverable is chosen by the organization after founder-authorized contact, not by the existence of a draft.
3. **Request-to-handoff procedure:** [PR #44](https://github.com/gsel001/one-meal-forward/pull/44) improves the existing intake form, review guidance, volunteer coordination and acceptance/use checks. It adds no backend.
4. **Upstream research:** [PR #45](https://github.com/gsel001/one-meal-forward/pull/45) addresses the research deliverable in #43. It proposes an existing-tool survey for TechSoup review, not another food-directory application.
5. **Funding preparation and factual presentation:** this PR documents the founder's role, sources, compensation boundaries and next decisions. It does not activate a business or fundraising service.

Existing work should be reviewed, not reimplemented: #17 overlaps search PR #31; #11 covers consent documentation; #14 is a general onboarding handout while #38 is an unapproved pantry-specific proposal. #29 already proposes source-health monitoring, #30 impact validation, #32 data validation, #33 recovery safeguards and #34 metadata. None is counted as deployed until merged and published.

## Five prospects and their public contact routes

Checked 2026-11-18. These are **four food-relief organizations and one sector research intermediary**, not five partners or five confirmed technology requests. The sources establish organizational activity and a published route, not technical demand, permission to contact, staff authority or capacity. The routes have not been tested by sending a message. No contact has been made by this work.

| Prospect | Official evidence and public route | Why consider it; question to ask after approval |
| --- | --- | --- |
| Dearborn Community Food Pantry | [Church pantry page](https://dearbornfirstumc.squarespace.com/groups/food-pantry) publishes `missions@dearbornfirstumc.org`; [city listing](https://dearborn.gov/local-organizations-providing-food-assistance) provides corroboration. | Existing local prospect in #36. Ask whether one public-information or volunteer-instruction improvement would help. The Nov. 21 listing does not confirm open shifts. |
| Forgotten Harvest | [Official contact page](https://www.forgottenharvest.org/contact/) lists `info@forgottenharvest.org`, `volunteer@forgottenharvest.org` and a general inquiry form. | Food rescue and volunteer operations in Metro Detroit. Ask whether a small public-information accessibility review is wanted; no access to donor or logistics records is proposed. |
| Food Gatherers | [Official contact page](https://www.foodgatherers.org/about-us/contact-us/) lists `info@foodgatherers.org` and a student-project request route with limited availability; [organization site](https://www.foodgatherers.org/) describes Washtenaw County food-bank and rescue work. | Ask which route fits an independent volunteer technology proposal. Do not claim student-project status or availability, and do not submit an application without approval. |
| Feeding America West Michigan | [Official site](https://www.feedwm.org/) describes its food-bank work; [contact page](https://www.feedwm.org/contact/) lists `Volunteer@FeedWM.org` and the main office phone for routing. | Ask whether staff want a small review of public volunteer instructions or resource-page clarity, or prefer another process. No scheduling or pantry-data system is proposed. |
| TechSoup Food Security Impact Drive | [Official project page and Get involved route](https://page.techsoup.org/impact-drive#getinvolved); [contribution instructions](https://github.com/TechSoup/impact-drive-food-security/blob/main/CONTRIBUTING.md) allow upstream issue proposals. | A research/contribution intermediary, not a local pantry. #43 / PR #45 identifies one existing-tool survey to discuss with maintainers. No introduction or endorsement is confirmed. |

The proposed improvements are questions, not diagnosed defects or advertised volunteer missions. Do not scrape organizational records or publish these prospects in `site/data/missions.json` as verified listings.

### Unsent outreach drafts

Use the existing [Dearborn draft in PR #40](https://github.com/gsel001/one-meal-forward/pull/40) rather than writing a competing pantry message. The [TechSoup draft is in PR #45](https://github.com/gsel001/one-meal-forward/pull/45). Neither is approved for sending.

For Forgotten Harvest, Food Gatherers or Feeding America West Michigan, use this short draft only after the founder approves the recipient and scope. Choose one route; do not send a sequence of messages across departments.

> Hello, I maintain OneMealForward, an early-stage volunteer technology project. I found your public [volunteer information / project-request page]. Would your staff find a small, no-cost review of that public information useful, or is there another process we should follow? We would agree on one deliverable and acceptance test with you before work starts, use no beneficiary or confidential records, and seek permission before publishing anything that names your organization. We cannot promise ongoing support or a particular volunteer's availability. Declining is fine. Who, if anyone, should review such a proposal?

Tailor one sentence to the actual page and organization. Remove any offer the project cannot support. Do not claim a partnership, request internal access, promise a delivery date or combine the inquiry with fundraising. If there is no response, record it as unconfirmed; silence is not consent. Obtain approval before any follow-up.

## Independent reviewer recruitment

No person has agreed to review OneMealForward yet. Issue #35 is the existing recruitment record. Do not create another role advertisement or grant access to an applicant automatically.

Two public leads worth screening, **not vetted OneMealForward reviewers**:

- `VirginiaWu11`: public approvals on Food Oasis [Playwright/CI upgrade #2925](https://github.com/hackforla/food-oasis/pull/2925) and [CI timing work #2933](https://github.com/hackforla/food-oasis/pull/2933). This shows related review activity, not availability or sufficient review depth for our work.
- `hanapotski`: [dependency cleanup #2935](https://github.com/hackforla/food-oasis/pull/2935) contains dependency, lockfile and test feedback. The review explicitly discloses AI assistance; confirm the person's own validation and accountability before treating it as independent human review.

These references are public evidence only. Neither person was contacted, invited, tagged in an issue, endorsed or offered access. Public activity does not establish willingness, identity, employment or a relationship with OneMealForward.

Recruitment steps:

1. Founder approves a specific invitation or public recruitment post, or responds to someone who volunteers in #35. Respect upstream communities; do not use their issue trackers to advertise this role without permission.
2. Ask for a realistic commitment: one bounded review, no write access, no required personal contact details. Let the person choose from existing work such as #32 or #33.
3. Evaluate a trial review for source inspection, reproducible checks, security and privacy judgment, license awareness, maintenance cost and a clear explanation. Ask what was personally checked and what tools assisted it. Do not accept a generic approval as evidence of those checks.
4. If both sides want to continue, document responsibilities, availability and least-privilege access. Any code-owner change remains subject to review. A comment from a volunteer without the required permission does not satisfy branch protection.
5. If no reviewer qualifies, leave PRs open and pause new technical commitments. Do not weaken protection or count the author's AI-assisted work as independent review.

## Founder and project presentation

The founder is `gsel001`, the founding maintainer and current repository administrator. Responsibilities include selecting scope, approving outreach, maintaining review and privacy rules, coordinating volunteers, checking claims and deciding whether the work can be supported. This setup and its proposed changes were prepared with AI assistance. Commit attribution alone should not be described as proof that the founder manually authored every line.

**Public introduction, ready for founder review:**

> I founded and maintain OneMealForward, an open-source project preparing volunteer technical help for organizations fighting hunger. The current site provides project tasks, search filters, moderated request intake and an evidence ledger. I coordinate the repository, testing, documentation and consent requirements, using automated and AI tools to prepare work for review. Our first organization pilot is still prospective. We have not verified food-security outcomes. The next step is an independently reviewed deliverable that an organization requests, accepts and uses.

The architecture is static HTML, CSS and browser JavaScript on GitHub Pages, with Node-based validation, Playwright/axe checks and GitHub Actions. Apache-2.0 covers project code and contributions under the existing terms. There is no application server, beneficiary database, tracker or payment service.

Use these sources in a project profile or portfolio:

- [Launch commit](https://github.com/gsel001/one-meal-forward/commit/f0d280c105baaf228bba7f402e5d148a5b7ce42e) and [successful deployment run](https://github.com/gsel001/one-meal-forward/actions/runs/44243335536): evidence of repository-attributed engineering and delivery, not independent code review or pantry impact.
- [PR history](https://github.com/gsel001/one-meal-forward/pulls): distinguish proposed, reviewed, merged and deployed work. Credit authors and reviewers separately; label automated dependency proposals as such.
- [Mission Control](https://github.com/users/gsel001/projects/1): evidence of project coordination, not delivery of food assistance.
- [Impact ledger](../site/data/impact.json): currently empty. Do not replace it with estimates, testimonials or a pantry's own distribution statistics.

### Progress reports, credit and case studies

Publish a short monthly report only after checking sources. For each claim record the date, exact work, current state, evidence link, founder/volunteer/automation role and next unresolved decision. Separate work prepared with AI tools from independent human review. Report compensation only if approved and actually paid, without exposing private payment information. Do not credit a volunteer without their consent or imply that contributors endorse paid services.

There is no organization case study yet. A future one needs: the organization's permission to publish; its confirmed problem; the agreed deliverable; reviewed version and acceptance test; actual deployment or use; dated observations and limitations; contributor/reviewer credit with consent; and maintenance/withdrawal terms. If the work was accepted but not used, say that. If use was confirmed but no outcome was measured, say that. Staff feedback is not independent evaluation; identify the source accurately.

## Proposed funding and compensation policy

**Not active.** No destination, account, application, rate, compensation promise or contract is approved by this document. Follow the existing governance feedback period before adopting this policy. Every actual financial action still needs separate founder approval. The project is not a registered charity and does not claim tax-deductible donations.

| Arrangement | Possible recipient and purpose | Required before proceeding |
| --- | --- | --- |
| Development sponsorship | Founder, a named developer or approved project expenses for specified maintenance, review, accessibility, documentation or coordination. | Confirm eligibility and payer/payee; approve the purpose and terms; disclose who receives the money, fees and reporting method. It is not a food-aid donation. |
| Corporate engineering support | A company's staff time or funds for agreed open-source work. | Written scope, named reviewer roles, contribution/license terms, capacity and conflicts. No promised partner access, food outcomes or branding rights. |
| Grant | Approved recipient spending within the award's restrictions. | Verified eligibility, permitted compensation and reporting terms; founder approves the application and any award before acceptance. A grant cannot be assumed to fund personal income. |
| Separate paid service | Founder or contracted developer, for a client's chosen and separately agreed work. | A separate written scope, price, schedule, acceptance test, support limits, privacy terms and ownership/license terms. No contract is signed here. |

Rules for any future funding:

- Free humanitarian work remains free within its agreed scope. Do not turn a volunteer commitment into an invoice or make assistance depend on buying another service. Never charge a person seeking food assistance.
- Before asking for or accepting funds, identify the legal payee, purpose, allocation between founder compensation/developer compensation/expenses, fees, spending authority and reporting cadence. Keep bank, tax, identity and individual payment details out of GitHub.
- Contributors do not become paid, employed, owners or maintainers merely by contributing or receiving an approved payment. Existing open-source rights remain; any paid engagement needs separate terms before it starts. Do not promise a future grant will reimburse volunteer work.
- Disclose a founder or reviewer's financial interest in the existing issue or decision record. Use an uninvolved authorized reviewer for affected technical or verification decisions. If none is available, pause the decision rather than approving it alone.
- Sponsorship cannot buy verified status, placement, mission ranking, expedited safety review, access to private data or an endorsement. Optional recognition requires permission and a factual description; logos and testimonials need separate authorization.
- Keep a public summary of authorized receipts, fees, founder/developer compensation and project expenses, with receipt references redacted appropriately. Report promised, received and paid amounts separately. No such financial activity has been verified for this plan.
- Do not process food donations or hold partner funds. Do not sell beneficiary data, run referral commissions for aid, or monetize food-assistance eligibility.
- Paid contracts, entity formation and tax questions need case-specific professional review before commitments. No legal status, employment classification or tax treatment is determined by this plan.

### Funding readiness and founder income

The founder can prepare an evidence-based sponsor profile now, but cannot responsibly forecast income from an unreviewed launch or an unconfirmed pilot. The [funding guide](funding-and-support.md) contains official requirements and readiness checks.

A practical sequence is:

1. Keep required costs at $0 and track actual maintenance time privately in aggregate, not beneficiary or staff activity. The current static site needs no paid backend or domain.
2. Establish independent review and one accepted, useful deliverable. Record what the founder did separately from volunteers and tools.
3. If the founder chooses to seek development support, approve one small maintenance scope and budget based on real work and capacity. Name the recipient and explain that the funds support engineering, not food distribution. Prepare an update describing completed work and unspent funds; do not promise meals, a wage or guaranteed output.
4. If a company or organization independently wants paid services, consider a separate limited scope, such as an accessibility review of public pages, training or maintenance. The client must choose it freely. Keep its agreement, finances, private data and delivery commitments separate from volunteer missions. Do not use a free pilot as a sales condition.
5. Reassess costs, capacity, demand and conflicts before seeking recurring commitments. If there is no demand or qualified reviewer, do not create subscriptions, hire people or buy infrastructure to make the initiative appear larger.

[GitHub Pages usage rules](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) restrict primarily commercial transaction/SaaS sites. The humanitarian project website stays noncommercial; any future commercial presence needs a separate hosting/terms decision. No sales site or payment flow is added here.

## 90-day targets and stop conditions

Day counts begin when the founder adopts a start date. They are planning targets, not partner promises or due dates. A missed target remains incomplete; it does not become a new claim.

| Window | Measurable target | Evidence / blocker |
| --- | --- | --- |
| Days 1–15 | Review five prospects and their public contact routes; prepare unsent drafts; screen reviewer leads; publish only factual founder/project material. | Prospect table and sources above; #35 and trial review. Research/drafts can be completed without outreach. No reviewer is qualified or committed yet. |
| Days 16–30 | Founder decides whether to authorize one inquiry. If authorized, ask one organization to choose a small need; agree on acceptance and evidence rules. | #36–#39 and staff-authorized scope. This target is blocked by founder authorization and organization response; no contact is sent by this plan. |
| Days 31–60 | If consent and reviewer capacity exist, deliver one reviewed improvement, record staff acceptance and actual deployment/use status; prepare only eligible funding options. | Approved issue, PR, staff permission and version. Otherwise record declined, paused or awaiting authorization and do not build for a speculative need. |
| Days 61–90 | If permitted evidence exists, publish one case study; review actual cost, support workload, paid-service options and whether to continue. | Permission and dated evidence, or an explicit "no verified case study" report. No income or expansion target is assumed. |

Maintain the existing Community launch and First verified organization mission milestones. Add these four review windows as explicit milestone targets without calendar due dates; keep existing nonempty issue assignments and cross-link related work rather than duplicating it. Mission Control should show actual review/consent blockers and leave unclaimed tasks unassigned.

Weekly: review blocked decisions, PR checks and new volunteers. Monthly: review evidence, maintenance capacity, source freshness and contributor feedback. Quarterly: decide whether the work is useful enough to continue, narrow or stop. If no organization has agreed to a task by day 60, revisit the offer instead of building more features. If the founder is unavailable, pause outreach, financial commitments and partner publication; existing authorized people may triage within current policy.

## Writing standard

Write what exists, who decides, what evidence supports it, and what happens next. Remove vague promises, repeated slogans and implied success. Do not describe a draft as an accomplishment, approval as actual use, or use as a measured outcome. Read public copy aloud and check each factual claim against a source. AI-assisted drafts require the same review as other work; a polished tone does not establish accuracy.
