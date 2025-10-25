// app/lib/chainMock.ts
export type ChainReceipt = { txHash: string; voucherId?: string };

export async function sendVoucherToChain(voucher: any): Promise<ChainReceipt> {
  // demo-only deterministic-ish txHash for reproducible testing
  const rand = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');
  return { txHash: `0x${rand}`, voucherId: voucher?.id };
}

export async function checkOnChainVoucher(id: string): Promise<null | ChainReceipt> {
  // demo: always return null (not on chain)
  return null;
}
