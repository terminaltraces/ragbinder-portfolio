---
name: Catalog upgrade resolution
description: A pnpm catalog resolution pitfall when patching workspace dependencies
---

After changing a catalog range, verify the installed and lockfile versions rather
than assuming a successful install means the new version was selected.

**Why:** pnpm 10 accepted a changed catalog range while retaining the previous
resolved major version when updating unrelated transitive packages. A subsequent
install reported the lockfile as current despite that mismatch.

**How to apply:** Run an explicit recursive update targeting the catalog package,
then inspect its dependency tree and rerun the audit and compatibility checks.
