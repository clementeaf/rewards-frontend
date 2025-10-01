import Ember from "ember";

/**
 * Este servicio expone un servicio interno de Ember que nos permite transicionar de estado desde cualquier lugar
 * Su principal uso es para navegacion interna dentro de la aplicacion como la barra de navegacion,
 * o componentes que normalemente no tienen acceso al ruteo.
 *
 * Es posible que un un futuro cercano a este servicio lo publiquen y entonces esta clase perderia sentido
 */
export default Ember.Service.extend({
  /**
   * Similar semantics as http://emberjs.com/api/classes/Ember.Route.html#method_transitionTo
   */
  transitionTo(routeName, models, queryParams, shouldReplace){
    if (models && !(models instanceof Array)) {
      // The router expects an array for model as argument
      models = [models];
    }
    if (!queryParams) {
      // A hash is expected
      queryParams = {};
    }
    this.router().transitionTo(routeName, models, queryParams, shouldReplace);
  },
  // PRIVATE
  internalRoutingService: Ember.inject.service('-routing'), // Not declare on ember api
  router(){
    return this.get('internalRoutingService');
  },

});
