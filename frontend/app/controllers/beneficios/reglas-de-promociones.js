import Ember from "ember";
import ReglasService from "../../mixins/reglas-service-injected";
import NavigatorInjected from "../../mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ScrollerInjected from "../../mixins/scroller-injected";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";

export default Ember.Controller.extend(UsuarioActualServiceInjected,NavigatorInjected, ReglasService, ReceptorDeMensajes, ScrollerInjected,ToastServiceInjected, {
  promocionSeleccionada: null,

  puedeEditarBeneficios: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarBeneficios();
  }),

  actions: {
    verDetalles(reglaDePromocion){
      this.navigator().navigateToDetalleDeReglaDePromocion(reglaDePromocion);
      this.scrollearAlDetalle();
    },

    editar(reglaDePromocion){
      this.navigator().navigateToEditarReglaDePromocion(reglaDePromocion);
      this.scrollearAlDetalle();
    },

    eliminarReglaSeleccionada(){
      const regla = this.get('promocionSeleccionada');
      this.reglasService().eliminar(regla).then(() => {
        this._reglas().removeObject(regla);
        this.navigator().navigateToPromociones();
      });
    },

    pedirConfirmacionParaBorrar(reglaDePromocion){
      this.set('promocionSeleccionada', reglaDePromocion);
      this.set('modalAlEliminarUnaRegla', true);
    },

    nueva(){
      this.scrollearAlDetalle();
      this.navigator().navigateToCrearReglaDePromocion();
    }
  },

  mensajes: {
    reglaModificada(regla) {
      var reglaID = regla.get('id');
      var reglaModificada = this._reglas().findBy('id', reglaID);
      if(reglaModificada) {
        reglaModificada.setProperties(regla);
      }
      else {
        Ember.Logger.error('No se encontró la regla modificada ', reglaID, ' en la lista de reglas del modelo');
      }
    },
    reglaCreada(beneficioDeNivel) {
      this._reglas().addObject(beneficioDeNivel);
    }
  },

  _reglas() {
    return this.get('model');
  },

  scrollearAlDetalle(){
    this.scrollTo('#promocionesCrud');
  }
});
