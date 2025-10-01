import Ember from 'ember';
import UsuarioActualServiceInjected from "../mixins/usuario-actual-service-injected";

export default Ember.Component.extend(UsuarioActualServiceInjected, {

  puedeEditarSaldoDeTarjeta: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarSaldoDeTarjeta();
  }),

  puedeEditarBloqueoDesbloqueoDeTarjeta: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarBloqueoDesbloqueoDeTarjeta();
  }),

});
