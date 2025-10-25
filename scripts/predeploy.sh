#!/usr/bin/env bash
set -e
echo "Running predeploy (prototype) steps..."

# Only run demo seeding in demo mode
if [ "${FORCE_DEMO_MODE:-false}" = "true" ]; then
  echo "FORCE_DEMO_MODE=true — running demo seed (non-fatal)"
  node ./scripts/seed-demo.js || echo "seed-demo failed; continuing"
else
  echo "FORCE_DEMO_MODE not enabled — skipping demo seed"
fi

echo "Predeploy complete."
