SECURITY
Purpose
Concise security guidance and a quick review checklist for judges and maintainers evaluating this hackathon prototype.

High-level statements
This project is a prototype and provided for demonstration and evaluation only. It is not a production system.

No secrets, private keys, or production credentials should be present in the repository; .env.example contains placeholders.

Quick review checklist for judges
Confirm .env.example is present and that no real secrets have been committed.

Run the provided sanity-test or CI check to verify the redeem → sync demo flow.

Inspect any testnet contract addresses or mocks in the README and confirm they are labeled as test or mock.

Key risk highlights and mitigations (prototype scope)
Signing key exposure: do not use repository-stored keys for production; use managed secret stores and KMS for real deployments.

Replay/double-claim risk: demo flows use one-time nonces and server-side reconciliation but must be reviewed before any production use.

Demo artifacts: seeded demo data and example keys are for testing only and must be replaced prior to production.

Secrets and deployment guidance
Use platform secret managers (GitHub Actions secrets, Vercel env vars) for runtime secrets.

Do not expose secrets in CI logs or committed files.

Incident handling (brief)
If a secret or vulnerability is found, rotate affected secrets immediately and document remediation in security/incidents/YYYY-MM-DD.md.

Open an issue tagged security and notify maintainers via the project’s GitHub contact.

Prototype and liability notice
The software in this repository is a prototype provided “as-is” for demonstration and hackathon purposes. It is not production-ready, and maintainers have not performed a full security audit. No guarantee, warranty, or liability is provided regarding fitness for any particular purpose. Use at your own risk. For any deployment beyond a demo or hackathon submission, obtain a formal security review and legal advice.

Limitations
This document is a concise overview intended for rapid review during judging and does not replace a formal security audit, compliance review, or legal counsel.
