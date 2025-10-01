import Ember from "ember";

/**
 * Este mixin permite tener el about service como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  _usuarioService: Ember.inject.service('usuario-service'),
  usuarioService(){
    return this.get('_usuarioService');
  },
});
