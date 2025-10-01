import Ember from "ember";

/**
 * Mixin que injecta configuracion-control-de-fraude-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _configuracion_control_de_fraude_service: Ember.inject.service('configuracion-control-de-fraude-service'),
  configuracionDeControlDeFraudeService(){
    return this.get('_configuracion_control_de_fraude_service');
  }
});
