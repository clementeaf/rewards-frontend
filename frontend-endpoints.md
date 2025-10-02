# Frontend API Endpoints

Este documento registra todos los endpoints que el frontend está intentando consumir.

**Base URL:** `/msr-backoffice/api/`

---

## 1. Autenticación y Usuario

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/usuarios/logueado` | `usuario-service.js:26` | Obtener usuario actual logueado |
| GET | `/msr-backoffice/api/usuarios/{id}/paraEdicion` | `usuario-service.js:71` | Obtener usuario para edición |
| GET | `/msr-backoffice/api/usuarios` | `single-to-resource-service.js:37` | Listar todos los usuarios |
| GET | `/msr-backoffice/api/usuarios/{id}` | `single-to-resource-service.js:48` | Obtener un usuario específico |
| POST | `/msr-backoffice/api/usuarios` | `single-to-resource-service.js:70` | Crear nuevo usuario |
| PUT | `/msr-backoffice/api/usuarios/{id}` | `single-to-resource-service.js:59` | Actualizar usuario |
| DELETE | `/msr-backoffice/api/usuarios/{id}` | `single-to-resource-service.js:80` | Eliminar usuario |

---

## 2. Heartbeat & Monitoreo

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/about/heartbeat` | `heartbeat-service.js:20` | Mantener sesión viva |
| POST | `/msr-backoffice/api/about/ejecutar/` | `about-service.js:28` | Ejecutar comando/script |
| GET | `/msr-backoffice/api/about/logs/` | `about-service.js:33` | Obtener logs del sistema |
| POST | `/msr-backoffice/api/about/logs/` | `about-service.js:38` | Ajustar configuración de logs |
| POST | `/msr-backoffice/api/about/logs/spy/{logger}` | `about-service.js:43` | Espiar un logger específico |
| DELETE | `/msr-backoffice/api/about/logs/spy/{logger}` | `about-service.js:47` | Dejar de espiar un logger |
| GET | `/msr-backoffice/api/about/logs/spy` | `about-service.js:51` | Listar loggers espiados |
| GET | `/msr-backoffice/api/about/{action}/` | `about-service.js:56` | Acción genérica de about |

---

## 3. Configuración General

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/configuracion` | `configuracion-service.js` | Configuración general |
| GET | `/msr-backoffice/api/configuracion/version-minima-pos` | `configuracion-service.js:14` | Versión mínima del POS |
| PUT | `/msr-backoffice/api/configuracion/version-minima-pos` | `configuracion-service.js:19` | Actualizar versión mínima POS |
| GET | `/msr-backoffice/api/configuracion/beneficio-de-bebida-gratis` | `configuracion-service.js:24` | Config bebida gratis |
| PUT | `/msr-backoffice/api/configuracion/beneficio-de-bebida-gratis` | `configuracion-service.js:29` | Actualizar config bebida gratis |

---

## 4. Configuración de Contrato

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/configuracion/contrato/default` | `configuracion-de-contrato-service.js` | Contrato por defecto |
| GET | `/msr-backoffice/api/configuracion/contrato/politicamente-expuesto` | `configuracion-de-contrato-service.js` | Contrato PEP |
| PUT | `/msr-backoffice/api/configuracion/contrato` | `configuracion-de-contrato-service.js` | Actualizar contrato |

---

## 5. Configuración de Control de Fraude

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/configuracion/control-de-fraude` | `configuracion-control-de-fraude-service.js` | Obtener config fraude |
| PUT | `/msr-backoffice/api/configuracion/control-de-fraude` | `configuracion-control-de-fraude-service.js` | Actualizar config fraude |

---

## 6. Configuración de Límite de Monto por Tarjeta

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/configuracion/limite-de-monto-por-tarjeta` | `configuracion-limite-de-monto-por-tarjeta-service.js` | Obtener límites de tarjeta |
| PUT | `/msr-backoffice/api/configuracion/limite-de-monto-por-tarjeta` | `configuracion-limite-de-monto-por-tarjeta-service.js` | Actualizar límites |

---

## 7. Configuración de Vencimiento de Saldo

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/configuracion/vencimiento-de-saldo` | `configuracion-vencimiento-de-saldo-service.js` | Obtener config vencimiento |
| PUT | `/msr-backoffice/api/configuracion/vencimiento-de-saldo` | `configuracion-vencimiento-de-saldo-service.js` | Actualizar vencimiento |

---

## 8. Configuración de Recargas Anuales

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/configuracion/recargas-anuales` | `configuracion-recargas-anuales-service.js` | Obtener config recargas |
| PUT | `/msr-backoffice/api/configuracion/recargas-anuales` | `configuracion-recargas-anuales-service.js` | Actualizar recargas |

---

## 9. Miembros (Usuarios del Programa)

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/miembros` | `miembros-service.js:21` | Buscar miembros (paginado/filtrado) |
| GET | `/msr-backoffice/api/miembros/{id}/edit` | `miembros-service.js:26` | Obtener miembro para editar |
| POST | `/msr-backoffice/api/miembros/{id}/alta-tarjeta` | `miembros-service.js:31` | Dar de alta tarjeta |
| PUT | `/msr-backoffice/api/miembros/{id}` | `miembros-service.js:36` | Actualizar miembro |
| POST | `/msr-backoffice/api/miembros/{id}/actualizar-saldos-con-vl` | `miembros-service.js:41` | Actualizar saldos con ValueLink |
| GET | `/msr-backoffice/api/miembros/{id}/reporte-de-beneficios-al-dia/` | `miembros-service.js:46` | Reporte de beneficios |
| GET | `/msr-backoffice/api/miembros/{id}/informacion-de-auditoria/` | `miembros-service.js:51` | Información de auditoría |
| POST | `/msr-backoffice/api/miembros/{id}/eliminar-miembro-rewards` | `miembros-service.js:63` | Eliminar miembro |

---

## 10. Cuentas

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/cuentas` | `cuentas-service.js:25` | Buscar cuentas (filtrado) |
| PUT | `/msr-backoffice/api/cuentas/{id}/email` | `cuentas-service.js:10` | Actualizar email |
| PUT | `/msr-backoffice/api/cuentas/{id}/password` | `cuentas-service.js:15` | Actualizar contraseña |
| POST | `/msr-backoffice/api/cuentas/{id}/verificar` | `cuentas-service.js:20` | Verificar cuenta |

---

## 11. Operaciones (Auditoría)

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/operaciones/recientes` | `operaciones-service.js:12` | Operaciones recientes |
| POST | `/msr-backoffice/api/operaciones` | `operaciones-service.js:17` | Buscar operaciones |
| GET | `/msr-backoffice/api/operaciones/{id}` | `operaciones-service.js:22` | Detalle de operación |
| GET | `/msr-backoffice/api/operaciones/miembro/{id}` | `operaciones-service.js:27` | Operaciones de un miembro |

---

## 12. Tarjetas

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/tarjetas/find` | `tarjetas-service.js:42` | Buscar tarjetas (filtrado) |
| GET | `/msr-backoffice/api/tarjetas/{id}` | `tarjetas-service.js` | Obtener tarjeta |
| GET | `/msr-backoffice/api/tarjetas/{id}/edit` | `tarjetas-service.js:25` | Tarjeta para edición |
| GET | `/msr-backoffice/api/tarjetas/{id}/recargar` | `tarjetas-service.js:20` | Info para recarga |
| PUT | `/msr-backoffice/api/tarjetas/{id}` | `tarjetas-service.js:31` | Actualizar tarjeta |
| PUT | `/msr-backoffice/api/tarjetas/{id}/recargar` | `tarjetas-service.js:37` | Recargar tarjeta |
| POST | `/msr-backoffice/api/tarjetas` | `single-to-resource-service.js` | Crear tarjeta |
| DELETE | `/msr-backoffice/api/tarjetas/{id}` | `single-to-resource-service.js` | Eliminar tarjeta |

---

## 13. Segmentos de Miembros

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/segmentos-de-miembros` | `segmentos-de-miembros-service.js:10` | Listar segmentos |
| GET | `/msr-backoffice/api/segmentos-de-miembros/listado-con-detalle` | `segmentos-de-miembros-service.js:15` | Segmentos con detalle |
| GET | `/msr-backoffice/api/segmentos-de-miembros/{id}/detalle` | `segmentos-de-miembros-service.js:20` | Detalle de segmento |
| GET | `/msr-backoffice/api/segmentos-de-miembros/{id}` | `segmentos-de-miembros-service.js:25` | Obtener segmento |
| POST | `/msr-backoffice/api/segmentos-de-miembros/miembros` | `segmentos-de-miembros-service.js:30` | Buscar miembros |
| POST | `/msr-backoffice/api/segmentos-de-miembros/miembros-asociados` | `segmentos-de-miembros-service.js:35` | Miembros asociados |
| POST | `/msr-backoffice/api/segmentos-de-miembros/{id}/miembros/{miembroId}` | `segmentos-de-miembros-service.js:40` | Agregar miembro |
| DELETE | `/msr-backoffice/api/segmentos-de-miembros/{id}/miembros/{miembroId}` | `segmentos-de-miembros-service.js:45` | Quitar miembro |
| POST | `/msr-backoffice/api/segmentos-de-miembros/{id}/miembros/agregar` | `segmentos-de-miembros-service.js:50` | Agregar múltiples |
| POST | `/msr-backoffice/api/segmentos-de-miembros/{id}/miembros/eliminar` | `segmentos-de-miembros-service.js:65` | Eliminar múltiples |
| PUT | `/msr-backoffice/api/segmentos-de-miembros/{id}` | `segmentos-de-miembros-service.js:70` | Actualizar segmento |
| POST | `/msr-backoffice/api/segmentos-de-miembros` | `segmentos-de-miembros-service.js:75` | Crear segmento |
| DELETE | `/msr-backoffice/api/segmentos-de-miembros/{id}` | `segmentos-de-miembros-service.js:80` | Eliminar segmento |

---

## 14. Beneficios y Reglas

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/beneficios/resumen` | `reglas-service.js:7` | Resumen de beneficios |
| GET | `/msr-backoffice/api/beneficios/informacion-del-programa` | `reglas-service.js:12` | Info del programa |
| GET | `/msr-backoffice/api/beneficios/reglas-de-beneficio-de-nivel` | `reglas-service.js:25` | Reglas de nivel |
| GET | `/msr-backoffice/api/beneficios/reglas-de-promociones` | `reglas-service.js:30` | Reglas de promociones |
| GET | `/msr-backoffice/api/beneficios/reglas-de-beneficio/{id}` | `reglas-service.js:35` | Detalle de regla |
| GET | `/msr-backoffice/api/beneficios/reglas-de-beneficio/{id}/editar` | `reglas-service.js:40` | Regla para editar |
| PUT | `/msr-backoffice/api/beneficios/reglas-de-beneficio/{id}` | `reglas-service.js:45` | Actualizar regla |
| DELETE | `/msr-backoffice/api/beneficios/reglas-de-beneficio/{id}` | `reglas-service.js:50` | Eliminar regla |
| POST | `/msr-backoffice/api/beneficios/reglas-de-beneficio/` | `reglas-service.js:55` | Crear regla |
| POST | `/msr-backoffice/api/beneficios/voucher/miembros` | `vouchers-service.js:23` | Crear voucher para miembros |
| POST | `/msr-backoffice/api/beneficios/voucher/segmentos` | `vouchers-service.js:28` | Crear voucher para segmentos |

---

## 15. Solicitudes

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/solicitudes/{id}` | `solicitudes-service.js:12` | Detalle de solicitud |
| POST | `/msr-backoffice/api/solicitudes` | `solicitudes-service.js:18` | Buscar solicitudes |
| PUT | `/msr-backoffice/api/solicitudes/aprobar` | `solicitudes-service.js:26` | Aprobar solicitud |
| PUT | `/msr-backoffice/api/solicitudes/{id}/postergar` | `solicitudes-service.js:33` | Postergar solicitud |
| PUT | `/msr-backoffice/api/solicitudes/{id}/reimprimir` | `solicitudes-service.js:40` | Reimprimir solicitud |

---

## 16. Formularios de Alta

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/formularios-de-alta/find` | `formulario-de-alta-service.js:9` | Buscar formularios |
| GET | `/msr-backoffice/api/formularios-de-alta/{id}` | `single-to-resource-service.js` | Obtener formulario |
| POST | `/msr-backoffice/api/formularios-de-alta` | `single-to-resource-service.js` | Crear formulario |
| PUT | `/msr-backoffice/api/formularios-de-alta/{id}` | `single-to-resource-service.js` | Actualizar formulario |
| DELETE | `/msr-backoffice/api/formularios-de-alta/{id}` | `single-to-resource-service.js` | Eliminar formulario |

---

## 17. Tiendas

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/tiendas` | `tienda-service.js` | Listar tiendas |
| GET | `/msr-backoffice/api/tiendas/{id}` | `tienda-service.js` | Obtener tienda |
| POST | `/msr-backoffice/api/tiendas` | `tienda-service.js` | Crear tienda |
| PUT | `/msr-backoffice/api/tiendas/{id}` | `tienda-service.js` | Actualizar tienda |
| DELETE | `/msr-backoffice/api/tiendas/{id}` | `tienda-service.js` | Eliminar tienda |

---

## 18. Items Micros

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/items-micros` | `items-micros-service.js` | Listar items |
| POST | `/msr-backoffice/api/items-micros/nuevo/` | `items-micros-service.js` | Crear item |
| GET | `/msr-backoffice/api/items-micros/{id}` | `items-micros-service.js` | Obtener item |
| PUT | `/msr-backoffice/api/items-micros/{id}` | `items-micros-service.js` | Actualizar item |
| DELETE | `/msr-backoffice/api/items-micros/{id}` | `items-micros-service.js` | Eliminar item |

---

## 19. Items Micros Con Nivel

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/items-micros-con-nivel/buscar-o-crear` | `items-micros-con-nivel-service.js:17` | Buscar o crear item con nivel |

---

## 20. Items Multiopción

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/items-multiopcion` | `items-multiopcion-service.js` | Listar items multiopción |
| GET | `/msr-backoffice/api/items-multiopcion/{id}` | `items-multiopcion-service.js` | Obtener item |
| POST | `/msr-backoffice/api/items-multiopcion` | `items-multiopcion-service.js` | Crear item |
| PUT | `/msr-backoffice/api/items-multiopcion/{id}` | `items-multiopcion-service.js` | Actualizar item |
| DELETE | `/msr-backoffice/api/items-multiopcion/{id}` | `items-multiopcion-service.js` | Eliminar item |

---

## 21. Redimibles

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/redimibles` | `redimibles-service.js` | Listar redimibles |
| GET | `/msr-backoffice/api/redimibles/{id}` | `redimibles-service.js` | Obtener redimible |
| POST | `/msr-backoffice/api/redimibles` | `redimibles-service.js` | Crear redimible |
| PUT | `/msr-backoffice/api/redimibles/{id}` | `redimibles-service.js` | Actualizar redimible |
| DELETE | `/msr-backoffice/api/redimibles/{id}` | `redimibles-service.js` | Eliminar redimible |

---

## 22. Grupos de Credenciales (Roles)

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/grupos-de-credenciales` | `grupo-de-usuario-service.js` | Listar grupos |
| GET | `/msr-backoffice/api/grupos-de-credenciales/{id}` | `grupo-de-usuario-service.js` | Obtener grupo |
| POST | `/msr-backoffice/api/grupos-de-credenciales` | `grupo-de-usuario-service.js` | Crear grupo |
| PUT | `/msr-backoffice/api/grupos-de-credenciales/{id}` | `grupo-de-usuario-service.js` | Actualizar grupo |
| DELETE | `/msr-backoffice/api/grupos-de-credenciales/{id}` | `grupo-de-usuario-service.js` | Eliminar grupo |

---

## 23. Roles

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/roles` | `roles-service.js` | Listar roles |
| GET | `/msr-backoffice/api/roles/{id}` | `roles-service.js` | Obtener rol |
| POST | `/msr-backoffice/api/roles` | `roles-service.js` | Crear rol |
| PUT | `/msr-backoffice/api/roles/{id}` | `roles-service.js` | Actualizar rol |
| DELETE | `/msr-backoffice/api/roles/{id}` | `roles-service.js` | Eliminar rol |

---

## 24. Permisos

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/permisos` | `permisos-service.js` | Listar permisos |
| GET | `/msr-backoffice/api/permisos/{id}` | `permisos-service.js` | Obtener permiso |
| POST | `/msr-backoffice/api/permisos` | `permisos-service.js` | Crear permiso |
| PUT | `/msr-backoffice/api/permisos/{id}` | `permisos-service.js` | Actualizar permiso |
| DELETE | `/msr-backoffice/api/permisos/{id}` | `permisos-service.js` | Eliminar permiso |

---

## 25. Mailing

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/mailing/descartar-mails-enviados` | `mailing-service.js:10` | Descartar mails enviados |
| GET | `/msr-backoffice/api/mailing/autenticar-segun-ambiente` | `mailing-service.js:15` | Autenticar según ambiente |
| POST | `/msr-backoffice/api/mailing/autenticar-con-credenciales` | `mailing-service.js:20` | Autenticar con credenciales |
| POST | `/msr-backoffice/api/mailing/crearOActualizarContacto` | `mailing-service.js:25` | Crear/actualizar contacto |
| POST | `/msr-backoffice/api/mailing/enviarMailDesdeEmblue` | `mailing-service.js:30` | Enviar mail desde Emblue |
| GET | `/msr-backoffice/api/mailing/plantillas` | `mailing-service.js:35` | Listar plantillas |
| GET | `/msr-backoffice/api/mailing/plantillas/{id}` | `mailing-service.js:40` | Obtener plantilla |
| PUT | `/msr-backoffice/api/mailing/plantillas/{id}` | `mailing-service.js:46` | Actualizar plantilla |
| POST | `/msr-backoffice/api/mailing/enviar-mails-pendientes` | `mailing-service.js:51` | Enviar mails pendientes |
| GET | `/msr-backoffice/api/mailing/alias-de-beneficios` | `mailing-service.js:56` | Listar alias de beneficios |
| POST | `/msr-backoffice/api/mailing/alias-de-beneficios/` | `mailing-service.js:61` | Crear alias |

---

## 26. Mails Encolados

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| POST | `/msr-backoffice/api/mails-encolados/buscar` | `mails-encolados-service.js:10` | Buscar mails encolados |
| GET | `/msr-backoffice/api/mails-encolados/{id}` | `mails-encolados-service.js:15` | Obtener mail encolado |
| PUT | `/msr-backoffice/api/mails-encolados/{id}/reenviar` | `mails-encolados-service.js:20` | Reenviar mail |

---

## 27. Stars (Puntos)

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/stars/` | `configuracion-stars-service.js:9` | Obtener config stars |
| POST | `/msr-backoffice/api/stars/configurarPorMonto/` | `configuracion-stars-service.js:14` | Configurar por monto |
| POST | `/msr-backoffice/api/stars/configurarPorOperacion/` | `configuracion-stars-service.js:19` | Configurar por operación |

---

## 28. Transacciones

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/transacciones/configuracion` | `transacciones-service.js:9` | Config transacciones |
| PUT | `/msr-backoffice/api/transacciones/configuracion` | `transacciones-service.js:14` | Actualizar config |

---

## 29. Reloj del Sistema

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/reloj/` | `reloj-service.js:8` | Obtener hora del sistema |
| POST | `/msr-backoffice/api/reloj/` | `reloj-service.js:12` | Actualizar reloj |

---

## 30. Customer Voice

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/customer-voice/beneficio-entregable` | `customer-voice-service.js:10` | Obtener beneficio entregable |
| PUT | `/msr-backoffice/api/customer-voice/beneficio-entregable` | `customer-voice-service.js:15` | Actualizar beneficio |

---

## 31. Ejecutor de Tareas

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/ejecutor-de-tareas` | `ejecutor-de-tareas-service.js:12` | Listar tareas |
| POST | `/msr-backoffice/api/ejecutor-de-tareas/ejecutar/{id}` | `ejecutor-de-tareas-service.js:17` | Ejecutar tarea |

---

## 32. Errores

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/errores` | `errores-service.js` | Listar errores |
| GET | `/msr-backoffice/api/errores/{id}` | `errores-service.js` | Obtener error |

---

## 33. Métricas

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/metrics/variables/` | `metrics-service.js:8` | Variables de métricas |
| POST | `/msr-backoffice/api/metrics/snapshot/` | `metrics-service.js:13` | Snapshot de métricas |

---

## 34. Combos (Listas desplegables)

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/combos/{action}` | `combos-service.js:10` | Obtener opciones para combos |

---

## 35. Profiling

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/profile/obtenerArbol/` | `profile-service.js:14` | Obtener árbol de profiling |
| GET | `/msr-backoffice/api/profile/frenar/` | `profile-service.js:19` | Frenar profiling |
| POST | `/msr-backoffice/api/profile/empezar/` | `profile-service.js:24` | Empezar profiling |

---

## 36. Monitoreo de Congestión ValueLink

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/congestion-vl/mediciones` | `monitor-congestion-valuelink-service.js:12` | Mediciones de congestión |

---

## 37. Cambio Masivo de Claves

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/cambio-masivo-claves` | `cambio-masivo-claves.js` | Operaciones masivas |

---

## 38. Información para Auditoría

| Método | Endpoint | Usado en | Descripción |
|--------|----------|----------|-------------|
| GET | `/msr-backoffice/api/informacionParaAuditoria` | `informacion-para-auditoria-service.js` | Info de auditoría |

---

## Resumen de Estado

### ✅ Implementados (Mock)
- Autenticación y Usuario
- Heartbeat
- Configuración general (parcial)
- Configuración de contrato (parcial)

### ⏳ Pendientes
- Todos los demás endpoints necesitan implementarse como proxies al backend externo o mocks temporales

---

**Última actualización:** 2025-10-02
