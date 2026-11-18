# Mission verification policy

## Scope and states

- **Project task:** a real issue owned by OneMealForward, reviewed for scope and usefulness. This is not a partner endorsement or food distribution shift.
- **Verified organization:** a maintainer has recorded evidence of public identity, authorization for this exact request, an official safe contact route, scope, and expiry. Verification is limited to these checks; it is not a guarantee of safety or accreditation.
- **Pending review:** insufficient evidence; no recruitment action is shown. Public issue submission does not create a board entry.
- **Expired:** expiry has passed or review has been revoked; no recruitment action is shown. Dates are interpreted as end-of-day UTC.
- **Example:** synthetic test fixtures only. The build rejects examples in published mission data.

## Organization checklist

1. Review the issue for personal information before doing anything else. Remove sensitive content using GitHub procedures and avoid copying it into Git.
2. Independently locate the organization's official website. Check the request through a public organizational channel, not just the submitter's assertion. Do not privately contact others without authorization from the founder.
3. Obtain authorization to list this specific task; record a public consent artifact suitable for publication. Do not publish private correspondence.
4. Confirm location scope, available languages, skills, online/in-person mode, estimated effort, accessibility expectations, adult/minor restrictions, and safe next steps. Never invent addresses or translations.
5. Reject pay-to-volunteer scams, transfers to personal accounts, unsafe solicitations, beneficiary identification, and unsubstantiated meal counts.
6. Add `kind: organization`, `status: verified`, `consentEvidence`, `reviewer`, `evidence`, `verifiedAt`, and `expiresAt` via a reviewed pull request. Use a maximum 90-day review window; shorter for time-sensitive requests. Review a project task against its open issue and use the same maximum window.
7. Recheck the official source before renewal. Close, expire, or remove unavailable requests promptly. Check linked issue state weekly; the static site does not synchronize live with GitHub.

A second reviewer is preferred for organization listings; currently only the founder is a maintainer. Document this limitation and do not invent a second approval. A correction or consent withdrawal suspends the listing pending review. No organization missions are present at launch.

## From request to delivery

The mission issue form collects the problem, public organization/contact sources, representative's claimed role, authorization state, proposed deliverable, technical constraints, acceptance criteria and evidence plan. It accepts a public research suggestion without falsely requiring the submitter to claim organizational authority. A submission is never ingested into the website automatically.

Use the existing issue as the record. Record each decision with its date, reviewer role and permitted public evidence; omit private correspondence and personal contact details. If no safe public evidence can be shared, keep the claim unverified. Do not collect confidential records as a substitute.

| Gate | Required decision or evidence | If missing |
| --- | --- | --- |
| Identity | Check the official organization website and contact route independently. | Keep the request pending; do not publish it as verified. |
| Representative | After the founder authorizes contact, confirm through an official channel that the representative may approve this specific request. | No organization-authorized work or use of its name as a partner. |
| Scope and consent | Organization agrees to one problem, deliverable, exclusions, acceptance tests and permission to publish the request. | Public research or clearly labeled internal proposals only. |
| Volunteer match | A willing contributor understands the skills, effort, data boundary and review process; the organization accepts the coordination plan. | Do not assign work, promise capacity or create a volunteer placement. |
| Technical review | A reviewer other than the author checks the work, tests, dependency licenses, accessibility, deployment/rollback and maintenance instructions. Required code-owner approval remains in force. | Keep the PR open. Passing CI alone is insufficient. |
| Staff acceptance | An authorized staff role tests the deliverable against the agreed criteria and permits publication of a brief acceptance record. | Say "submitted" or "awaiting acceptance", not "accepted". |
| Actual use | The organization confirms whether the accepted version was used, when, and in what limited context. | Say "accepted; use not confirmed". A merged PR is not evidence of use. |
| Outcome | A dated observation supports a specific improvement, with method, limitations, verifier and permission to publish. Seek independent corroboration where possible. | Say "outcome not yet verified"; do not infer food distributed or people helped. |
| Handoff | Staff can maintain or stop using the result; instructions, owner role, support limits and withdrawal path are agreed. | Do not leave an unsupported service running or promise indefinite support. |

For each scoped task, record these public-safe details in its existing issue:

- Current state and next missing gate.
- Official source URLs and last check date.
- Confirmed need or clearly labeled hypothesis; deliverable and exclusions.
- Required skills, volunteer consent to assignment, estimated effort and any agreed target.
- Acceptance test, staff approval role, version or PR link, and maintenance/rollback instructions.
- Acceptance, use and outcome evidence as separate dated entries, with permission and limits.
- Expiry, correction, withdrawal, or a decision to pause/decline.

Do not create another ledger of beneficiary or donor information. The Project's Verification Stage summarizes this record; it does not replace it. Paid sponsorship cannot change these checks or buy a verified listing. Payment terms are outside the mission submission process and require separate founder approval.

The Dearborn sequence remains in issues #36–#39 and PR #40. Issue #43 covers independent TechSoup research. Neither is an authorized partner request. Do not open duplicate coordination issues or assume that a public upstream contribution invitation authorizes OneMealForward outreach.
