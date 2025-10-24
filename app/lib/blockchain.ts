// Prototype blockchain helpers (mock)
// In a real implementation these would interact with ethers.js / provider
export async function sendVoucherToChain(voucher: any) {
  // demo-only: pretend we wrote an on-chain receipt
  return { txHash: `0x${Math.random().toString(16).slice(2,10)}`, voucherId: voucher.id };
}

export async function checkOnChainVoucher(id: string) {
  // demo: always return not-on-chain
  return null;
}
