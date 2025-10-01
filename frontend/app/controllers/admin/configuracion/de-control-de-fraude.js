import Ember from 'ember';
import ConfiguracionDeControlDeFraudeServiceInjected from '../../../mixins/configuracion-control-de-fraude-service-injected';
import NavigatorInjected from 'msr-backoffice-frontend/mixins/navigator-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, ConfiguracionDeControlDeFraudeServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {

  puedeEditarControlDeFraude: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarControlDeFraude: Ember.computed.not('puedeEditarControlDeFraude'),

  actions: {
    actualizarControlDeFraude(){
      var configuracion = this.get('model');
      this.configuracionDeControlDeFraudeService().actualizarConfiguracion(configuracion)
        .then(() => {
          this.toastService().confirmarExito("Configuracion actualizada");
        });
    }
  }
});
