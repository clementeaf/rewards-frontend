import Ember from "ember";

/**
 * Mixin que injecta usuario-actual-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _usuarioActual_service: Ember.inject.service('usuario-actual-service'),
  usuarioActualService(){
    return this.get('_usuarioActual_service');
  },
});
