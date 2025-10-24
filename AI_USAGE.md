AI_USAGE
Purpose
Provide a short, clear record of automated or templated assistance used to create repository content and give reviewers simple guidance for reproduction and verification.

Provenance statement
This repository contains scaffolded and templated artifacts created to accelerate development. Human contributors reviewed and adapted all committed content before inclusion. The project is a prototype and intended for demonstration and evaluation purposes only.

What to review
Verify build and runtime commands in package.json before running.

Inspect any code that handles signing, keys, authentication, or cryptography with extra care.

Treat example or scaffolded code as illustrative and not production-ready until reviewed and tested.

Reproduction notes
Follow README quick start, create a local .env from .env.example, run predeploy/seed scripts, then build and start the app.

Keep any reproducibility artifacts (templates, scripts) in a tools/ or .ai/ folder if needed.

Human review policy
All templated or automated content must be human-reviewed before being used in production.

Add a short header to files substantially derived from templates, for example: “Template-assisted — reviewed by @<github-username> on YYYY-MM-DD.”

Attribution
Use the repository LICENSE for licensing details. Contributors are responsible for ensuring that any incorporated third-party templates or snippets comply with the chosen license.

Notice about prototype status
This repository is a prototype for demonstration and hackathon submission purposes. It is not hardened for production use and may contain simplifications or placeholders that require replacement for real deployments.
