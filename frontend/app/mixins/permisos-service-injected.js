import Ember from "ember";

/**
 * Este mixin permite tener el permisos service como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  _permisosService: Ember.inject.service('permisos-service'),
  permisosService(){
    return this.get('_permisosService');
  },
});
