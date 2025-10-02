# Arquitectura de Servicios - BFF

Este documento describe la capa de servicios del BFF (Backend For Frontend).

## Estructura

```
com.rewardsfrontend.service/
├── BaseProxyService.java          # Servicio base con métodos proxy
├── LoginService.java               # Autenticación (ya existente)
├── MiembrosService.java           # Gestión de miembros
├── CuentasService.java            # Gestión de cuentas
├── TarjetasService.java           # Gestión de tarjetas
├── OperacionesService.java        # Auditoría de operaciones
├── SegmentosDeMiembrosService.java # Segmentos de clientes
├── BeneficiosService.java         # Beneficios y reglas
├── ConfiguracionService.java      # Configuraciones del sistema
└── RecursosGeneralesService.java  # Recursos CRUD genéricos
```

---

## BaseProxyService

Servicio base que proporciona métodos para hacer proxy de requests al backend externo.

### Características:

- **URL Base:** `http://localhost:9333/msr-backoffice/api/`
- **Gestión de sesión:** Propaga la cookie `JSESSIONID` del backend externo
- **Manejo de errores:** Captura y transforma excepciones en respuestas HTTP
- **Métodos disponibles:**
  - `proxyGet(endpoint, responseType, session)`
  - `proxyPost(endpoint, body, responseType, session)`
  - `proxyPut(endpoint, body, responseType, session)`
  - `proxyDelete(endpoint, responseType, session)`

### Ejemplo de uso:

```java
@Service
public class MiembrosService extends BaseProxyService {
    public ResponseEntity<Map> buscarMiembros(Map<String, Object> filtro, HttpSession session) {
        return proxyPost("miembros", filtro, Map.class, session);
    }
}
```

---

## Servicios Implementados

### 1. LoginService
**Propósito:** Autenticación con el backend externo

**Métodos:**
- `authenticate(username, password)` - Autenticar usuario y obtener JSESSIONID

---

### 2. MiembrosService
**Propósito:** Gestión de miembros del programa de lealtad

**Métodos:**
- `buscarMiembros(filtro, session)` - Búsqueda paginada
- `getMiembroParaEditar(id, session)` - Obtener para edición
- `actualizarMiembro(id, miembro, session)` - Actualizar datos
- `altaTarjeta(id, data, session)` - Dar de alta tarjeta
- `actualizarSaldosConVL(id, session)` - Sincronizar con ValueLink
- `reporteDeBeneficios(id, session)` - Reporte de beneficios
- `informacionDeAuditoria(id, session)` - Info de auditoría
- `eliminarMiembro(id, body, session)` - Eliminar del programa

---

### 3. CuentasService
**Propósito:** Gestión de cuentas de usuario

**Métodos:**
- `buscarCuentas(filtro, session)` - Búsqueda de cuentas
- `actualizarEmail(id, data, session)` - Cambiar email
- `actualizarPassword(id, data, session)` - Cambiar contraseña
- `verificarCuenta(id, session)` - Verificar cuenta

---

### 4. TarjetasService
**Propósito:** Gestión de tarjetas de regalo/lealtad

**Métodos:**
- `buscarTarjetas(filtro, session)` - Búsqueda de tarjetas
- `getTarjeta(id, session)` - Obtener tarjeta
- `getTarjetaParaEditar(id, session)` - Para edición
- `getInfoParaRecarga(id, session)` - Info de recarga
- `actualizarTarjeta(id, tarjeta, session)` - Actualizar
- `recargarTarjeta(id, recarga, session)` - Recargar saldo
- `crearTarjeta(tarjeta, session)` - Crear nueva
- `eliminarTarjeta(id, session)` - Eliminar

---

### 5. OperacionesService
**Propósito:** Auditoría de operaciones del sistema

**Métodos:**
- `operacionesRecientes(filtro, session)` - Operaciones recientes
- `buscarOperaciones(filtro, session)` - Búsqueda avanzada
- `detalleOperacion(id, session)` - Detalle completo
- `operacionesPorMiembro(id, session)` - Operaciones de un miembro

---

### 6. SegmentosDeMiembrosService
**Propósito:** Gestión de segmentos de clientes

**Métodos:**
- `listarSegmentos(session)` - Listar todos
- `listarSegmentosConDetalle(session)` - Con información completa
- `detalleSegmento(id, session)` - Detalle de un segmento
- `getSegmento(id, session)` - Obtener segmento
- `buscarMiembros(busqueda, session)` - Buscar miembros
- `miembrosAsociados(busqueda, session)` - Miembros del segmento
- `agregarMiembro(id, miembroId, session)` - Agregar uno
- `quitarMiembro(id, miembroId, session)` - Quitar uno
- `agregarMultiplesMiembros(id, miembrosIds, session)` - Agregar varios
- `eliminarMultiplesMiembros(id, miembrosIds, session)` - Quitar varios
- `actualizarSegmento(id, segmento, session)` - Actualizar
- `crearSegmento(segmento, session)` - Crear nuevo
- `eliminarSegmento(id, session)` - Eliminar

---

### 7. BeneficiosService
**Propósito:** Gestión de beneficios y reglas de promociones

**Métodos:**
- `resumenBeneficios(session)` - Resumen general
- `informacionDelPrograma(session)` - Info del programa
- `reglasDeNivel(session)` - Reglas por nivel
- `reglasDePromociones(session)` - Reglas de promociones
- `detalleRegla(id, session)` - Detalle de una regla
- `reglaParaEditar(id, session)` - Para edición
- `actualizarRegla(id, regla, session)` - Actualizar
- `eliminarRegla(id, session)` - Eliminar
- `crearRegla(regla, session)` - Crear nueva
- `crearVoucherParaMiembros(voucher, session)` - Vouchers para miembros
- `crearVoucherParaSegmentos(voucher, session)` - Vouchers para segmentos

---

### 8. ConfiguracionService
**Propósito:** Configuraciones del sistema

**Métodos:**
- `getConfiguraciones(session)` - Configuración general
- `getVersionMinimaPOS(session)` - Versión mínima del POS
- `updateVersionMinimaPOS(config, session)` - Actualizar versión POS
- `getBeneficioBebidaGratis(session)` - Config bebida gratis
- `updateBeneficioBebidaGratis(config, session)` - Actualizar bebida gratis
- `getContratoDefault(session)` - Contrato por defecto
- `getContratoPoliticamenteExpuesto(session)` - Contrato PEP
- `updateContrato(config, session)` - Actualizar contrato
- `getControlDeFraude(session)` - Config control de fraude
- `getLimiteDeMontoPorTarjeta(session)` - Límites de tarjeta
- `getConfiguracionStars(session)` - Config de puntos
- `getVencimientoDeSaldo(session)` - Vencimiento de saldo
- `getRelojDelSistema(session)` - Hora del sistema
- `getTotalesDeControl(session)` - Totales de control

---

### 9. RecursosGeneralesService
**Propósito:** CRUD genérico para múltiples recursos

**Recursos gestionados:**
- **Tiendas:** listar, get, crear, actualizar, eliminar
- **Roles:** listar, get, crear, actualizar, eliminar
- **Permisos:** listar, get, crear, actualizar, eliminar
- **Grupos de credenciales:** listar, get, crear, actualizar, eliminar
- **Items Micros:** listar, get, crear, actualizar, eliminar
- **Redimibles:** listar, get, crear, actualizar, eliminar
- **Combos:** getCombos(action)
- **Errores:** listar, get (solo lectura)

---

## Flujo de Request

```
Frontend (Ember)
    ↓ fetch('/msr-backoffice/api/miembros')
Controller (MiembrosController)
    ↓ miembrosService.buscarMiembros(filtro, session)
Service (MiembrosService)
    ↓ BaseProxyService.proxyPost("miembros", filtro, Map.class, session)
BaseProxyService
    ↓ Agrega Cookie JSESSIONID del backend
    ↓ RestTemplate.exchange(...)
Backend Externo (localhost:9333)
    ↓ Procesa request
    ↓ Responde JSON
BaseProxyService
    ↓ Maneja respuesta/errores
Service
    ↓ Retorna ResponseEntity
Controller
    ↓ Retorna respuesta al frontend
Frontend
    ✓ Recibe datos
```

---

## Gestión de Sesiones

### Cookie JSESSIONID

1. **Login:**
   - Usuario hace login en `/msr-backoffice/web/login`
   - `LoginService` autentica contra el backend externo
   - Backend externo responde con `Set-Cookie: JSESSIONID=...`
   - BFF guarda la cookie en `HttpSession.setAttribute("backendSessionCookie", cookie)`

2. **Requests subsiguientes:**
   - Frontend hace request a `/msr-backoffice/api/...`
   - Controller llama a Service pasando `HttpSession`
   - Service llama a `BaseProxyService` con la sesión
   - `BaseProxyService` recupera la cookie del backend de la sesión
   - Agrega header `Cookie: JSESSIONID=...` al request al backend
   - Backend externo valida la sesión

3. **Expiración:**
   - Si la sesión expira en el backend externo, retorna error
   - `SessionInterceptor` detecta falta de sesión
   - Redirige al usuario a `/msr-backoffice/web/login`

---

## Próximos Pasos

1. **Actualizar Controladores:** Modificar controladores para usar servicios en lugar de mocks
2. **Manejo de Errores:** Implementar respuestas de error consistentes
3. **Logging:** Agregar logs detallados para debugging
4. **Testing:** Crear tests unitarios para servicios
5. **Completar servicios pendientes:** Mailing, Stars, Profiling, etc.

---

**Última actualización:** 2025-10-02
