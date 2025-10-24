import React from 'react';

export default function KPIBar({issued=5, redeemed=2}:{issued?:number; redeemed?:number}) {
  return (
    <div style={{display:'flex', gap:12, padding:12}}>
      <div style={{background:'#f5f5f5', padding:8, borderRadius:6}}>Issued: <strong>{issued}</strong></div>
      <div style={{background:'#f5f5f5', padding:8, borderRadius:6}}>Redeemed: <strong>{redeemed}</strong></div>
    </div>
  );
}
