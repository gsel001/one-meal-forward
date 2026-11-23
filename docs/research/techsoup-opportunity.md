# TechSoup opportunity review

**Status: research only.** Prepared 2026-11-18 for [OneMealForward issue #43](https://github.com/gsel001/one-meal-forward/issues/43). No external message, upstream issue or PR has been sent. TechSoup has not accepted a contribution or authorized a OneMealForward partnership.

## Finding

TechSoup's Food Security Impact Drive contains research and design material, not a deployed platform that OneMealForward should rebuild. Its [solutions index](https://github.com/TechSoup/impact-drive-food-security/blob/main/solutions/README.md) says the landscape survey is in progress and welcomes entries. A small contribution could document an existing tool and its limits before anyone proposes new software.

The candidate is an original, source-linked entry about **Food Oasis** and whether its directory-maintenance workflow covers part of TechSoup's provider-update use case. This is a research contribution proposal, not a request from a food pantry. Its benefit would first be assessed by upstream maintainers; food-security outcomes remain unverified.

## Source record

Checked 2026-11-18. TechSoup main was commit `c4d47b1c05e20b4489c67a698559f1aa5835501d` (last commit dated 2026-08-17). Recheck main before sending any proposal.

| Primary source | What it establishes | Validation limit |
| --- | --- | --- |
| [Official Impact Drive page](https://page.techsoup.org/impact-drive) | TechSoup invites research, developer and practitioner contributions. | A public invitation is not consent to represent TechSoup or proof of a current implementation request. |
| [Builder guidance](https://github.com/TechSoup/impact-drive-food-security/blob/c4d47b1c05e20b4489c67a698559f1aa5835501d/start-here/for-builders.md) | Read the research, check each artifact's validation field, and co-design with practitioners. | Event-grounded research does not confirm a particular pantry's present need. |
| [Provider update use case](https://github.com/TechSoup/impact-drive-food-security/blob/c4d47b1c05e20b4489c67a698559f1aa5835501d/use-cases/provider-update-pantry.md) | Describes a coordinator updating hours and inventory through a simple interface. | Marked `validation: validated` in the corpus, based on workshop evidence; no OneMealForward deployment or staff acceptance follows. |
| [Nearby pantry use case](https://github.com/TechSoup/impact-drive-food-security/blob/c4d47b1c05e20b4489c67a698559f1aa5835501d/use-cases/find-nearby-pantries.md) | Describes finding pantries by location, hours and food options. | Also marked `validated`; local directory accuracy, availability and usability still require checks. |
| [Solutions index](https://github.com/TechSoup/impact-drive-food-security/blob/c4d47b1c05e20b4489c67a698559f1aa5835501d/solutions/README.md) | Existing-tool survey is not finished. | Not a validated claim that no existing software fits. |
| [Contribution instructions](https://github.com/TechSoup/impact-drive-food-security/blob/c4d47b1c05e20b4489c67a698559f1aa5835501d/CONTRIBUTING.md) | Gaps can be raised in issues; proposed entries receive committee review. | No submission has been made or accepted. |
| [Food Oasis repository](https://github.com/hackforla/food-oasis) and [README](https://github.com/hackforla/food-oasis/blob/develop/README.md) | An existing open-source food-resource directory with data verification, design, testing and development work. | Its existence does not prove inventory updates, suitability for Dearborn, current data accuracy or willingness to collaborate. |

Only the sampled use cases above were assessed. Do not label the whole corpus, a new idea or an organization need as validated. Recheck `validation:` on every additional artifact; hypothesized content needs practitioner confirmation.

## One task to propose, after founder approval

**Proposed upstream deliverable:** one original Markdown entry, for example `solutions/food-oasis.md`, following the upstream content requirements. Ask maintainers whether that entry would help before preparing a production integration.

The entry should compare public evidence against these questions:

- Can the tool represent pantry locations and hours, and who can change them?
- What moderation and source-verification steps are documented?
- Is stock or inventory information supported? Mark it unknown until a source or maintainer confirms it.
- What public evidence exists for keyboard, mobile and low-bandwidth use? Do not infer accessibility from screenshots.
- What would a local organization need to maintain accurate information, and what costs or service dependencies would it inherit?

Separate documented support, unknown behavior and a possible mismatch. Do not scrape pantry records, copy beneficiary information, fork a full platform, or add an API to OneMealForward as part of this task.

### Acceptance criteria

1. Recheck upstream main, open issues and existing solution entries. Do not duplicate a pending survey.
2. Use primary-source links and check dates for each factual claim. Include an explicit list of unknowns.
3. Describe the overlap with the sampled use cases and at least one limit requiring confirmation.
4. Keep all examples synthetic. No beneficiary, donor, private staff, inventory or shift records are needed.
5. Follow TechSoup's contribution and license requirements, with attribution and maintainer review.
6. Treat an upstream merge as an accepted research contribution only. Confirm whether maintainers found it useful before claiming adoption; any pantry use needs its own consent and evidence.

This is a small documentation/research task. It requires source review and some familiarity with web applications; estimated effort is 2–4 hours after maintainers agree on scope. The estimate is not a promise of volunteer availability.

## License and data boundaries

This review is original prose summarizing facts and linking to sources. It does not import upstream text, code, personas or templates into OneMealForward's Apache-2.0 files. TechSoup's corpus is [CC BY-SA 4.0](https://github.com/TechSoup/impact-drive-food-security/blob/main/LICENSE); an upstream adaptation must follow that license and attribution requirements. Food Oasis reports GPL-2.0 for its code. No code is copied or relicensed here. Review compatibility before any later reuse; a source link does not grant integration permission.

## Unsent feedback draft

**Do not submit until the founder authorizes the destination and scope.** Use the official [Get involved route](https://page.techsoup.org/impact-drive#getinvolved), or a GitHub issue as directed in the contribution instructions. Do not send the same request through multiple channels.

> I maintain OneMealForward, an early-stage volunteer project supporting food-relief technology. Your solutions index is still being developed. Would a short, source-linked entry about Food Oasis and its fit and gaps for the provider-update use case be useful? We would follow your review and licensing process, keep unknowns explicit, and use no beneficiary data. We have not built an integration or described TechSoup as a partner. If another contribution would be more useful, or the entry is already underway, please let us know.

## Next decision

The research brief can be reviewed in OneMealForward now. Upstream feedback, contribution acceptance and practitioner validation remain pending. If maintainers decline or have no capacity, pause the proposal; do not interpret silence as permission. Continue the Dearborn authorization process in #36 rather than treating this research as a substitute for a real organization request.

## Other existing systems: reuse before building

Decision: research, not integration. The demonstrated problem is an incomplete existing-tool survey, not an approved request for another platform. A comparison can help maintainers choose what to reuse; deployment and organizational benefit still require their own evidence. No new runtime, account or data import is needed.

Present-day checks on 2026-11-18:

| Project | Activity and relevance | Contribution route and requirements | OneMealForward decision |
| --- | --- | --- | --- |
| [Food Oasis](https://github.com/hackforla/food-oasis) | Public, non-archived repository; latest push reported 2026-11-17. Existing food-resource directory and data-verification work overlap the sampled discovery use cases. | Follow the [README](https://github.com/hackforla/food-oasis/blob/develop/README.md) and its Hack for LA/team onboarding before proposing upstream work. GPL-2.0 code is not copied into this project. | Keep as the small TechSoup survey candidate. Do not assume its features, data or regional coverage meet a pantry's current need. |
| [Open Food Network](https://github.com/openfoodfoundation/openfoodnetwork) | Public, non-archived repository; pushes and open PRs observed on 2026-11-18. Its local-food marketplace serves producers and food hubs; it is not interchangeable with a pantry directory. | [Contribution instructions](https://github.com/openfoodfoundation/openfoodnetwork/blob/master/CONTRIBUTING.md) and [official contributor page](https://openfoodnetwork.org/become-a-contributor/) direct people to the community and review/test process. The code is AGPL-3.0; development requires its own Ruby/web environment and upstream tests. | A possible upstream contribution, after an accepted scope and founder authorization for contact. Do not deploy a new instance, copy code or promise paid work based on a public invitation. |
| [Sharing Excess](https://github.com/sharingexcess) | Its [official site](https://www.sharingexcess.com/) describes an operating food-rescue service. The public GitHub organization exposed only its profile repository to this account; the application repository linked from the profile returned 404. | [Public technology profile](https://github.com/sharingexcess/.github/blob/main/profile/README.md) and [official Get involved page](https://www.sharingexcess.com/get-involved). Application access, license and contribution requirements could not be verified. A missing repository may be private, moved or unavailable; do not infer access rights. | Defer a code contribution. An approved inquiry could ask whether there is a public task or preferred contributor route. Do not request operational data, duplicate its logistics platform or treat its own impact figures as OneMealForward outcomes. |

A recent push establishes repository activity only. It does not establish an open volunteer placement, accepted contribution, affiliation or organizational adoption. Before any upstream work, recheck the current issue, license, setup and review instructions and obtain approval for external contact. No external issue, invitation, message or PR was sent as part of this comparison.
