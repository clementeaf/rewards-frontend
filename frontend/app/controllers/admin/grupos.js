import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, {

  actions: {
    quiereEditar(grupo){
      this.scrollToCrud();
      this.navigator().navigateToEditarGrupo(grupo);
    },
    quiereCrearNuevo(){
      this.scrollToCrud();
      this.navigator().navigateToCrearGrupo();
    }
  },

  mensajes: {
    grupoDeCredencialesCreado(grupoCreado){
      this._grupos().addObject(grupoCreado);
    },
    grupoDeCredencialesModificado(grupoModificado){
      var idModificado = grupoModificado.get('id');
      var grupoExistente = this._grupos().findBy('id', idModificado);
      if (grupoExistente) {
        grupoExistente.setProperties(grupoModificado);
      } else {
        Ember.Logger.error('No se encontró el grupo modificado ', idModificado, ' en la lista de grupos del modelo');
      }
    },
    grupoDeCredencialesEliminado(grupoEliminado){
      var idEliminado = grupoEliminado.get('id');
      var grupoExistente = this._grupos().findBy('id', idEliminado);
      if (grupoExistente) {
        this._grupos().removeObject(grupoExistente);
      } else {
        Ember.Logger.error('No se encontró el grupo eliminado ', idEliminado, ' en la lista de grupos del modelo');
      }
    }
  },

  _grupos: function () {
    return this.get('model');
  },

  scrollToCrud() {
    this.scrollTo('#gruposCrud');
  },
});
