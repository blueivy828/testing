#!/bin/bash

echo "🚀 Testing CI Pipeline locally..."
echo "=================================="
echo ""

docker run --rm \
  -v $(pwd):/workspace \
  -w /workspace \
  node:20 bash -c "
    set -e  # Exit on any error
    
    echo '📦 Step 1: Checkout code'
    echo '✅ Code already mounted'
    echo ''
    
    echo '📦 Step 2: Install pnpm'
    npm install -g pnpm@9
    echo ''
    
    echo '📦 Step 3: Setup Node.js'
    node --version
    npm --version
    pnpm --version
    echo ''
    
    echo '📦 Step 4: Install dependencies'
    pnpm install --frozen-lockfile
    echo ''
    
    echo '📦 Step 5: Lint & Type Check'
    pnpm run lint
    pnpm run type-check
    echo ''
    
    echo '📦 Step 6: Build application'
    pnpm run build
    echo ''
    
    echo '=================================='
    echo '✅ All CI steps completed successfully!'
    echo '=================================='
  "