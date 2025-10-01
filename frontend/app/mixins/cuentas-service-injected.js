import Ember from "ember";

export default Ember.Mixin.create({
  _cuentasService: Ember.inject.service('cuentas-service'),
  cuentasService(){
    return this.get('_cuentasService');
  },
});
