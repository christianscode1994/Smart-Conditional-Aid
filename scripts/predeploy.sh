#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');

try {
  // Put your predeploy actions here.
  // Example: ensure demo seed file exists
  // execSync('node ./scripts/seed-demo.js', { stdio: 'inherit' });

  console.log('predeploy: ok');
  process.exit(0);
} catch (err) {
  console.error('predeploy failed', err);
  process.exit(1);
}
