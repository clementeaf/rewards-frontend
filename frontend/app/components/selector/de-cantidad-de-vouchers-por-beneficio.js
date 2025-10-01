import Ember from "ember";
import MailingServiceInjected from "../../mixins/mailing-service-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";

export default Ember.Component.extend(MailingServiceInjected, ToastServiceInjected, {
  mensajeDeError: null,
  cantidadEnSeleccion: 0,
  aliasEnSeleccion: null,

  init(){
    this._super(...arguments);
    this.inicializarAliasEnSeleccion();
  },

  inicializarAliasEnSeleccion() {
    this.set('aliasEnSeleccion', null);
    this.set('cantidadEnSeleccion', null);
  },

  _aliasEnSeleccion() {
    return this.get('aliasEnSeleccion');
  },

  _cantidadEnSeleccion() {
    return this.get('cantidadEnSeleccion');
  },

  _cantidadesDeVouchersPorBeneficioSeleccionadas() {
    return this.get('cantidadesDeVouchersPorBeneficioSeleccionadas');
  },

  actions: {
    agregarCantidadDeVouchers(){
      if (Ember.isEmpty(this._aliasEnSeleccion()) || Ember.isEmpty(this._cantidadEnSeleccion())) {
        this.set('mensajeDeError', "Debe seleccionar un alias e indicar una cantidad de vouchers");
        return;
      }
      if (this._cantidadesDeVouchersPorBeneficioSeleccionadas().findBy('aliasDelBeneficio.id', this._aliasEnSeleccion().get('id'))) {
        this.set('mensajeDeError', "El alias seleccionado ya se encuentra en la lista");
        return;
      }

      let cantidadDeVouchersPorBeneficio = Ember.Object.create({aliasDelBeneficio: this._aliasEnSeleccion(), cantidad: this._cantidadEnSeleccion()});
      this._cantidadesDeVouchersPorBeneficioSeleccionadas().pushObject(cantidadDeVouchersPorBeneficio);
      this.inicializarAliasEnSeleccion();
    },
  }
});
