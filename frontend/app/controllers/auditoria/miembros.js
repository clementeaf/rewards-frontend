import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import ReceptorDeMensajes from "msr-backoffice-frontend/mixins/receptor-de-mensajes";
import MiembrosServiceInjected from "../../mixins/miembros-service-injected";
import ScrollerInjected from "../../mixins/scroller-injected";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";

export default Ember.Controller.extend(UsuarioActualServiceInjected, MiembrosServiceInjected, NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, {

  actions: {
    quiereVerDetalles(miembro){
      this.scrollearAlDetalle();
      this.navigator().navigateToDetalleDeAuditoriaDeMiembro(miembro);
    },
    quiereEditar(miembro){
      this.scrollearAlDetalle();
      this.navigator().navigateToEditarAuditoriaDeMiembro(miembro);
    }
  },

  puedeEditarMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarMiembros();
  }),

  mensajes: {
    miembroModificado(miembroModificado){
      var idModificado = miembroModificado.get('id');
      var miembroExistente = this._miembros().findBy('id', idModificado);
      if (miembroExistente) {
        miembroExistente.setProperties(miembroModificado);
      }
      else {
        Ember.Logger.error('No se encontró el miembro modificado ', idModificado, ' en la lista de miembros del modelo');
      }
    }
  },

  _miembros: function () {
    return this.get('model');
  },

  scrollearAlDetalle() {
    this.scrollTo('#detallesDelMiembro');
  }
});
