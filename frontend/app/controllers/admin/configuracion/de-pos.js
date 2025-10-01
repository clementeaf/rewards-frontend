import Ember from 'ember';
import NavigatorInjected from '../../../mixins/navigator-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import TransaccionesServiceInjected from '../../../mixins/transacciones-service-injected';
import ConfiguracionServiceInjected from '../../../mixins/configuracion-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, TransaccionesServiceInjected, ConfiguracionServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {

  puedeEditarConfiguracionDePosYTransacciones: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarConfiguracionDePosYTransacciones: Ember.computed.not('puedeEditarConfiguracionDePosYTransacciones'),

  actions: {
    guardarConfiguracionDeTransacciones(){
      var configuracionDeTransacciones = this.get('model.configuracionDeTransacciones');
      this.transaccionesService().guardarConfiguracion(configuracionDeTransacciones).then(() => {
        this.toastService().confirmarExito("Configuración guardada");
      });
    },
    guardarConfiguracionDeVersionMinimaDelPos(){
      var configuracionDeVersion = this.get('model.configuracionDeVersionMinimaDelPos');
      this.configuracionService().updateVersionMinimaDelPos(configuracionDeVersion).then(() => {
        this.toastService().confirmarExito("Configuración guardada");
      });
    }
  }
});
