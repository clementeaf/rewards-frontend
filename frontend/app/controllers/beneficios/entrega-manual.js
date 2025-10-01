import Ember from "ember";
import ToastServiceInjected from "../../mixins/toast-service-injected";
import TabsInjected from '../../mixins/tabs-injected';

export default Ember.Controller.extend(TabsInjected, ToastServiceInjected, {
  mensajeDeError: null,

  init() {
    this._super(...arguments);
    this.armarTabs('entrega-manual-tabs');
  },

  _voucher(){
    return this.get('model.voucherEnCreacion');
  },

});
