import React from 'react';

export default function ProvenanceTimeline({events}:{events:Array<{time:string;text:string}>}) {
  return (
    <div style={{padding:12}}>
      <h4>Provenance</h4>
      <ul>
        {events.map((e,i)=><li key={i}><strong>{new Date(e.time).toLocaleString()}</strong> — {e.text}</li>)}
      </ul>
    </div>
  );
}
