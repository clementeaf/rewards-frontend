import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected,  UsuarioActualServiceInjected, {

  editandoTiendaNueva: Ember.computed('tiendaEditada', function () {
    var tiendaEditadaNoTieneId = !this.get('tiendaEditada.id');
    return tiendaEditadaNoTieneId;
  }),

  actions: {
    quiereEditar(tienda){
      this._seleccionarTienda(tienda);
      this.navigator().navigateToEditarTienda(tienda);
    },
    quiereCrearNuevo(){
      this._deseleccionarTienda();
      this._scrollToCrud();
      this.navigator().navigateToCrearTienda();
    }
  },

  puedeCrearTiendas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoACrearTiendas();
  }),


  mensajes: {
    tiendaCreada(tiendaCreada){
      this._tiendas().addObject(tiendaCreada);
      this._deseleccionarTienda();
    },
    tiendaModificada(tiendaModificada){
      var idModificado = tiendaModificada.get('id');
      var tiendaExistente = this._tiendas().findBy('id', idModificado);
      if (tiendaExistente) {
        tiendaExistente.setProperties(tiendaModificada);
      } else {
        Ember.Logger.error('No se encontró la tienda modificada[', idModificado, 'en la lista');
      }
      this._deseleccionarTienda();
    },
    tiendaEliminada(tiendaEliminada){
      var idEliminado = tiendaEliminada.get('id');
      var tiendaExistente = this._tiendas().findBy('id', idEliminado);
      if (tiendaExistente) {
        this._tiendas().removeObject(tiendaExistente);
      } else {
        Ember.Logger.error('No se encontró la tienda eliminada', idEliminado, 'en la lista');
      }
      this._deseleccionarTienda();
    },
    tiendaEnEdicion(tiendaEditada){
      this._seleccionarTienda(tiendaEditada);
    }
  },

  _tiendas: function () {
    return this.get('model');
  },
  _deseleccionarTienda(){
    this.set('tiendaEditada', null);
  },
  _seleccionarTienda(tienda){
    this.set('tiendaEditada', tienda);
  },
  _scrollToCrud() {
    this.scrollTo('#tiendaCrud');
  }

});
