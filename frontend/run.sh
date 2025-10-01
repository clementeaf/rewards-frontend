#!/bin/bash
cd /Users/clementefalcone/Desktop/witi/rewards-frontend/frontend
export NVM_DIR="$HOME/.nvm"
source /opt/homebrew/opt/nvm/nvm.sh
nvm use 10
npm install
npx ember serve --port 4203 --environment=development