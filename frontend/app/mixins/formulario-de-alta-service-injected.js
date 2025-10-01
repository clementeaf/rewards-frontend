import Ember from "ember";

/**
 * Mixin que injecta formulario-de-alta-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _formularioDeAlta_service: Ember.inject.service('formulario-de-alta-service'),
  formularioDeAltaService(){
    return this.get('_formularioDeAlta_service');
  },
});
