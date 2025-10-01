import Ember from "ember";
import ENV from "msr-backoffice-frontend/config/environment";

/**
 * Mixin que inyecta el servicio de datos mock y proporciona utilidades
 * para componentes que necesiten funcionar sin backend
 */
export default Ember.Mixin.create({
  mockDataService: Ember.inject.service('mock-data-service'),

  /**
   * Verifica si el modo mock está habilitado
   */
  isMockModeEnabled: Ember.computed(function() {
    return ENV.enableMockFallback === true;
  }),

  /**
   * Método helper para mostrar un banner indicando que se están usando datos mock
   */
  showMockBanner() {
    if (this.get('isMockModeEnabled')) {
      console.info('🚧 Modo Demo: Los datos mostrados son de demostración');
    }
  },

  /**
   * Wrapper para llamadas a servicios que añade fallback automático a mock data
   */
  callServiceWithMockFallback(serviceMethod, ...args) {
    return serviceMethod.apply(this, args).catch((error) => {
      if (this.get('isMockModeEnabled')) {
        console.warn('Servicio falló, usando datos mock:', error);
        // Extraer información del método para determinar qué mock usar
        const methodName = serviceMethod.name || 'unknown';
        return this.get('mockDataService').getMockData(methodName);
      }
      throw error;
    });
  }
});