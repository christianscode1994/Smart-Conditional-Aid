import React from 'react';

export default function HeroCard() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:16, padding:16}}>
      <img src="/images/hero.png" alt="hero" style={{width:120, height:120, objectFit:'cover'}}/>
      <div>
        <h1>Smart Conditional Aid</h1>
        <p>Grant-as-code with offline claim, auditable reconciliation, demo-mode for low-connectivity contexts.</p>
      </div>
    </div>
  );
}
