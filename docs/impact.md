# Evidence before impact

`site/data/impact.json` is a public review ledger. At launch it is empty. Initial setup, issue creation, visits, stars, open requests, and closed issues are not counted as completed community contributions.

Each future record needs a unique ID, a concise description, `status: reviewed`, reviewer, review date, and public evidence URL (normally an accepted pull request). Count each accepted contribution once. Amend a record if evidence is withdrawn; do not double-count edits to it. Add ledger changes through reviewed pull requests, not browser submissions.

The site counts reviewed, evidence-linked contributions and currently verified organization missions separately. Neither metric measures hunger reduced. Do not convert volunteer hours, translations, or code into meals or people served. Organization-reported outcomes would require independently documented scope, method, date and attribution before any public claim.


## Required public ledger format

Each reviewed contribution must contain: a stable lower-case slug ID, non-empty
description, status 'reviewed', a named reviewer, an ISO UTC date 'reviewedAt',
and a public HTTPS 'evidence' link. The ledger requires a truthful 'asOf'
date and a human-readable note. Work pending review stays out of the public
ledger rather than being counted.

The production build rejects duplicate IDs, duplicate evidence links, malformed
dates, future review dates, unsafe links and unreviewed records. See
site/impact.js and tests/impact.test.js. This is a data-integrity check, **not**
independent verification that the external evidence is legitimate. Maintainers
must still inspect each contribution and ensure that work is counted once.
