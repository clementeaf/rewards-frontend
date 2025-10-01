import Ember from "ember";

/**
 * Mixin que injecta configuracion-limite-de-monto-por-tarjeta-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _configuracion_limite_de_monto_por_tarjeta_service: Ember.inject.service('configuracion-limite-de-monto-por-tarjeta-service'),
  configuracionDeLimiteDeMontoPorTarjetaService(){
    return this.get('_configuracion_limite_de_monto_por_tarjeta_service');
  }
});
