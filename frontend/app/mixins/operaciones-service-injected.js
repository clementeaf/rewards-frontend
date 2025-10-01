import Ember from "ember";

/**
 * Mixin que injecta operaciones-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _operacionesService: Ember.inject.service('operaciones-service'),
  operacionesService(){
    return this.get('_operacionesService');
  },
});
