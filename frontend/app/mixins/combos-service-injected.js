import Ember from "ember";

/**
 * Este mixin permite tener el servicio para buscar combos
 */
export default Ember.Mixin.create({
  _combosService: Ember.inject.service('combos-service'),
  combosService(){
    return this.get('_combosService');
  }
});
