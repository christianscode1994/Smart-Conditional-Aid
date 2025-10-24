// Minimal sync endpoint: accepts an array of redeemed receipts and returns reconciliation result
import { NextApiRequest, NextApiResponse } from 'next';
import { reconcileReceipts } from '../../lib/storage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { receipts } = req.body || {};
    if (!Array.isArray(receipts)) return res.status(400).json({ error: 'receipts array required' });

    const result = await reconcileReceipts(receipts);
    return res.status(200).json({ ok: true, result });
  } catch (err: any) {
    console.error('sync error', err);
    return res.status(500).json({ error: err?.message || 'internal' });
  }
}
