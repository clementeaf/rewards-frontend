import Ember from "ember";

export default Ember.Mixin.create({
  _transaccionesService: Ember.inject.service('transacciones-service'),
  transaccionesService(){
    return this.get('_transaccionesService');
  },
});
