import Ember from "ember";

/**
 * Este mixin permite tener el RolesService service como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tengan
 */
export default Ember.Mixin.create({
  _rolesService: Ember.inject.service('roles-service'),
  rolesService(){
    return this.get('_rolesService');
  }
});
