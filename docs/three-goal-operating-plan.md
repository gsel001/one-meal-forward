# OneMealForward: impact, reputation, and sustainability strategy

**Status:** proposed operating plan; not a change to funding authority, nonprofit status, or partnership verification  
**Prepared:** 2026-11-18  
**Owner:** founding maintainer (@gsel001)  
**Cost target:** $0 in required startup spending

## The promise

Help organizations that already work on food insecurity solve **specific, approved technology and communication problems** using volunteer contributors. Make useful outcomes verifiable. Give contributors accurate credit. Pursue clearly separated, ethical funding for maintaining the project and professional services.

**Three goals, three separate measures:**

1. **Humanitarian impact:** A food-security organization requests, approves, uses, and evaluates a deliverable. Report what was actually confirmed, not inferred meals or people fed.
2. **Professional credibility:** Publicly reviewed issues, accepted pull requests, evidence-based case studies, reliable operations, and fair contributor attribution.
3. **Financial sustainability:** Optional compensation for genuine engineering, maintenance, project management, or separately contracted services—with written terms and clear distinctions from food-aid donations.

The website is **not** a food-distribution service, registered nonprofit, donation processor, or verified partner directory. There are **no confirmed organizational partners or food assistance outcomes** as of this document's preparation.

## Operating model: organizations first, software second

**Official need → consent → scoped issue → volunteers → independent review → organization acceptance → publication of a narrowly verified outcome.**

- Prefer maintenance, accessibility, translated *public* information, volunteer scheduling guidance, data quality, and workflow improvements to building yet another standalone food-donation platform.
- Before work is described as a partner request, contact the organization only after founder approval; check the official channel, scope, authorized reviewer, consent for naming, data sensitivity, deadlines, and any safety obligations (see [verification](verification.md)).
- Never use beneficiary names, addresses, applications, eligibility information, donor records, or private shift data in public GitHub issues. Use mock data.
- A published contributor PR proves *code or documentation work*, not adoption. Obtain organization confirmation before saying a deliverable was used.
- Do not convert code, volunteer time, or speculative efficiencies into meals provided.

## Prospect pipeline (research is not a partnership)

| Prospect | Existing public evidence | Next safe action | Status |
| --- | --- | --- | --- |
| Dearborn Community Food Pantry | [Official information](https://dearbornfirstumc.squarespace.com/groups/food-pantry); [coordination issue #36](https://github.com/gsel001/one-meal-forward/issues/36) | Founder approves a respectful inquiry; coordinator chooses a small deliverable and whether any work is wanted | **Not contacted / permission pending** as recorded in issue #36 |
| TechSoup Food Security Impact Drive | [Official project](https://page.techsoup.org/impact-drive); [open GitHub research library](https://github.com/TechSoup/impact-drive-food-security) | Read the builder guidance; select one documented problem, ask project maintainers how contribution and introductions should work | **Independent research only; no agreement** |
| Other existing open-source food-security maintainers | [Food Oasis](https://github.com/hackforla/food-oasis); [Open Food Network](https://github.com/openfoodfoundation/openfoodnetwork); [Sharing Excess](https://github.com/sharingexcess) | Follow each upstream project's onboarding and seek an explicitly accepted issue before presenting collaboration as a OneMealForward deliverable | **Potential upstream contributions, not partners** |

Do not publish these prospects as verified organization missions. Use their own preferred issue, discussion, or contact process; do not spam maintainers.

## First seven days: five bounded actions

- [ ] **Review the existing work**: pilot PR [#40](https://github.com/gsel001/one-meal-forward/pull/40), coordination [#36](https://github.com/gsel001/one-meal-forward/issues/36), impact design [#39](https://github.com/gsel001/one-meal-forward/issues/39), and the [co-maintainer request #35](https://github.com/gsel001/one-meal-forward/issues/35). Do not create duplicate tasks.
- [ ] **Get an independent reviewer** willing to review documentation, accessibility, and security-sensitive GitHub changes; do not count the author approving their own PR. Grant only necessary access.
- [ ] **Choose one prospective organization's actual need**; request founder approval *before* contacting anyone. Limit pilot delivery to one small, reversible deliverable that needs no private beneficiary data.
- [ ] **Verify how the partner would accept the work** (named authorized contact, one acceptance criterion, consent to quote, public/private evidence boundary, and a check-in date).
- [ ] **Read TechSoup's builder guidance** and identify one upstream-aligned opportunity without implying endorsement or duplicating their work.

The November 21 Dearborn distribution referenced in issue #37 is time-sensitive. Recheck official information before using it; do not promise an in-person role or rush consent.

## Milestones and stopping rules

| When | Measurable target (not a forecast) | Evidence |
| --- | --- | --- |
| Days 1–30 | One independent reviewer; up to five carefully researched prospects; one organization **willing** to discuss a defined need | Official sources, contributor review, private consent artifact summarized safely |
| Days 31–60 | One scoped deliverable accepted by the organization or a documented decision not to proceed | Approved issue, reviewed PR, partner acceptance or explicit declined/paused status |
| Days 61–90 | Publish one consented case study; establish a repeatable intake-to-acceptance workflow; evaluate actual support costs | Public evidence links and approved anonymized outcome statement |

If no organization agrees to a pilot by day 60, **do not build speculative features**. Ask prospective partners what is missing, simplify the offer, and continue useful contributions upstream. If there is no independent reviewer, hold changes that require protected-branch approval.

A useful public monthly scorecard should distinguish: researched prospects; actual contacts; consented pilots; accepted upstream PRs; accepted partner deliverables; confirmed adoption; and expenses/revenue. Report zero where zero is known, and 'not measured' where evidence is absent.

## Professional credibility

- Founder status may be stated factually; do **not** imply personal authorship of every volunteer contribution.
- Make contributor recognition optional, evidence-linked, and consent-based. Credit upstream maintainers and organizations in their preferred manner.
- Share case studies **only** after the relevant maintainer and organization authorize the content. A case study describes the original bottleneck, exact delivered change, deployed/adopted status, and *only* observed results.
- Build reputation through accessibility, maintainability, secure delivery, contributor experience, and responsiveness—not by GitHub stars or invented meal equivalents.

## Ethical financial sustainability (separate from aid)

**Route A — maintainer support:** After checking eligibility and getting founder approval, consider GitHub Sponsors or other documented development sponsorship. Funds compensate specified open-source maintenance/community work; sponsorship is not food relief and never buys favorable organization verification or mission ranking.

**Route B — separately contracted technical services:** If an organization or business **chooses** to purchase software, accessibility, training, or maintenance, use a separate written scope, price, ownership/licensing terms, acceptance criteria, and disclosure of conflicts. Free humanitarian work stays free; do not turn an agreed volunteer task into an invoice or make help conditional on payment.

**Route C — genuinely eligible grants or fiscal hosting:** Research the specific program and costs first using [funding guidance](funding-and-support.md). No application, account creation, expenditure, tax representation, or money collection without explicit founder approval. An independent initiative must not claim 501(c)(3) status or tax-deductible donations.

**Financial transparency:** Before accepting any funds, publish a plain-language policy stating payer, recipient, purpose, possible fees, permitted expenses, compensation/decision authority, and the effect (if any) on a project. Keep personal finances and partner funds separate. Ask a qualified tax/legal professional about paid contracts, taxes, fundraising rules, and conflicts when applicable.

**Nonnegotiables:** No payment to volunteer; no fee to seek food; no beneficiary monetization, advertising/tracking tied to food assistance, referral commissions for placement, sale of personal data, or deceptive donation appeals.

## Decision gates

1. **Permission gate**: founder authorizes outbound contact, separately from creating this strategy.
2. **Partner gate**: organization has confirmed the exact request and how it will approve the result.
3. **Review gate**: an authorized independent reviewer examines proposed repository changes; existing protections stay in force.
4. **Impact gate**: record only verified contributions and organization-attested use, with appropriate consent.
5. **Money gate**: any sponsor link, application, paid contract, or expense gets separate approval and transparent terms.

## Related project work

- [Roadmap](../ROADMAP.md), [governance](../GOVERNANCE.md), [community plan](community-plan.md), [organization verification](verification.md), [impact ledger policy](impact.md), and [funding options](funding-and-support.md).
- Track implementation using existing issues/PRs above. This document is a proposal for coordination, **not proof of executed outreach, donations, partnerships, employment, or outcomes**.
