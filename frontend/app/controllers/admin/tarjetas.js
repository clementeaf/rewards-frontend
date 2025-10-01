import Ember from 'ember';
import NavigatorInjected from '../../mixins/navigator-injected';
import ReceptorDeMensajes from '../../mixins/receptor-de-mensajes';
import ScrollerInjected from '../../mixins/scroller-injected';
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, UsuarioActualServiceInjected, {

  puedeAdministrarTarjetas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarTarjetas();
  }),

  actions: {
    editar(tarjeta){
      this._scrollToCrud();
      this.navigator().navigateToEditarTarjeta(tarjeta);
    },
    detalle(tarjeta){
      this._scrollToCrud();
      this.navigator().navigateToDetalleTarjeta(tarjeta);
    },
    nueva(){
      this._scrollToCrud();
      this.navigator().navigateToCrearTarjeta();
    }
  },

  mensajes: {
    tarjetaCreada(nuevaTarjeta){
      this._tarjetas().addObject(nuevaTarjeta);
    },
    tarjetaModificada(tarjeta){
      var idModificada = tarjeta.get('id');
      var tarjetaModificada = this._tarjetas().findBy('id', idModificada);
      if (tarjetaModificada) {
        tarjetaModificada.setProperties(tarjeta);
      }
    },
    tarjetaEliminada(tarjeta){
      var idEliminada = tarjeta.get('id');
      var tarjetaEliminada = this._tarjetas().findBy('id', idEliminada);
      if (tarjetaEliminada) {
        this._tarjetas().removeObject(tarjetaEliminada);
      }
    }
  },

  _tarjetas() {
    return this.get('model');
  },

  _scrollToCrud() {
    this.scrollTo('#tarjetasCrud');
  }
});
