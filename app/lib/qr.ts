// helpers for QR encode/decode for prototype

export function encodePayload(payload: object): string {
  return btoa(JSON.stringify(payload));
}

export function decodePayload(q: string): object | null {
  try {
    const s = atob(q);
    return JSON.parse(s);
  } catch {
    return null;
  }
}
