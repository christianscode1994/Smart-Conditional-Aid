import { NextResponse } from 'next/server';
import { reconcileReceipts } from '../../lib/storage';



export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const receipts = body?.receipts;
    if (!Array.isArray(receipts)) {
      return NextResponse.json({ error: 'receipts array required' }, { status: 400 });
    }
    const result = await reconcileReceipts(receipts);
    return NextResponse.json({ ok: true, result }, { status: 200 });
  } catch (err: any) {
    console.error('sync error', err);
    return NextResponse.json({ error: err?.message || 'internal' }, { status: 500 });
  }
}
