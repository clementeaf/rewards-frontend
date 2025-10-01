# Modo Mock - Funcionamiento sin Backend

## ¿Qué es el Modo Mock?

El modo mock permite que los componentes del frontend sean visibles y funcionales incluso cuando el backend no está disponible, utilizando datos de demostración.

## ¿Cómo funciona?

### 1. Detección automática de fallos
El sistema detecta automáticamente cuando el backend no está disponible basándose en:
- Errores de conexión (status 0, 404, 500, 502, 503)
- Timeouts de red
- Errores de conectividad

### 2. Fallback a datos mock
Cuando se detecta un fallo, automáticamente se usan datos de demostración predefinidos para:
- **Miembros**: Lista de miembros de ejemplo
- **Tarjetas**: Tarjetas con saldos y estados
- **Operaciones**: Historial de transacciones
- **Usuarios**: Usuario de demostración con permisos
- **Configuración**: Configuración del sistema
- **Solicitudes, Vouchers, Cuentas**: Datos de ejemplo

### 3. Indicador visual
Se muestra un banner amarillo indicando que se están usando datos de demostración.

## Configuración

### Habilitar/Deshabilitar modo mock

En `frontend/config/environment.js`:

```javascript
if (environment === 'development') {
  // Habilita el modo mock cuando el backend no está disponible
  ENV.enableMockFallback = true;  // true = habilitado, false = deshabilitado
}
```

## Archivos modificados

### Nuevos archivos creados:
1. **`app/services/mock-data-service.js`** - Servicio que proporciona datos mock
2. **`app/mixins/mock-data-injected.js`** - Mixin para componentes con soporte mock
3. **`app/components/mock-mode-banner.js`** - Banner que indica modo demo
4. **`app/templates/components/mock-mode-banner.hbs`** - Template del banner

### Archivos modificados:
1. **`app/services/requester.js`** - Añadido fallback automático a datos mock
2. **`frontend/config/environment.js`** - Añadida configuración `enableMockFallback`
3. **`app/components/filtro/de-miembros.js`** - Ejemplo de uso del mixin mock

## Cómo añadir soporte mock a otros componentes

### Opción 1: Automático (Recomendado)
El sistema funciona automáticamente. Cuando el backend falla, todos los servicios que usan `requester.js` automáticamente reciben datos mock.

### Opción 2: Manual para casos específicos
Para casos específicos, incluir el mixin en tu componente:

```javascript
import MockDataInjected from "../mixins/mock-data-injected";

export default Ember.Component.extend(MockDataInjected, {
  init() {
    this._super(...arguments);
    this.showMockBanner(); // Muestra mensaje en consola
  },

  // Usar callServiceWithMockFallback para casos específicos
  loadData() {
    return this.callServiceWithMockFallback(
      this.miembrosService().findAll.bind(this.miembrosService())
    );
  }
});
```

### Añadir el banner a un template
```handlebars
{{mock-mode-banner}}
<!-- resto del contenido -->
```

## Datos mock disponibles

El servicio `mock-data-service.js` proporciona datos para:
- `miembros/` - Lista de miembros con tarjetas
- `tarjetas/find` - Tarjetas con saldos y estados
- `operaciones/` - Historial de transacciones
- `usuarios/logueado` - Usuario con permisos
- `configuracion/` - Configuración del sistema
- `solicitudes/` - Solicitudes pendientes
- `vouchers/` - Vouchers disponibles
- `cuentas/` - Cuentas del sistema

## Ventajas

1. **Desarrollo sin backend**: Los desarrolladores frontend pueden trabajar sin servidor
2. **Demostraciones**: Se pueden hacer demos sin infraestructura
3. **Testing**: Pruebas de UI sin dependencias externas
4. **Resilencia**: La aplicación sigue siendo usable parcialmente durante interrupciones

## Limitaciones

- Los datos son estáticos y no se persisten
- No se pueden realizar operaciones de modificación reales
- Es solo para visualización y navegación básica
- Los datos se resetean en cada recarga

## Próximos pasos

Para una implementación más robusta, considera:
1. Añadir más datos mock específicos para cada módulo
2. Implementar persistencia local (localStorage)
3. Simular operaciones CRUD con datos temporales
4. Añadir configuración por módulo para habilitar/deshabilitar mock selectivamente