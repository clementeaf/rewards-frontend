import Ember from "ember";

/**
 * Mixin que injecta configuracion-de-contrato-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _configuracionDeContrato_service: Ember.inject.service('configuracion-de-contrato-service'),
  configuracionDeContratoService(){
    return this.get('_configuracionDeContrato_service');
  },
});
