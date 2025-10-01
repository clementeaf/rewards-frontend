import Ember from "ember";

/**
 * Este mixin permite tener el item micros service como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tenga
 */
export default Ember.Mixin.create({
  _itemsMicrosService: Ember.inject.service('items-micros-service'),
  itemsMicrosService(){
    return this.get('_itemsMicrosService');
  },
});
