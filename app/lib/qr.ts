// app/lib/qrPayload.ts
export function encodePayload(payload: object): string {
  const json = JSON.stringify(payload);
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return window.btoa(json);
  }
  return Buffer.from(json, 'utf8').toString('base64');
}

export function decodePayload(q: string): object | null {
  try {
    const str = (typeof window !== 'undefined' && typeof window.atob === 'function')
      ? window.atob(q)
      : Buffer.from(q, 'base64').toString('utf8');
    return JSON.parse(str);
  } catch {
    return null;
  }
}
