import Ember from "ember";

export default Ember.Mixin.create({
  _vouchersService: Ember.inject.service('vouchers-service'),
  vouchersService(){
    return this.get('_vouchersService');
  }
});
