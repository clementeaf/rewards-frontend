import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, {

  actions: {
    quiereEditar(permiso){
      this.scrollToCrud();
      this.navigator().navigateToEditarPermiso(permiso);
    }
  },

  mensajes: {
    permisoModificado(permisoModificado){
      var idModificado = permisoModificado.get('id');
      var permisoExistente = this.get('model').findBy('id', idModificado);
      if (permisoExistente) {
        permisoExistente.setProperties(permisoModificado);
      }
    },
  },

  scrollToCrud() {
    this.scrollTo('#permisosCrud');
  }
});
