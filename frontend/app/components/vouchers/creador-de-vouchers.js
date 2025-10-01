import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import VouchersServiceInjected from "../../mixins/vouchers-service-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";

export default Ember.Component.extend(NavigatorInjected, VouchersServiceInjected, ToastServiceInjected, {
  voucherEnCreacion: null,
  longitudMaximaDeMotivo: 400,

  opcionesDeValidacion: {
    messages: {
      beneficio: {
        required: "Ingrese el beneficio"
      },
      redimible: {
        required: "Ingrese el redimible"
      },
      validez: {
        required: "Ingrese el tiempo de validez"
      }
    }
  },

  init(){
    this._super(...arguments);
  },

  _inicializarVoucherEnCreacion(){
    this.set('voucherEnCreacion', this.vouchersService().nuevoVoucher());
  },

  actions: {
    borrar(){
      this._inicializarVoucherEnCreacion();
    }
  }

});

