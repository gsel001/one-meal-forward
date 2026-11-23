# Mission verification policy

## Scope and states

- **Project task:** a real issue owned by OneMealForward, reviewed for scope and usefulness. This is not a partner endorsement or food distribution shift.
- **Verified organization:** a maintainer has recorded evidence of public identity, authorization for this exact request, an official safe contact route, scope, and expiry. Verification is limited to these checks; it is not a guarantee of safety or accreditation.
- **Pending review:** insufficient evidence; no recruitment action is shown. Public issue submission does not create a board entry.
- **Expired:** expiry has passed or review has been revoked; no recruitment action is shown. Dates are interpreted as end-of-day UTC.
- **Example:** synthetic test fixtures only. The build rejects examples in published mission data.

An expiry date remains valid through its entire UTC day, including the final
millisecond; it expires at 00:00:00 UTC the next day. The board refreshes at that
boundary and when a tab becomes visible or a page is restored. Recruitment links
also recheck `effectiveStatus()` on activation, including keyboard and middle-click,
so a delayed background timer cannot authorize an expired action. Refreshes retain
filters and pagination, update counts, and preserve focus where possible.

These checks use the browser's clock and the mission data loaded with the page.
They cannot independently detect organization consent revocation or GitHub issue
closure, nor fetch later corrections to the static catalogue. Such changes require
maintainer review and an updated deployment; an already-open tab needs to reload
to receive the new data. Client-side expiry is not proof of current consent.

## Organization checklist

1. Review the issue for personal information before doing anything else. Remove sensitive content using GitHub procedures and avoid copying it into Git.
2. Independently locate the organization's official website. Check the request through a public organizational channel, not just the submitter's assertion. Do not privately contact others without authorization from the founder.
3. Obtain authorization to list this specific task; record a public consent artifact suitable for publication. Do not publish private correspondence.
4. Confirm location scope, available languages, skills, online/in-person mode, estimated effort, accessibility expectations, adult/minor restrictions, and safe next steps. Never invent addresses or translations.
5. Reject pay-to-volunteer scams, transfers to personal accounts, unsafe solicitations, beneficiary identification, and unsubstantiated meal counts.
6. Add `kind: organization`, `status: verified`, `consentEvidence`, `reviewer`, `evidence`, `verifiedAt`, and `expiresAt` via a reviewed pull request. Use a maximum 90-day review window; shorter for time-sensitive requests. Review a project task against its open issue and use the same maximum window.
7. Recheck the official source before renewal. Close, expire, or remove unavailable requests promptly. Check linked issue state weekly; the static site does not synchronize live with GitHub.

A second reviewer is preferred for organization listings; currently only the founder is a maintainer. Document this limitation and do not invent a second approval. A correction or consent withdrawal suspends the listing pending review. No organization missions are present at launch.
