import Ember from 'ember';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import ConfiguracionServiceInjected from '../../../mixins/configuracion-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(ConfiguracionServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {
  puedeEditarConfiguracionDeBeneficioDeBebidaGratis: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  actions: {
    guardarConfiguracion(){
      let configuracion = this.get('model');
      this.configuracionService().updateConfiguracionDeBeneficioDeBebidaGratis(configuracion).then(() => {
        this.toastService().confirmarExito("Configuración actualizada");
      });
    }
  }
});
