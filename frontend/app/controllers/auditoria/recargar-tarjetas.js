import Ember from 'ember';
import NavigatorInjected from '../../mixins/navigator-injected';
import ReceptorDeMensajes from '../../mixins/receptor-de-mensajes';
import ScrollerInjected from "../../mixins/scroller-injected";
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, UsuarioActualServiceInjected, {

  actions: {
    recargar(tarjeta){
      this._scrollToRecargar();
      this.navigator().navigateToRecargaDeTarjetaEnAuditoria(tarjeta);
    }
  },

  mensajes: {
    tarjetaRecargada(tarjeta){
      var idModificada = tarjeta.get('id');
      var tarjetaModificada = this._tarjetas().findBy('id', idModificada);
      if (tarjetaModificada) {
        tarjetaModificada.setProperties(tarjeta);
      }
    }
  },

  _tarjetas() {
    return this.get('model');
  },

  _scrollToRecargar() {
    this.scrollTo('#recargarTarjetas');
  }
});
