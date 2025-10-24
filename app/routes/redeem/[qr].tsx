import React from 'react';
import RedeemMobile from '../../components/RedeemMobile';

type Props = {
  params: { qr: string };
};

export default function Page({ params }: Props) {
  let payload = '';
  try {
    payload = atob(decodeURIComponent(params.qr));
  } catch {
    payload = '';
  }
  return (
    <div style={{padding:20}}>
      <h2>Redeem</h2>
      <p>Paste the voucher payload (or scan QR in real client)</p>
      <RedeemMobile initialPayload={payload} />
    </div>
  );
}
