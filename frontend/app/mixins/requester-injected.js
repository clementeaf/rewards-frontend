import Ember from "ember";

/**
 * Este mixin permite tener el requester como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  requesterService: Ember.inject.service('requester'),
  _requester(){
    return this.get('requesterService');
  }
});
