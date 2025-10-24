'use client';
import React, { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import GrantForm from './components/GrantForm';
import KPIBar from './components/KPIBar';
import ProvenanceTimeline from './components/ProvenanceTimeline';
import { seedFromDemo, listIssued, listRedeemed } from './lib/storage';
import demoSeed from './demo/demoSeed.json';

export default function Home() {
  const [issued, setIssued] = useState<any[]>([]);
  const [redeemed, setRedeemed] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=> {
    async function init() {
      await seedFromDemo(demoSeed as any);
      const i = await listIssued();
      const r = await listRedeemed();
      setIssued(i);
      setRedeemed(r);
      setLoaded(true);
    }
    init();
  }, []);

  return (
    <main style={{padding:20}}>
      <HeroCard />
      <KPIBar issued={issued.length} redeemed={redeemed.length} />
      <div style={{display:'flex', gap:24, marginTop:16}}>
        <div style={{flex:1}}>
          <GrantForm />
        </div>
        <div style={{width:420}}>
          <ProvenanceTimeline events={[
            { time: new Date().toISOString(), text: 'Prototype seeded' }
          ]} />
        </div>
      </div>
      {!loaded && <div>Loading demo seed...</div>}
    </main>
  );
}
