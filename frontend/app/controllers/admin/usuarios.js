import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, {

  actions: {
    quiereEditar(usuario){
      this._scrollToCrud();
      this.navigator().navigateToEditarUsuario(usuario);
    },
    quiereCrearNuevo(){
      this._scrollToCrud();
      this.navigator().navigateToCrearUsuario();
    }
  },

  mensajes: {
    usuarioCreado(usuarioCreado){
      this._usuarios().addObject(usuarioCreado);
    },
    usuarioModificado(usuarioModificado){
      var idModificado = usuarioModificado.get('id');
      var usuarioExistente = this._usuarios().findBy('id', idModificado);
      if (usuarioExistente) {
        usuarioExistente.setProperties(usuarioModificado);
      }
    },
    usuarioEliminado(usuarioEliminado){
      var idEliminado = usuarioEliminado.get('id');
      var usuarioExistente = this._usuarios().findBy('id', idEliminado);
      if (usuarioExistente) {
        this._usuarios().removeObject(usuarioExistente);
      }
    }
  },

  _usuarios: function () {
    return this.get('model');
  },

  _scrollToCrud() {
    this.scrollTo('#usuariosCrud');
  }
});
