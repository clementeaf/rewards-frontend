import Ember from "ember";

/**
 * Este mixin permite tener el grupo de usuario service como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  _grupoDeUsuarioService: Ember.inject.service('grupo-de-usuario-service'),
  grupoDeUsuarioService(){
    return this.get('_grupoDeUsuarioService');
  },
});

