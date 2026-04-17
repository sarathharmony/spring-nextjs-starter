#!/usr/bin/env bash
# Idempotent setup script. DevLay runs this from POST /api/run-setup.
set -euo pipefail
root="$(cd "$(dirname "$0")" && pwd)"
cd "$root"

if command -v pnpm >/dev/null 2>&1; then
  pnpm install --frozen-lockfile=false
elif command -v npm >/dev/null 2>&1; then
  npm install
fi

# Prime the Maven cache so the first `mvn spring-boot:run` doesn't hang on
# a cold download. Safe to re-run; Maven is idempotent.
cd "$root/packages/backend"
mvn -q -DskipTests dependency:resolve package
