import Ember from "ember";

/**
 * Mixin que injecta tienda-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _tienda: Ember.inject.service('tienda-service'),
  tiendaService(){
    return this.get('_tienda');
  },
});
