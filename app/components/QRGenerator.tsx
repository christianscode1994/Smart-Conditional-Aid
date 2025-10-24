import React from 'react';

export default function QRGenerator({ payload }:{payload:string}) {
  // For prototype we render the payload and a data URI link for mobile redeemers
  const encoded = encodeURIComponent(payload);
  const dataUrl = `data:text/plain;charset=utf-8,${encoded}`;

  return (
    <div>
      <textarea readOnly style={{width:420, height:120}} value={payload} />
      <div style={{marginTop:8}}>
        <a href={`/redeem/${encodeURIComponent(btoa(payload))}`}>Open redeem route (web)</a>
      </div>
      <div style={{marginTop:8}}>
        <a href={dataUrl} download="voucher.txt">Download payload</a>
      </div>
    </div>
  );
}
