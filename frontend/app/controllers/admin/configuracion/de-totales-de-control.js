import Ember from 'ember';
import ConfiguracionDeRecargasAnualesServiceInjected from '../../../mixins/configuracion-recargas-anuales-service-injected';
import NavigatorInjected from 'msr-backoffice-frontend/mixins/navigator-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, ConfiguracionDeRecargasAnualesServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {

  puedeEditarTotalesDeControl: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarTotalesDeControl: Ember.computed.not('puedeEditarTotalesDeControl'),

  actions: {
    actualizarMaximoDeRecargas(){
      var configuracion = this.get('model');
      this.configuracionDeRecargasAnualesService().actualizarMaximoDeRecargas(configuracion)
        .then(() => {
          this.toastService().confirmarExito("Maximo de recargas actualizado");
        });
    }
  }
});
