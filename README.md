# Smart Conditional Aid (SCAid) - Prototype

Smart Conditional Aid — grant-as-code with offline claim, auditable reconciliation, demo-mode for low-connectivity contexts.

Quick start
1. Copy example env and edit only if needed cp .env.example .env.local

2. Install and build npm ci npm run predeploy npm run build

3. Start and verify locally npm start Visit http://localhost:3000

4. Run the automated smoke demo (prints reconciliation JSON) ./scripts/smoke-demo.sh

5. Optional different port PORT=4000 ./scripts/smoke-demo.sh

This repo is a prototype for hackathon judging and demonstration purposes only. See SECURITY.md and AI_USAGE.md for notes.
