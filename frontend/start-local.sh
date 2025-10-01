#!/bin/bash

# Script para correr la app localmente sin Docker
# usando Node 10 via nvm

cd "$(dirname "$0")"

echo "🚀 Iniciando Rewards Frontend localmente..."
echo ""

# Cargar nvm
export NVM_DIR="$HOME/.nvm"
if [ -s "/opt/homebrew/opt/nvm/nvm.sh" ]; then
  source "/opt/homebrew/opt/nvm/nvm.sh"
elif [ -s "$NVM_DIR/nvm.sh" ]; then
  source "$NVM_DIR/nvm.sh"
fi

# Usar Node 10
echo "📦 Cambiando a Node 10..."
nvm use 10

# Verificar versión
echo "✓ Node version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Verificar si existen node_modules
if [ ! -d "node_modules" ]; then
  echo "📥 Instalando dependencias de npm..."
  npm install --no-optional
  echo ""
  echo "📥 Instalando dependencias de bower..."
  npx bower install
  echo ""
fi

# Iniciar servidor
echo "🌐 Iniciando servidor en http://localhost:4203/msr-backoffice/web/"
echo "   Presiona Ctrl+C para detener"
echo ""
npm start