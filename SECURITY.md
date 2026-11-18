# Security policy

The latest main branch is supported. This is a static site with no server, user accounts, database, or donation processing. Do not submit credentials, personal data, or exploitable vulnerability details in a public issue.

Use [GitHub private vulnerability reporting](https://github.com/gsel001/one-meal-forward/security/advisories/new). If that feature is unavailable, use GitHub's private abuse/security reporting routes or a contact explicitly published on [the maintainer's profile](https://github.com/gsel001); do not guess an email address. Include affected files, reproduction steps with synthetic data, impact, and suggested mitigations. Never test against third-party organizations or real beneficiaries.

The maintainer aims to acknowledge reports within seven days and discuss a remedy, but volunteer availability may delay a response. Coordinate publication after a fix. Exposed credentials require immediate revocation by their owner; removing a file is insufficient.

CI executes pull-request code without secrets or write permissions. Only a successful trusted main-branch run may deploy. Actions are pinned by full commit SHA. Dependabot proposes npm and Action updates. Dependency review and `npm audit` complement human license and source review; they do not prove absence of vulnerabilities. See docs/operations.md for residual limitations.
