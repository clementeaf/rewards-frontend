import Ember from "ember";
import ConfiguracionDeStarsService from "../../../mixins/configuracion-stars-service-injected";
import ToastServiceInjected from "../../../mixins/toast-service-injected";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";

export default Ember.Controller.extend(ConfiguracionDeStarsService, ToastServiceInjected, UsuarioActualServiceInjected, {

  puedeEditarConfiguracionDeStars: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarConfiguracionDeStars: Ember.computed.not('puedeEditarConfiguracionDeStars'),

  actions: {
    configurarPorMonto(){
      this.configuracionStarsService().configurarPorMonto(this.get('model.configuracionPorMonto'))
        .then(() => {
          this.toastService().confirmarExito("Configurado por monto");
        });
    },
    configurarPorOperacion(){
      this.configuracionStarsService().configurarPorOperacion(this.get('model.configuracionPorOperacion')).then(() => {
        this.toastService().confirmarExito("Configurado por operacion");
      });
    }
  }
});
