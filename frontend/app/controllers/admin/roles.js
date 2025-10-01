import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, {

  actions: {
    quiereEditar(rol){
      this.scrollToCrud();
      this.navigator().navigateToEditarRol(rol);
    },
    quiereCrearNuevo(){
      this.scrollToCrud();
      this.navigator().navigateToCrearRol();
    }
  },

  mensajes: {
    rolCreado(rolCreado){
      this._roles().addObject(rolCreado);
    },
    rolModificado(rolModificado){
      var idModificado = rolModificado.get('id');
      var rolExistente = this._roles().findBy('id', idModificado);
      if (rolExistente) {
        rolExistente.setProperties(rolModificado);
      } else {
        Ember.Logger.error('No se encontró el rol modificado ', idModificado, ' en la lista de roles del modelo');
      }
    },
    rolEliminado(rolEliminado){
      var idEliminado = rolEliminado.get('id');
      var rolExistente = this._roles().findBy('id', idEliminado);
      if (rolExistente) {
        this._roles().removeObject(rolExistente);
      } else {
        Ember.Logger.error('No se encontró el rol eliminado ', idEliminado, ' en la lista de roles del modelo');
      }
    }
  },

  _roles: function () {
    return this.get('model');
  },

  scrollToCrud() {
    this.scrollTo('#rolesCrud');
  }

});
