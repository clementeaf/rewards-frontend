import Ember from 'ember';
import RequesterInjected from '../mixins/requester-injected';
import ApiRequest from 'msr-backoffice-frontend/utils/api-request';


export default Ember.Service.extend(RequesterInjected, {
  nuevoVoucher() {
    return Ember.Object.create({
      beneficio: null,
      redimible: null,
      tiempoDeValidez: Ember.Object.create({
        cantidadDeTiempoConcreto: Ember.Object.create({
          unidadDeTiempo: null,
          cantidad: null
        }),
        cantidadDeTiempoHastaFinDeMes: null
      }),
      motivoDeAsignacion: ''
    });
  },

  entregaManualAMiembros(voucher) {
    var apiRequest = ApiRequest.posting('beneficios/voucher/miembros', voucher);
    return this._requester().sendWithSpinner(apiRequest);
  },

  entregaManualASegmentos(voucher) {
    var apiRequest = ApiRequest.posting('beneficios/voucher/segmentos', voucher);
    return this._requester().sendWithSpinner(apiRequest);
  },

  validarVoucher(voucherEnCreacion) {
    let error;

    if (Ember.isEmpty(voucherEnCreacion.motivoDeAsignacion)) {
      error = 'Debe especificar el motivo por el cual se entrega este voucher manualmente';
    }

    let cantidadDeTiempoConcreto = voucherEnCreacion.tiempoDeValidez.cantidadDeTiempoConcreto;
    let cantidadDeTiempoHastaFinDeMes = voucherEnCreacion.tiempoDeValidez.cantidadDeTiempoHastaFinDeMes;

    if (Ember.isNone(cantidadDeTiempoHastaFinDeMes)) {
      if (Ember.isNone(cantidadDeTiempoConcreto)) {
        error = 'Debe indicar el tiempo de validez del voucher';
      } else {
        if (Ember.isNone(cantidadDeTiempoConcreto.cantidad) || Ember.isNone(cantidadDeTiempoConcreto.unidadDeTiempo)) {
          error = 'Debe indicar la cantidad de unidades de tiempo para la validez del voucher';
        }
      }
    }

    if (Ember.isNone(voucherEnCreacion.redimible)) {
      error = 'Debe seleccionar un redimible';
    }

    if (Ember.isNone(voucherEnCreacion.beneficio)) {
      error = 'Debe seleccionar un beneficio';
    }

    return {esValido: !error, error: error};
  }
});
