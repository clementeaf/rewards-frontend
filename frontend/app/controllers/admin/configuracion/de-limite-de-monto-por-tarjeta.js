import Ember from 'ember';
import ConfiguracionDeLimiteDeMontoPorTarjetaServiceInjected from '../../../mixins/configuracion-limite-de-monto-por-tarjeta-service-injected';
import NavigatorInjected from 'msr-backoffice-frontend/mixins/navigator-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, ConfiguracionDeLimiteDeMontoPorTarjetaServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {

  puedeEditarLimiteDeMontoPorTarjeta: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarLimiteDeMontoPorTarjeta: Ember.computed.not('puedeEditarLimiteDeMontoPorTarjeta'),

  actions: {
    actualizarLimiteDeMonto(){
      var configuracion = this.get('model');
      this.configuracionDeLimiteDeMontoPorTarjetaService().actualizarLimite(configuracion)
        .then(() => {
          this.toastService().confirmarExito("Limite de monto por tarjeta actualizado");
        });
    }
  }
});
