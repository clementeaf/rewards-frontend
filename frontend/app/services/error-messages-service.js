import Ember from "ember";

/**
 * Servicio notificador de errores injectado con el mixin ErrorMessagesServiceInjected
 * Sirve como unico punto de acceso para mostrar eventos de errores del backend
 * Está atado a el fallo de una promesa del requester
 **/
export default Ember.Service.extend({
  flashMessages: Ember.inject.service(),
  globalProperties: { sticky: true },

  showError(message, stacktrace){
    var flashMessage = { message: message, stacktrace: stacktrace };
    this.get('flashMessages').add(Ember.merge(this.get('globalProperties'), flashMessage));
  }
});
