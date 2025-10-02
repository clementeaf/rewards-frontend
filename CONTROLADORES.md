# Controladores Implementados

Este documento registra todos los controladores implementados en el BFF.

## Estado de Implementación

### ✅ Implementados (Mock)

Los siguientes controladores están implementados con datos mock:

#### 1. **ApiController** (`controller/ApiController.java`)
- `GET /msr-backoffice/api/usuarios/logueado` - Usuario actual
- `GET /msr-backoffice/api/about/heartbeat` - Heartbeat
- `GET /home` - Página principal

#### 2. **ConfiguracionController** (`controller/ConfiguracionController.java`)
Todos los endpoints de configuración:
- Configuración general
- Configuración POS
- Beneficio de bebida gratis
- Contratos
- Control de fraude
- Límite de monto por tarjeta
- Stars
- Vencimiento de saldo
- Reloj del sistema
- Totales de control

#### 3. **MiembrosController** (`controller/MiembrosController.java`)
- `POST /msr-backoffice/api/miembros` - Buscar miembros
- `GET /msr-backoffice/api/miembros/{id}/edit` - Miembro para editar
- `PUT /msr-backoffice/api/miembros/{id}` - Actualizar miembro
- `POST /msr-backoffice/api/miembros/{id}/alta-tarjeta` - Alta de tarjeta
- `POST /msr-backoffice/api/miembros/{id}/actualizar-saldos-con-vl` - Actualizar saldos
- `GET /msr-backoffice/api/miembros/{id}/reporte-de-beneficios-al-dia` - Reporte
- `GET /msr-backoffice/api/miembros/{id}/informacion-de-auditoria` - Auditoría
- `POST /msr-backoffice/api/miembros/{id}/eliminar-miembro-rewards` - Eliminar

#### 4. **CuentasController** (`controller/CuentasController.java`)
- `POST /msr-backoffice/api/cuentas` - Buscar cuentas
- `PUT /msr-backoffice/api/cuentas/{id}/email` - Actualizar email
- `PUT /msr-backoffice/api/cuentas/{id}/password` - Actualizar contraseña
- `POST /msr-backoffice/api/cuentas/{id}/verificar` - Verificar cuenta

#### 5. **OperacionesController** (`controller/OperacionesController.java`)
- `POST /msr-backoffice/api/operaciones/recientes` - Operaciones recientes
- `POST /msr-backoffice/api/operaciones` - Buscar operaciones
- `GET /msr-backoffice/api/operaciones/{id}` - Detalle operación
- `GET /msr-backoffice/api/operaciones/miembro/{id}` - Operaciones por miembro

#### 6. **TarjetasController** (`controller/TarjetasController.java`)
- `POST /msr-backoffice/api/tarjetas/find` - Buscar tarjetas
- `GET /msr-backoffice/api/tarjetas/{id}` - Obtener tarjeta
- `GET /msr-backoffice/api/tarjetas/{id}/edit` - Tarjeta para edición
- `GET /msr-backoffice/api/tarjetas/{id}/recargar` - Info para recarga
- `PUT /msr-backoffice/api/tarjetas/{id}` - Actualizar tarjeta
- `PUT /msr-backoffice/api/tarjetas/{id}/recargar` - Recargar tarjeta
- `POST /msr-backoffice/api/tarjetas` - Crear tarjeta
- `DELETE /msr-backoffice/api/tarjetas/{id}` - Eliminar tarjeta

#### 7. **SegmentosDeMiembrosController** (`controller/SegmentosDeMiembrosController.java`)
- `GET /msr-backoffice/api/segmentos-de-miembros` - Listar segmentos
- `GET /msr-backoffice/api/segmentos-de-miembros/listado-con-detalle` - Con detalle
- `GET /msr-backoffice/api/segmentos-de-miembros/{id}/detalle` - Detalle
- `GET /msr-backoffice/api/segmentos-de-miembros/{id}` - Obtener segmento
- `POST /msr-backoffice/api/segmentos-de-miembros/miembros` - Buscar miembros
- `POST /msr-backoffice/api/segmentos-de-miembros/miembros-asociados` - Miembros asociados
- `POST /msr-backoffice/api/segmentos-de-miembros/{id}/miembros/{miembroId}` - Agregar
- `DELETE /msr-backoffice/api/segmentos-de-miembros/{id}/miembros/{miembroId}` - Quitar
- `POST /msr-backoffice/api/segmentos-de-miembros/{id}/miembros/agregar` - Agregar múltiples
- `POST /msr-backoffice/api/segmentos-de-miembros/{id}/miembros/eliminar` - Eliminar múltiples
- `PUT /msr-backoffice/api/segmentos-de-miembros/{id}` - Actualizar
- `POST /msr-backoffice/api/segmentos-de-miembros` - Crear
- `DELETE /msr-backoffice/api/segmentos-de-miembros/{id}` - Eliminar

#### 8. **BeneficiosController** (`controller/BeneficiosController.java`)
- `GET /msr-backoffice/api/beneficios/resumen` - Resumen
- `GET /msr-backoffice/api/beneficios/informacion-del-programa` - Info programa
- `GET /msr-backoffice/api/beneficios/reglas-de-beneficio-de-nivel` - Reglas de nivel
- `GET /msr-backoffice/api/beneficios/reglas-de-promociones` - Promociones
- `GET /msr-backoffice/api/beneficios/reglas-de-beneficio/{id}` - Detalle regla
- `GET /msr-backoffice/api/beneficios/reglas-de-beneficio/{id}/editar` - Para editar
- `PUT /msr-backoffice/api/beneficios/reglas-de-beneficio/{id}` - Actualizar
- `DELETE /msr-backoffice/api/beneficios/reglas-de-beneficio/{id}` - Eliminar
- `POST /msr-backoffice/api/beneficios/reglas-de-beneficio` - Crear
- `POST /msr-backoffice/api/beneficios/voucher/miembros` - Vouchers miembros
- `POST /msr-backoffice/api/beneficios/voucher/segmentos` - Vouchers segmentos

#### 9. **SolicitudesController** (`controller/SolicitudesController.java`)
- `GET /msr-backoffice/api/solicitudes/{id}` - Obtener solicitud
- `POST /msr-backoffice/api/solicitudes` - Buscar solicitudes
- `PUT /msr-backoffice/api/solicitudes/aprobar` - Aprobar
- `PUT /msr-backoffice/api/solicitudes/{id}/postergar` - Postergar
- `PUT /msr-backoffice/api/solicitudes/{id}/reimprimir` - Reimprimir

#### 10. **AboutMonitoreoController** (`controller/AboutMonitoreoController.java`)
- `POST /msr-backoffice/api/about/ejecutar` - Ejecutar comando
- `GET /msr-backoffice/api/about/logs` - Listar logs
- `POST /msr-backoffice/api/about/logs` - Ajustar logs
- `POST /msr-backoffice/api/about/logs/spy/{logger}` - Espiar logger
- `DELETE /msr-backoffice/api/about/logs/spy/{logger}` - Dejar de espiar
- `GET /msr-backoffice/api/about/logs/spy` - Listar loggers espiados
- `GET /msr-backoffice/api/about/{action}` - Acción genérica

#### 11. **RecursosGeneralesController** (`controller/RecursosGeneralesController.java`)
Maneja múltiples recursos CRUD:
- **Tiendas:** GET, POST, PUT, DELETE
- **Roles:** GET, POST, PUT, DELETE
- **Permisos:** GET, POST, PUT, DELETE
- **Grupos de credenciales:** GET, POST, PUT, DELETE
- **Items Micros:** GET, POST, PUT, DELETE
- **Items Multiopción:** GET, POST, PUT, DELETE
- **Redimibles:** GET, POST, PUT, DELETE
- **Errores:** GET (solo lectura)
- **Combos:** GET

#### 12. **LoginController** (`controller/LoginController.java`)
- `GET /msr-backoffice/web/login` - Página de login
- `POST /msr-backoffice/web/login` - Autenticación

#### 13. **SessionInterceptor** (`interceptor/SessionInterceptor.java`)
Interceptor que protege todas las rutas excepto login y assets

---

## Pendientes de Implementar

Los siguientes endpoints aún no están implementados:

### Mailing
- `/msr-backoffice/api/mailing/*`

### Formularios de Alta
- `/msr-backoffice/api/formularios-de-alta/*`

### Mails Encolados
- `/msr-backoffice/api/mails-encolados/*`

### Stars
- `/msr-backoffice/api/stars/*`

### Transacciones
- `/msr-backoffice/api/transacciones/*`

### Reloj
- `/msr-backoffice/api/reloj/*`

### Customer Voice
- `/msr-backoffice/api/customer-voice/*`

### Ejecutor de Tareas
- `/msr-backoffice/api/ejecutor-de-tareas/*`

### Métricas
- `/msr-backoffice/api/metrics/*`

### Profiling
- `/msr-backoffice/api/profile/*`

### Monitoreo ValueLink
- `/msr-backoffice/api/congestion-vl/*`

### Otros
- `/msr-backoffice/api/cambio-masivo-claves`
- `/msr-backoffice/api/informacionParaAuditoria`
- `/msr-backoffice/api/items-micros-con-nivel/*`

---

## Próximos Pasos

1. **Convertir mocks a proxies:** Transformar los controladores mock en proxies que redirijan al backend externo
2. **Gestión de sesiones:** Propagar la cookie `JSESSIONID` del backend externo
3. **Manejo de errores:** Implementar respuestas de error consistentes
4. **Logging:** Agregar logs para debugging
5. **Testing:** Crear tests unitarios para los controladores

---

**Última actualización:** 2025-10-02
