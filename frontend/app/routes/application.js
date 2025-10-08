import Ember from "ember";
import UsuarioServiceInjected from "../mixins/usuario-service-injected";

export default Ember.Route.extend(UsuarioServiceInjected, {
  activate(){
    this._heartbeat().start();
  },
  model(){
    return this.usuarioService().findAndLoadCurrentUser();
  },

  heartbeatService: Ember.inject.service('heartbeat-service'),
  _heartbeat(){
    return this.get('heartbeatService');
  }
});
