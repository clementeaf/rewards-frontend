import Ember from "ember";

/**
 * Mixin que injecta errores-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _errores_service: Ember.inject.service('errores-service'),
  erroresService(){
    return this.get('_errores_service');
  },
});
