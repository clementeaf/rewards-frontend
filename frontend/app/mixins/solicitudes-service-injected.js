import Ember from "ember";

/**
 * Mixin que injecta solicitudes-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _solicitudes_service: Ember.inject.service('solicitudes-service'),
  solicitudesService(){
    return this.get('_solicitudes_service');
  },
});
