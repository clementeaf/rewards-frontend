import Ember from "ember";
import ENV from "msr-backoffice-frontend/config/environment";

/**
 * Componente que muestra un banner cuando la aplicación está funcionando
 * con datos mock (sin conexión al backend)
 */
export default Ember.Component.extend({
  classNames: ['mock-mode-banner'],

  showBanner: Ember.computed(function() {
    return ENV.enableMockFallback === true;
  }),

  bannerMessage: "🚧 Modo Demo - Los datos mostrados son de demostración porque el backend no está disponible"
});