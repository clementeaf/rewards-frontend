import Ember from "ember";
import ReglasService from "../../mixins/reglas-service-injected";
import NavigatorInjected from "../../mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ScrollerInjected from "../../mixins/scroller-injected";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";

export default Ember.Controller.extend(UsuarioActualServiceInjected, NavigatorInjected, ReglasService, ReceptorDeMensajes, ScrollerInjected, ToastServiceInjected, {
  reglaSeleccionada: null,

  puedeEditarBeneficios: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarBeneficios();
  }),

  actions: {
    verDetalles(regla){
      this.navigator().navigateToDetalleDeReglaDeBeneficioDeNivel(regla);
      this.scrollearAlDetalle();
    },

    editar(regla){
      this.navigator().navigateToEditarReglaDeBeneficioDeNivel(regla);
      this.scrollearAlDetalle();
    },

    eliminarReglaSeleccionada(){
      const regla = this.get('reglaSeleccionada');
      this.reglasService().eliminar(regla).then(() => {
        this._reglas().removeObject(regla);
        this.navigator().navigateToBeneficiosDeNivel();
      });
    },

    nueva(){
      this.scrollearAlDetalle();
      this.navigator().navigateToCrearReglaDeBeneficioDeNivel();
    },

    pedirConfirmacionParaBorrar(regla){
      this.set('reglaSeleccionada', regla);
      this.set('modalAlEliminarUnaRegla',true);
    },
  },

  mensajes: {
    reglaModificada(regla) {
      var reglaId = regla.get('id');
      var reglaModificada = this._reglas().findBy('id', reglaId);
      if(reglaModificada) {
        reglaModificada.setProperties(regla);
      }
      else {
        Ember.Logger.error('No se encontró la regla modificada ', reglaId, ' en la lista de reglas del modelo');
      }
    },
    reglaCreada(regla) {
      this._reglas().addObject(regla);
    }
  },

  _reglas() {
    return this.get('model');
  },

  scrollearAlDetalle() {
    this.scrollTo('#detalleDeBeneficio');
  },
});
