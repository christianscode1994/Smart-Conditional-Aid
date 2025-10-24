// Minimal in-memory storage for prototype
let issued: any[] = [];
let redeemed: any[] = [];

export async function seedFromDemo(data: {issued:any[], redeemed:any[]}) {
  issued = [...data.issued];
  redeemed = [...data.redeemed];
  return { issued, redeemed };
}

export async function storeIssued(voucher: any) {
  issued.push(voucher);
  return voucher;
}

export async function storeRedeemed(receipt: any) {
  redeemed.push(receipt);
  return receipt;
}

export async function listIssued() {
  return issued;
}

export async function listRedeemed() {
  return redeemed;
}

// Reconciliation: mark receipts that match issued vouchers by nonce/id
export async function reconcileReceipts(receipts: any[]) {
  const matches = receipts.map(r => {
    const match = issued.find(v => v.nonce === r.nonce || v.id === r.id);
    return { receiptId: r.receiptId || null, voucherId: match?.id || null, matched: !!match };
  });
  return { totalReceipts: receipts.length, matches };
}
