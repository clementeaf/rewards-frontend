import Ember from "ember";

/**
 * Mixin que injecta tarjeta-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _tarjetasService: Ember.inject.service('tarjetas-service'),
  tarjetasService(){
    return this.get('_tarjetasService');
  }
});
