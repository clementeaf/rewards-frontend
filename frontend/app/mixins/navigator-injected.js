import Ember from "ember";

/**
 * Este mixin permite tener el navigator como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  navigatorService: Ember.inject.service('section-navigator'),
  navigator(){
    return this.get('navigatorService');
  },
});
