// Seed demo data into in-memory storage by calling a serverless seed if available.
// For simplicity in prototype we will POST to a /api/seed endpoint if it exists,
// otherwise this script exits gracefully.

const fs = require('fs');
const path = require('path');

(async function(){
  try {
    const demoPath = path.join(__dirname, '..', 'app', 'demo', 'demoSeed.json');
    const demo = JSON.parse(fs.readFileSync(demoPath,'utf8'));
    // Attempt to POST to server if running (not required for local file-seeded demo)
    // This script is intentionally tolerant
    console.log('Demo seed loaded locally:', demo.issued.length, 'issued items');
  } catch (e) {
    console.error('seed-demo.js error', e.message);
    process.exit(0);
  }
})();
