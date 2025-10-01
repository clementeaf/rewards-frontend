# Rewards Frontend - Guía de Ejecución

## ✅ Dos formas de correr la aplicación

### 🖥️ Opción 1: Local (Recomendada para desarrollo)

**Inicio rápido:**
```bash
./start-local.sh
```

Este script automáticamente:
- Cambia a Node 10 usando nvm
- Instala dependencias si no existen
- Inicia el servidor en puerto 4203

**Acceso:** http://localhost:4203/msr-backoffice/web/

**Detener:** Presiona `Ctrl+C`

---

### 🐳 Opción 2: Docker (Recomendada para producción)

### Acceso
- **URL:** http://localhost:4203/msr-backoffice/web/
- **Puerto:** 4203

### Comandos Docker

**Iniciar el contenedor:**
```bash
docker start rewards-app
```

**Detener el contenedor:**
```bash
docker stop rewards-app
```

**Ver logs:**
```bash
docker logs rewards-app -f
```

**Reiniciar después de cambios en código:**
```bash
docker rm -f rewards-app
docker build -t rewards-frontend .
docker run -d -p 4203:4203 --name rewards-app rewards-frontend
```

## Sistema de Mocks Implementado

La aplicación tiene **fallback automático a datos mock** cuando el backend no está disponible:

### Archivos clave:
- `app/services/mock-data-service.js` - Datos mockeados para todas las entidades
- `app/services/requester.js` - Detecta errores de backend y usa mocks automáticamente
- `config/environment.js` - `enableMockFallback: true`

### Datos mockeados disponibles:
- Miembros
- Tarjetas
- Operaciones
- Usuario logueado (con todos los permisos)
- Configuración
- Solicitudes
- Vouchers
- Cuentas

Cuando el backend falla (ej: 404, 500, conexión rechazada), verás en console:
```
Backend no disponible, usando datos mock para: <ruta>
```

## Notas
- El proyecto usa **Ember CLI 2.8** (2016)
- Requiere **Node 10** (configurado en Docker)
- El sistema de permisos está bypassed en desarrollo (`usuario-actual-service.js:229`)