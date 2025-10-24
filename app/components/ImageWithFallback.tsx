import React from 'react';

export default function ImageWithFallback({ src, alt, width, height }: { src: string; alt?: string; width?: number; height?: number; }) {
  const [err, setErr] = React.useState(false);
  if (err) {
    return (
      <div style={{
        width: width || 420,
        height: height || 240,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed #e2e8f0',
        borderRadius: 8,
        background: 'linear-gradient(#f8fafc,#eef6ff)'
      }}>
        <div style={{textAlign:'center', color:'#475569', fontFamily:'Inter, Arial, sans-serif'}}>
          <div style={{fontSize:16, fontWeight:600}}>Flow diagram</div>
          <div style={{fontSize:12, marginTop:6}}>Placeholder (image failed to load)</div>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt || 'flow diagram'} width={width} height={height} onError={() => setErr(true)} style={{borderRadius:8}} />;
}
