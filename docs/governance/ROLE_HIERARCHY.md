# OneMealForward — Role Hierarchy and Checks & Balances

> **Proposed model only.** These are the roles to introduce as qualified, consenting humans join. The current [roster](ROSTER.md) identifies which positions are vacant. This diagram is an **authority map**, not a claim that all roles have been filled or that GitHub automatically enforces the policies.

## Visual hierarchy

~~~mermaid
flowchart TD
    M["MISSION: Fighting hunger safely and with verified impact"]
    L["Constitutional safeguards: rights, safety, consent, transparency"]
    F["Founder / Mission Steward: final strategy, protected role"]
    C["Community Advisory Council: elected representation and reconsideration"]
    E["Independent Engineering Maintainers: code quality and CI"]
    S["Independent Safety & Ethics Stewards: safety holds and fair appeals"]
    O["Operations / Governance Secretary: transparent records and votes"]
    V["Volunteers & Contributors: ideas, reviews, service and voting"]
    G["GitHub Custodians: limited administrative implementation"]
    M --> L
    L --> F
    L --> C
    L --> E
    L --> S
    F <-->|"Consultation and public reasons"| C
    F -->|"Strategy and priorities"| O
    C -->|"Concerns / reconsideration"| O
    E <-->|"Independent risk consultation"| S
    E -->|"Reviewed code authorization"| G
    S -->|"Safety hold / clearance"| G
    O -->|"Authorized decisions and logs"| G
    V -->|"Feedback / representative elections"| C
    V -->|"Code and service contributions"| E
    V -->|"Concerns and appeals"| S
    L -->|"Binding procedural limits"| G
~~~

**Read the chart this way:** the founder leads strategic choices; the council represents members; independent engineering and safety reviewers hold separate approval gates; custodians execute only duly authorized actions. None is above the mission, safety rules, or participant rights. The arrows do **not** imply the founder can order a reviewer to approve code.

## Practical role hierarchy and protections

| Role | How selected | Decisions and duties | Can check or challenge | Cannot bypass or control |
| --- | --- | --- | --- | --- |
| **Founder / Mission Steward** | Protected founding role, initially @gsel001 | Final lawful strategy, priorities, organizational identity; written consent on reserved voluntary transfers/amendments | Council recommendations, independent safety findings, appeal procedures, required consultation | **Cannot self-approve PRs, disable security gates, retaliate, or overrule a substantiated safety hold** |
| **Advisory Council** | Initially founder + two consenting independent advisers; eventually founder + four elected representatives | Public consultation, oversight, representative feedback, reconsideration requests, records | Challenge strategy, demand reasons, refer ethics issues | Cannot merge code, seize founder's office by ordinary vote, fabricate community approval |
| **Engineering Maintainers / Code Owners** | Technical assessment, trial public reviews, documented role acceptance and limited permission grant | Review code, tests, release quality, accessibility, CI | Reject unsafe code with specific reasons; raise security concerns; independent technical appeal | Cannot approve own change, ignore safeguarding hold, claim real-world outcomes |
| **Independent Safety & Ethics Stewards** | Independent vetting and recorded acceptance; appeals panel when staffed | Privacy, misconduct, safeguarding, holds, impartial appeal | Stop a specific risky release; assess complaints against **anyone** including founder | Cannot use an indefinite unexplained veto or adjudicate own complaint |
| **Governance Secretary / Operations** | Appointed under documented governance decision | Maintain eligibility, time windows, decision records, access and incident logs | Reject incomplete vote records or missing signatures as procedural gaps | Cannot invent votes, change criteria for one outcome, grant own access |
| **Voting Members and Contributors** | Open participation; opt-in eligible voting rules in Charter | Suggest and critique decisions, elect representatives, submit PRs and service work | Petitions, public consultation, concerns, appeals | Cannot approve own PR, expose private data, or gain admin access by vote alone |
| **GitHub Custodians / Admins** | Only trusted people granted scoped admin access; future organization owners require separate process | Configure access, backups, platform settings and incidents as authorized | Emergency containment subject to prompt independent review | **Technical ability is not permission to bypass** code checks, transfer project, weaken founder protections or delete dissent |

## Decision-rights matrix

Legend: **D** = final strategic decision; **R** = independent technical/safety review or release gate; **C** = mandatory consultation; **A** = advisory participation; **I** = implementation after authorization; **V** = ratifying vote. More than one gate in a row means **all are required**, not an either/or choice.

| Matter | Founder | Council / Members | Engineering | Safety & Ethics | Custodian / Operations |
| --- | --- | --- | --- | --- | --- |
| Ordinary mission-aligned strategy | **D**, publish reasons | **C** on major choices; reconsideration power | A | A for risk | I |
| Routine code PR | Propose/priority only | A | **R: non-author code owner** | A if relevant | I only after protected CI and required approval |
| Security, privacy or partner-data change | D on whether to pursue, **not release** | C | **R: independent engineer(s)** | **R: safety review/hold** | I only after all gates |
| Partner onboarding or impact claim | Strategic direction only | C | A for technical handling | **R: authorization and evidence** | I once verified |
| Contributor complaint, including founder complaint | Respond; **recuse if accused** | Oversight where unconflicted | A for technical facts | **R: impartial investigation and appeal** | Narrow action after outcome |
| Ordinary member eligibility/election | Cannot hand-pick electorate | **V**, with verifiable roster | A | Conflict and fair-process review | Record tally |
| Constitutional change | **Reserved written consent** unless Article 9 exception | **Council supermajority + community ratification** | **R: independent review** | **R: independent review** | I only after documented approval and checks |
| Transfer of repo, domain or control of project | **Reserved consent** while serving and unconflicted | Constitutional approvals | R for continuity and security | R for independence and safeguarding | I only after documented plan; never automatic |
| Emergency threat containment | Notify/coordinate, cannot waive checks | Retrospective oversight | Containment technical assessment | Safety oversight and reassessment | May implement **temporary least-privilege containment**; no unreviewed feature deployment |
| Founder for-cause accountability | **No veto or adjudication of own case** | Nonfounder supermajority under Article 9 | Technical evidence if relevant | **Independent investigation and appeal** | Execute only legally and technically authorized result |

## How a decision reaches implementation

1. **Proposal:** issue or Discussion; define humanitarian objective, affected roles, evidence and risks.
2. **Consultation:** ask the impacted volunteers and advisory council; record good-faith objections and founder response.
3. **Independent gate:** code owners must review code; safety stewards examine privacy, partner, security and humanitarian risks as appropriate. A single person cannot act as author and independent reviewer.
4. **Final strategic decision:** founder approves, revises or declines strategy. This cannot cancel an independent technical or safety failure.
5. **Implementation:** custodian or authorized maintainer acts only after the relevant approvals, GitHub CI, and security holds are cleared.
6. **Accountability:** publish a privacy-safe record of the decision, dissent, approvals, appeals and results.

### Founder-protection and safety worked examples

| Scenario | Required outcome |
| --- | --- |
| Founder submits a PR and wants it merged quickly | Wait for required **non-author** review, CI and unresolved threads; founder's permission level does not waive them |
| Founder disagrees with a documented security hold | Appeal to **other qualified independent reviewers**; do not merge or disable checks while the hold is active |
| Majority of new contributors dislike the founder | Criticism is heard, but a popularity vote cannot remove the protected office; only serious documented cause and Article 9 fair process can |
| Founder wants to move the repository into a GitHub organization | Obtain separately recorded founder consent, council/community approval as required, independent security review and verified continuity arrangements |
| A second GitHub organization owner tries to demote the founder | This may be **technically possible** under GitHub; it would violate the proposed Charter if unauthorized. Preventive controls are trusted co-owner selection, documented ownership agreement/asset safeguards, audit and legal recourse where available—not a false promise of an unremovable GitHub owner |
| Volunteer respectfully objects to a decision | Record and assess the concern without punishment; offer reconsideration or appeal where appropriate |
| An allegation against the founder involves immediate harm | Independent stewards may coordinate proportionate temporary containment; the founder cannot veto their own independent review |

## Implementation reality

GitHub does **not** natively enforce this table or an offline referendum. A CODEOWNERS line with two names does **not** require both to approve. Make the practical settings stricter as authorized reviewers join, test them with a sample PR, and never grant admin permissions to unvetted applicants. Organization owners can change other owners' roles; no GitHub setting makes the founder irrevocably an owner. Keep the project on the personal account **until** a separately reviewed organization and legal-custody arrangement is ready.

See the [Charter](CHARTER.md), [decision procedure](DECISION_PROCESS.md), and [transition guide](ACCESS_AND_TRANSITION.md).
