import React, { useState } from 'react';
import QRGenerator from './QRGenerator';

export default function GrantForm() {
  const [amount, setAmount] = useState('10');
  const [beneficiary, setBeneficiary] = useState('');
  const [qrPayload, setQrPayload] = useState<string | null>(null);

  async function handleIssue(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      id: `v-${Date.now()}`,
      amount,
      beneficiary: beneficiary || `beneficiary-${Math.floor(Math.random()*1000)}`,
      issuedAt: new Date().toISOString(),
      nonce: Math.random().toString(36).slice(2, 10)
    };
    // In demo mode we sign locally (mock)
    const signed = { ...payload, signature: 'demo-signature' };
    setQrPayload(JSON.stringify(signed));
  }

  return (
    <div style={{border:'1px solid #eee', padding:16, borderRadius:8}}>
      <h3>Issue Grant</h3>
      <form onSubmit={handleIssue}>
        <div style={{marginBottom:8}}>
          <label>Amount</label><br/>
          <input value={amount} onChange={e=>setAmount(e.target.value)} />
        </div>
        <div style={{marginBottom:8}}>
          <label>Beneficiary (optional)</label><br/>
          <input value={beneficiary} onChange={e=>setBeneficiary(e.target.value)} />
        </div>
        <button type="submit">Generate QR</button>
      </form>

      {qrPayload && (
        <div style={{marginTop:16}}>
          <h4>QR (scan to redeem)</h4>
          <QRGenerator payload={qrPayload} />
        </div>
      )}
    </div>
  );
}
