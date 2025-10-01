import Ember from "ember";

/**
 * Mixin que injecta configuracion-recargas-anuales-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _configuracion_recargas_anuales_service: Ember.inject.service('configuracion-recargas-anuales-service'),
  configuracionDeRecargasAnualesService(){
    return this.get('_configuracion_recargas_anuales_service');
  }
});
