import Ember from "ember";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";

export default Ember.Controller.extend(UsuarioActualServiceInjected, {
  puedeConsultarCuentas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAConsultarCuentas();
  })
});
