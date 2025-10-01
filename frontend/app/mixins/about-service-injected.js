import Ember from "ember";

/**
 * Este mixin permite tener el about service como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  _aboutService: Ember.inject.service('about-service'),
  aboutService(){
    return this.get('_aboutService');
  },
});
