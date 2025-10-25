// app/lib/storage.ts
export type Voucher = { id?: string; nonce?: string; [k: string]: any; };
export type Receipt = { receiptId?: string; id?: string; nonce?: string; [k: string]: any; };

let issued: Voucher[] = [];
let redeemed: Receipt[] = [];

export async function seedFromDemo(data: { issued?: Voucher[]; redeemed?: Receipt[] }) {
  issued = [...(data?.issued || [])];
  redeemed = [...(data?.redeemed || [])];
  return { issued, redeemed };
}

export async function storeIssued(voucher: Voucher) { issued.push(voucher); return voucher; }
export async function storeRedeemed(receipt: Receipt) { redeemed.push(receipt); return receipt; }
export async function listIssued(): Promise<Voucher[]> { return issued; }
export async function listRedeemed(): Promise<Receipt[]> { return redeemed; }

export async function reconcileReceipts(receipts: Receipt[]) {
  const matches = receipts.map(r => {
    const match = issued.find(v => v.nonce === r.nonce || v.id === r.id);
    return { receiptId: r.receiptId ?? null, voucherId: match?.id ?? null, matched: !!match };
  });
  return { totalReceipts: receipts.length, matches };
}

export async function clearStorage() {
  issued = [];
  redeemed = [];
}
