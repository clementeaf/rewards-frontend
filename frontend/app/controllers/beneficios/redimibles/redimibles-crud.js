import Ember from "ember";
import NavigatorInjected from "../../../mixins/navigator-injected";
import ReceptorDeMensajes from "../../../mixins/receptor-de-mensajes";
import RedimiblesServiceInjected from "../../../mixins/redimibles-service-injected";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";
import ScrollerInjected from "../../../mixins/scroller-injected";

export default Ember.Controller.extend(RedimiblesServiceInjected, NavigatorInjected, ReceptorDeMensajes,
  ScrollerInjected, UsuarioActualServiceInjected, {

    actions: {
      quiereEditar(redimible){
        if (this._puedeAdministrarRedimibles()) {
          this.scrollToCrud();
          this.navigator().navigateToEditarRedimible(redimible);
        }
      },
      quiereCrearNuevo(){
        this.scrollToCrud();
        this.navigator().navigateToCrearRedimible();
      },
    },

    puedeAdministrarRedimibles: Ember.computed(function () {
      return this._puedeAdministrarRedimibles();
    }),

    mensajes: {
      redimibleCreado(nuevoRedimible){
        this._redimibles().addObject(nuevoRedimible);
      },
      redimibleModificado(redimibleModificada){
        var idModificado = redimibleModificada.get('id');
        var redimibleExistente = this._redimibles().findBy('id', idModificado);
        if (redimibleExistente) {
          redimibleExistente.setProperties(redimibleModificada);
        }
        else {
          Ember.Logger.error('No se encontró el redimible modificado con id ', idModificado, ' en la lista de redimibles del modelo');
        }
      },
      redimibleEliminado(redimibleEliminada){
        var idEliminado = redimibleEliminada.get('id');
        var redimibleExistente = this._redimibles().findBy('id', idEliminado);
        if (redimibleExistente) {
          this._redimibles().removeObject(redimibleExistente);
        } else {
          Ember.Logger.error('No se encontró el redimible eliminado ', idEliminado, ' en la lista');
        }
      }
    },

    _puedeAdministrarRedimibles(){
      return this.usuarioActualService().estaAutorizadoAAdministrarBeneficios();
    },

    _redimibles: function () {
      return this.get('model');
    },

    scrollToCrud(){
      this.scrollTo('#redimibleCrud');
    }
  });
