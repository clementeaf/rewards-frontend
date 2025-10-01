import Ember from "ember";
import RequesterInjected from "../mixins/requester-injected";
import ApiRequest from "../utils/api-request";

/**
 * Esta clase mantiene la session del backend viva enviando un request cada cierto tiempo.
 * El tiempo inicia con un default y despues el backend puede modificar el intervalo segun la carga
 * que tenga
 */
export default Ember.Service.extend(RequesterInjected, {
  /**
   * Inicia el proceso de heartbeat enviando un request, y esperando un tiempo hasta enviar el siguiente
   */
  start(){
    this._sendHeartbeat();
  },

  // PRIVATE
  _sendHeartbeat(){
    var apiRequest = ApiRequest.getting('about/heartbeat');
    this._requester().send(apiRequest)
      .then((esperaDeHeartbeat)=> {
        this._planificarProximaEjecucionEn(esperaDeHeartbeat.delayEnMillis);
      });
  },
  _planificarProximaEjecucionEn(delayMillis){
    Ember.run.later(() => {
      this._sendHeartbeat();
    }, delayMillis);
  }
});
