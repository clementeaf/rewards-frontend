import Ember from 'ember';
import ConfiguracionDeVencimientoDeSaldoServiceInjected from '../../../mixins/configuracion-vencimiento-de-saldo-service-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(ConfiguracionDeVencimientoDeSaldoServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {
  puedeEditarVencimientoDeSaldo: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarVencimientoDeSaldo: Ember.computed.not('puedeEditarVencimientoDeSaldo'),

  actions: {
    guardarConfiguracion(){
      var configuracion = this.get('model');
      this.configuracionDeVencimientoDeSaldoService().guardarConfiguracion(configuracion).then(() => {
        this.toastService().confirmarExito("Configuración actualizada");
      });
    }
  }
});
