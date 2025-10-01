import Ember from 'ember';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import ConfiguracionServiceInjected from '../../mixins/configuracion-service-injected';
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';
import VouchersServiceInjected from '../../mixins/vouchers-service-injected';

export default Ember.Component.extend(ConfiguracionServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, VouchersServiceInjected, {
  mostrarModalDeConfirmacionDeEntregaAMiembros: false,
  miembros: Ember.A(),

  puedeEntregarVouchers: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEntregarVouchers();
  }),

  descripcionModal: Ember.computed('miembros.@each.seleccionado', function () {
    let miembrosSeleccionados = this._obtenerMiembrosSeleccionados();
    let cantidadDeMiembros = miembrosSeleccionados.length;
    return 'Se asignará el voucher a ' + cantidadDeMiembros + ' miembros. ' +
      'El resultado de la entrega podrá visualizarse en la sección de auditoría de operaciones.';
  }),

  _miembros() {
    return this.get('miembros');
  },

  _voucher() {
    return this.get('voucherEnCreacion');
  },

  _validarVoucher() {
    return this.vouchersService().validarVoucher(this._voucher());
  },

  _armarPedidoDeCreacionDeVouchers() {
    let miembrosSeleccionados = this._obtenerMiembrosSeleccionados();
    return Ember.Object.create({miembros: miembrosSeleccionados, voucherEnCreacion: this._voucher()});
  },

  _obtenerMiembrosSeleccionados() {
    return this._miembros().filterBy('seleccionado', true);
  },

  _deseleccionarMiembros() {
    this._miembros().setEach('seleccionado', false);
  },

  _reinicializarMensajeDeError() {
    this.set('mensajeDeError', null);
  },

  _confirmarAsignacionAMiembros() {
    this.set('mostrarModalDeConfirmacionDeEntregaAMiembros', true);
  },

  _cerrarModalDeAsignacionAMiembros() {
    this.set('mostrarModalDeConfirmacionDeEntregaAMiembros', false);
  },

  actions: {
    validar() {
      let resultadoDeValidarVoucher = this._validarVoucher();

      if (!resultadoDeValidarVoucher.esValido) {
        this.set('mensajeDeError', resultadoDeValidarVoucher.error);
        return;
      }

      if (Ember.isEmpty(this._obtenerMiembrosSeleccionados())) {
        this.set('mensajeDeError', 'Debe seleccionar uno o más miembros');
        return;
      }

      this._reinicializarMensajeDeError();
      this._confirmarAsignacionAMiembros();
    },

    asignar() {
      let pedidoDeCreacionDeVouchers = this._armarPedidoDeCreacionDeVouchers();

      this.vouchersService().entregaManualAMiembros(pedidoDeCreacionDeVouchers).then(() => {
        this.toastService().confirmarExito('Vouchers asignados');
        this._deseleccionarMiembros();
        this._cerrarModalDeAsignacionAMiembros();
      });
    },
  }
});
