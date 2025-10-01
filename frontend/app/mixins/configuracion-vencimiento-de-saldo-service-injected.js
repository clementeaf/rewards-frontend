import Ember from "ember";

/**
 * Mixin que injecta configuracion-vencimiento-de-saldo-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _configuracion_vencimiento_de_saldo_service: Ember.inject.service('configuracion-vencimiento-de-saldo-service'),
  configuracionDeVencimientoDeSaldoService(){
    return this.get('_configuracion_vencimiento_de_saldo_service');
  }
});
