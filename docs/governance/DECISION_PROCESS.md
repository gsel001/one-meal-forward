# Governance decisions, elections, and amendment records

This is the operating procedure for the [proposed Community Charter](CHARTER.md). No vote, council, or amendment is valid merely because an issue was opened or a file was edited.

## Decision categories

| Category | Public notice | Decision authority | GitHub approval |
| --- | --- | --- | --- |
| Routine code/docs | PR and normal review | Qualified maintainers under project policy | Existing protected branch, passing CI, non-author code-owner approval |
| Sensitive security, partner, impact, access, or budget policy | At least 7 days where disclosure is safe; immediate containment may be needed | Council majority with Article 5 quorum and independent domain review | Two non-author reviews when capacity exists; never self-approve |
| Elected council appointment or recall | Nomination and 7-day voting periods, with the Charter's electorate quorum | Eligible community voting members | Recorded result; access grants are separate technical actions |
| Constitutional text or approval/voting rule | At least 14 full days of notice with the exact proposed diff | 3/3 inaugural or 4/5 five-seat council, **plus** two-thirds community ratification at quorum | At least two non-author approvals covering engineering and independent oversight, plus protected CI and code-owner review |
| Active emergency incident | Safe disclosure within 24 hours if possible | Narrow temporary containment by a designated custodian | Independent post-action review within 72 hours when available; no emergency charter amendment |

A person with a conflict must disclose it and recuse; count thresholds under the Charter rather than inventing a lower quorum. Absence of enough authorized reviewers, voters, or officers means a decision is deferred, not silently approved.

## How to propose a governance decision

1. Open a public issue using the governance proposal template, linking an exact proposed text diff where relevant. Label it `governance-proposal` when that label exists.
2. Include a plain-language summary, motivation, risks, alternatives, affected roles, access changes, safeguarding and equity concerns, and conflicts of interest.
3. Set a public discussion deadline. For constitutional changes this is no sooner than 14 full days after the complete final proposed text is made available.
4. Freeze the roster of eligible voters and council seats for that vote; publish handles with privacy-safe evidence of eligibility, and allow a challenge procedure. Do not add voters retroactively to affect the outcome.
5. Use a documented, auditable one-person-one-vote method. Anonymous reactions and unrestricted polls are not adequate for binding votes if they cannot enforce eligibility or prevent duplicate votes.
6. Publish the tally, quorum calculation, recusals, independent verification, dissent and appeals. Any substantive change in the proposed amendment restarts the constitutional notice period.
7. Submit a PR with the approved text and links to the record. Technical reviewers verify both the implementation and that the recorded vote meets requirements. No approval shortcut exists for the founder.
8. Keep the final record public and link it from the merged PR. Publication of the record does not authorize an administrator to change settings without the corresponding approved decision.

## Decision-record template

Copy the following into an issue or a file under `docs/governance/decisions/` **after** there is a real proposal:

```markdown
# Decision GOV-YYYY-NNN — short title

Status: proposed | voting | adopted | rejected | deferred | revoked
Category: routine | sensitive | election | constitutional | emergency
Proposer:
Date opened:
Exact proposed text / diff:
Rationale and alternatives:
Impact on volunteer access, partners, privacy, funding and accessibility:
Conflicts disclosed / recusals:
Frozen eligible voter count and evidence location:
Council roster and seat count at notice close:
Notice start / end (UTC):
Voting start / end (UTC):
Voting method and duplicate-vote safeguards:
Votes FOR / AGAINST / ABSTAIN:
Community turnout and quorum:
Council FOR / AGAINST / ABSTAIN / RECUSED:
Council threshold and quorum:
Independent tally verification by:
Engineering reviewer / approval link:
Independent oversight reviewer / approval link:
CI checks and PR link:
Final outcome and effective date:
Dissent and appeal route:
Post-change implementation evidence:
```

Never backfill fictitious votes or approvals. Leave fields explicitly pending or record a deferred decision when the necessary community does not yet exist.

## Adoption is a distinct, one-time event

The founder can publish this Charter proposal and recruit an inaugural council but **cannot truthfully call that democratic ratification**. The inaugural council requires three consenting humans, including two non-founders selected through the public onboarding process. Those three record independent acceptance following the required consultation, and the project publishes the inaugural roster and the date the Charter takes effect. Regular elected representation follows once enough eligible voting members exist.

## Scope and privacy

Keep personal contact details, volunteer records, passwords, security exploit details, and confidential partner information out of governance votes. Publish a redacted summary with relevant accountability information. Private communications alone are not a sufficient record of an ordinary governance decision.

## Technical enforcement limitation

GitHub rulesets protect merges and access, not the accuracy of a constitutional vote tally. An independent reviewer must inspect actual election records. Owner/admin privileges may still change settings outside the document's workflow; regularly audit role membership and GitHub rulesets, and publish any deviations. A project cannot claim power is perfectly constrained until it has both human separation and correctly configured technical controls.
