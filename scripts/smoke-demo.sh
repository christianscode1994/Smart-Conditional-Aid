mkdir -p scripts
cat > scripts/smoke-demo.sh <<'SH'
#!/usr/bin/env bash
set -euo pipefail

ROOT="$PWD"
PORT="${PORT:-3000}"
BASE_URL="http://localhost:${PORT}"
START_WAIT=4

echodo(){ echo "» $*"; "$@"; }

echodo npm ci
echodo npm run build

echodo npm run start & 
APP_PID=$!
trap 'echo "Stopping server"; kill $APP_PID 2>/dev/null || true' EXIT

echo "Waiting ${START_WAIT}s for server to start..."
sleep "${START_WAIT}"

pp() {
  if command -v jq >/dev/null 2>&1; then
    jq .
  else
    cat
  fi
}

echo "1) Health check"
if curl --fail -s "${BASE_URL}/" >/dev/null; then
  echo "Root responded"
else
  echo "Root did not respond, continuing to try API endpoints"
fi

echo "2) Create an offline claim (demo payload)"
CLAIM_RESP=$(curl -sS -X POST -H "Content-Type: application/json" \
  -d '{"demo":true,"amount":100,"recipient":"demo-user","meta":{"offline":true}}' \
  "${BASE_URL}/api/claim" || true)
echo "Claim response:"
printf '%s\n' "$CLAIM_RESP" | pp

echo "3) List stored claims"
LIST_RESP=$(curl -sS "${BASE_URL}/api/claims" || true)
printf '%s\n' "$LIST_RESP" | pp

echo "4) Trigger reconciliation"
RECON_RESP=$(curl -sS "${BASE_URL}/api/reconcile" || \
            curl -sS "${BASE_URL}/api/sync" || \
            echo '{"error":"no-reconcile-endpoint"}')
echo "Reconciliation response:"
printf '%s\n' "$RECON_RESP" | pp

echo "5) Final audit output (if available)"
AUDIT_RESP=$(curl -sS "${BASE_URL}/api/audit" || true)
printf '%s\n' "$AUDIT_RESP" | pp

echo "Smoke demo complete. Reconciliation JSON printed."
SH

chmod +x scripts/smoke-demo.sh
git add scripts/smoke-demo.sh
git commit -m "chore: add smoke-demo script for judges" || true
git push --set-upstream origin main || true
