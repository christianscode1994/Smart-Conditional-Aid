// Minimal sanity test: ensures node can import storage and reconcile a mock receipt
const path = require('path');

(async function(){
  try {
    const storage = require('../app/lib/storage');
    const demo = require('../app/demo/demoSeed.json');
    await storage.seedFromDemo(demo);
    const issued = await storage.listIssued();
    if (!Array.isArray(issued)) throw new Error('issued not array');
    const mockReceipt = { receiptId: 'r-1', id: issued[0]?.id, nonce: issued[0]?.nonce };
    const res = await storage.reconcileReceipts([mockReceipt]);
    console.log('Sanity OK', res);
    process.exit(0);
  } catch (e) {
    console.error('Sanity failed', e);
    process.exit(1);
  }
})();
