#!/usr/bin/env bash
set -e
echo "Running predeploy (prototype) steps..."
# Place any seeding or build-time tasks here
node ./scripts/seed-demo.js || true
echo "Predeploy complete."
