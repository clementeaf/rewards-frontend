import Ember from "ember";

/**
 * Mixin que injecta toast-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _toast_service: Ember.inject.service('toast-service'),
  toastService(){
    return this.get('_toast_service');
  },
});
