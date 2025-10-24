import React, { useEffect, useState } from 'react';

export default function RedeemMobile({initialPayload}:{initialPayload?:string}) {
  const [payload, setPayload] = useState(initialPayload || '');
  const [message, setMessage] = useState('');

  async function handleRedeem() {
    try {
      const parsed = JSON.parse(payload);
      // Post to demo redeem endpoint (mocked client-side for prototype)
      const response = await fetch('/api/redeem', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ receipt: { ...parsed, redeemedAt: new Date().toISOString(), receiptId: `r-${Date.now()}` } })
      });
      const j = await response.json();
      setMessage(j.ok ? 'Redeemed (demo)' : `Error: ${j.error || 'unknown'}`);
    } catch (err:any) {
      setMessage('Invalid payload JSON');
    }
  }

  useEffect(()=>{ setMessage(''); },[payload]);

  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>Redeem (mobile/web)</h4>
      <textarea style={{width:360, height:120}} value={payload} onChange={e=>setPayload(e.target.value)} />
      <div style={{marginTop:8}}>
        <button onClick={handleRedeem}>Redeem</button>
      </div>
      {message && <div style={{marginTop:8}}>{message}</div>}
    </div>
  );
}
