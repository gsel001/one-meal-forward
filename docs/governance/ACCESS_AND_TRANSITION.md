# Roles, permissions, and adoption roadmap

> **Proposed governance; not a claim of existing appointments.** GitHub access and elected governance are different things.

## Verified current repository state (2026-11-19)

- Repository: `gsel001/one-meal-forward`, owned by the **personal GitHub user** `gsel001`, not a GitHub organization.
- `.github/CODEOWNERS` currently names only `@gsel001`.
- The active `main` ruleset requires one approving review, code-owner approval, the latest-push approval rule, resolved threads, strict up-to-date `test` status, and squash merges. It blocks deletion and non-fast-forward changes; the ruleset reported no configured bypass actors.
- A founder-authored PR cannot obtain approval from its own author. **No independent code owner has been appointed**, so a founder-authored governance or security PR may remain blocked until someone eligible joins.
- Repository ownership/admin rights still reside with the personal account. A README or Charter cannot technically stop that account from changing settings. A GitHub organization improves role separation but does not make organization owners incapable of changing rules.

Do not describe the proposed council, elections, enforceable amendment voting, or GitHub organization as already established.

## Map governance duties to least-privilege GitHub access

| Project role | Typical GitHub capability, when granted | Approval and constraints |
| --- | --- | --- |
| New volunteer / community member | Public read, issues, forks, discussions | No direct write by default; eligible voting membership is separate |
| Community moderator | Triage, where available | Can organize discussions/issues, not silently grant repository write/admin |
| Independent reviewer | Write plus explicit valid CODEOWNERS designation if serving as required code owner | Trial review first; cannot self-approve or bypass tests |
| Engineering maintainer | Maintain or narrowly scoped write, only after track record and council decision | Merges only after proper independent review and CI; not automatically an org owner |
| Security/ethics steward | Access only to security information needed and appropriate triage/manager role | Must not be sole author, approver, and deployer for sensitive changes |
| Elected council representative | No extra code permissions merely from being elected | Sets policy via recorded vote, not by pushing code |
| Organization administrator/custodian | Admin/organization owner only when essential | Two or more trusted people for continuity; security controls and public audit record; no unilateral constitutional power under the Charter |

These are target assignments, not existing grants. Repository teams, security-manager roles, and multiple organization owners require an appropriate GitHub organization and supported plan/features.

## Safe bootstrap from one founder to independent review

1. Publish a call for experienced volunteer reviewers. Require consent, a visible track record, and a **trial public technical review without write access**. Do not treat a Discord message or AI-produced review as an authorized code-owner approval.
2. Identify one suitable, consenting human. Provide only the minimum GitHub access needed for formal reviews. Before an access grant, document why, the scope, a revocation plan, and that they are not becoming an owner or admin.
3. Ask the new reviewer to author a **focused CODEOWNERS PR** adding their exact GitHub username alongside `@gsel001` for appropriate files. On the current ruleset, the founder can independently review a candidate-authored PR. Do not attempt to have the founder approve the founder's own changes.
4. After that CODEOWNERS update is independently reviewed and merged, test the intended workflow on a harmless PR: verify that the qualified non-author reviewer can formally approve the founder's PR while CI and last-push protections remain active.
5. Recruit a second independent qualified person for policy/safety oversight. Collect explicit role acceptance. Announce the proposed three-person inaugural council, invite public feedback for at least seven days, and publish the nomination/selection record. This does **not** automatically ratify the Charter.
6. Hold the inaugural adoption process and document the three sign-offs. Then open formal member registration and schedule an eligible-voter election. Do not treat founder nominations as a completed democratic election.

Until enough qualified people are present, **keep the existing protection rather than weakening approval requirements or inventing votes**. This may delay releases; report that limitation.

## Planned migration to a GitHub organization

Only after a separate decision and explicit approval from the repository owner:

- Create a GitHub organization with a mission-appropriate name, public description, security policy, and required 2FA for members as supported.
- Establish teams such as `engineering-reviewers`, `maintainers`, `governance-oversight`, and `community-moderators`. Assign permissions based on function, not seniority or social reputation.
- Select at least two highly trusted organization owners for continuity, and ideally a third for recovery; **do not make every council member an organization owner**. Require secure authentication and documented emergency credential recovery.
- Document ownership of domain names, websites, financial accounts, and any other assets; a repository transfer does not transfer those assets or create a nonprofit.
- Plan and review a repository transfer, including GitHub Pages URLs, links, integrations, permissions, secrets, and community communications. **Do not transfer or rename the current repository without explicit authorization.**
- Recreate and verify an organization-owned CODEOWNERS file, reviewer teams, and organization/repository rulesets. Confirm actual ruleset enforcement in GitHub after migration.

## Technical safeguards for constitutional files

After there are enough independent authorized reviewers, configure applicable branch/ruleset protections for these sensitive files:

- `GOVERNANCE.md`
- `docs/governance/**`
- `.github/CODEOWNERS`
- relevant workflows, permission policies, and branch/ruleset configuration

Require public PRs, passing status checks, no bypass for ordinary maintainers, resolved threads, fresh approval after pushes, and **at least two independent non-author approvals** for constitutional changes. Where GitHub's supported required-team-reviewer features permit, require separate engineering and governance-oversight reviewer teams.

**Do not assume CODEOWNERS alone requires every named owner to approve.** GitHub's code-owner approval is satisfied by an appropriate owner; adding two names to a line does not itself create a two-signature rule. GitHub also cannot intrinsically count an off-platform community vote just because a Markdown document demands one. A documented recorded vote must be checked by independent humans, and technical protections should be tested on a sample PR.

Do not raise the global required review count to two while the repository has fewer than two eligible, non-author reviewers: that can prevent all merges. Harden those settings when the team can actually satisfy them, without removing existing protections in the interim.

## Rollout and verification checklist

- [ ] At least one independent trial code review received
- [ ] Consenting candidate identified and scope of access recorded
- [ ] Candidate-authored CODEOWNERS PR independently approved and merged
- [ ] Founder-authored test PR successfully receives non-author code-owner approval
- [ ] Second independent steward recruited and conflicts recorded
- [ ] Three-person inaugural council seats publicly accepted (not merely nominated)
- [ ] Adoption consultation and independent sign-offs publicly recorded
- [ ] Voting-member registry and secure voting method established
- [ ] First election completed with actual quorum and tally record
- [ ] Constitutional amendment protections tested in GitHub
- [ ] Organization migration separately authorized and verified, if desired
- [ ] All privileged access reviewed at least quarterly

See [the proposed Charter](CHARTER.md) and [decision records](DECISION_PROCESS.md).
