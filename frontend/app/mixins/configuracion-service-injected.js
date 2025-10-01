import Ember from "ember";

/**
 * Mixin que injecta configuracion-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _configuracion_service: Ember.inject.service('configuracion-service'),
  configuracionService(){
    return this.get('_configuracion_service');
  },
});
