import Ember from 'ember';
import RelojService from '../../../mixins/reloj-service-injected';
import UsuarioActualServiceInjected from '../../../mixins/usuario-actual-service-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';

export default Ember.Controller.extend(RelojService, UsuarioActualServiceInjected, ToastServiceInjected, {

  puedeEditarLaConfiguracionDelReloj: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarLaConfiguracionDelReloj: Ember.computed.not('puedeEditarLaConfiguracionDelReloj'),

  actions: {
    cambiarHora(){
      this.relojService().cambiarHora(this.get('model')).then(() => {
        this.toastService().confirmarExito('Hora actualizada');
      });
    }
  }
});
