import Ember from 'ember';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import ConfiguracionServiceInjected from '../../mixins/configuracion-service-injected';
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';
import VouchersServiceInjected from '../../mixins/vouchers-service-injected';
import SegmentosDeMiembrosServiceInjected from '../../mixins/segmentos-de-miembros-service-injected';

export default Ember.Component.extend(ConfiguracionServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, VouchersServiceInjected, SegmentosDeMiembrosServiceInjected, {
  segmentosConDetalle: Ember.A(),
  mostrarModalDeConfirmacionDeEntregaASegmentos: false,

  descripcionModal: Ember.computed('segmentosConDetalle.@each.seleccionado', function () {
    let segmentosSeleccionados = this._obtenerDetalleDeSegmentosSeleccionados();
    let cantidadDeSegmentos = segmentosSeleccionados.length;
    let cantidadDeMiembros = segmentosSeleccionados.reduce((prevVal, segmento) => prevVal + segmento.cantidadDeMiembros, 0);
    return 'Se asignará el voucher a ' + cantidadDeSegmentos + ' segmentos, afectando a un total de ' + cantidadDeMiembros + ' miembros. ' +
      'El resultado de la entrega podrá visualizarse en la sección de auditoría de operaciones.';
  }),

  init() {
    this._super(...arguments);
    this.segmentosDeMiembrosService().buscarListadoConDetalle().then(segmentosEncontrados => {
      this.set('segmentosConDetalle', segmentosEncontrados);
    });
  },

  _segmentosConDetalle() {
    return this.get('segmentosConDetalle');
  },

  _voucher() {
    return this.get('voucherEnCreacion');
  },

  _validarVoucher() {
    return this.vouchersService().validarVoucher(this._voucher());
  },

  _armarPedidoDeCreacionDeVouchers() {
    let segmentosSeleccionados = this._obtenerSegmentosSeleccionados();
    return Ember.Object.create({segmentos: segmentosSeleccionados, voucherEnCreacion: this._voucher()});
  },

  _obtenerSegmentosSeleccionados() {
    return this._obtenerDetalleDeSegmentosSeleccionados().map(detalleDeSegmento => detalleDeSegmento.segmento);
  },

  _obtenerDetalleDeSegmentosSeleccionados() {
    return this._segmentosConDetalle().filterBy('seleccionado', true);
  },

  _deseleccionarSegmentos() {
    this._segmentosConDetalle().setEach('seleccionado', false);
  },

  _reinicializarMensajeDeError() {
    this.set('mensajeDeError', null);
  },

  _confirmarAsignacionASegmentos() {
    this.set('mostrarModalDeConfirmacionDeEntregaASegmentos', true);
  },

  _cerrarModalDeAsignacionASegmentos() {
    this.set('mostrarModalDeConfirmacionDeEntregaASegmentos', false);
  },

  actions: {
    validar() {
      let resultadoDeValidarVoucher = this._validarVoucher();

      if (!resultadoDeValidarVoucher.esValido) {
        this.set('mensajeDeError', resultadoDeValidarVoucher.error);
        return;
      }

      if (Ember.isEmpty(this._obtenerSegmentosSeleccionados())) {
        this.set('mensajeDeError', 'Debe seleccionar uno o más segmentos');
        return;
      }

      this._reinicializarMensajeDeError();
      this._confirmarAsignacionASegmentos();
    },

    asignar() {
      let pedidoDeCreacionDeVouchers = this._armarPedidoDeCreacionDeVouchers();

      this.vouchersService().entregaManualASegmentos(pedidoDeCreacionDeVouchers).then(() => {
        this.toastService().confirmarExito('Vouchers asignados');
        this._deseleccionarSegmentos();
        this._cerrarModalDeAsignacionASegmentos();
      });
    },
  }
});
