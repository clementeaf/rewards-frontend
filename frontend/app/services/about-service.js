import Ember from "ember";
import RequesterInjected from "../mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Esta clase representa el servicio AboutService del backend como punto de acceso a informacion
 * acerca del sistema mismo (desde el frontend)
 */
export default Ember.Service.extend(RequesterInjected, {

  getPerformanceData(){
    return this.api_get('method-performance');
  },

  getVmParameters(){
    return this.api_get('vm-parameters');
  },

  getLastError(){
    return this.api_get('last-error');
  },

  obtenerVersion(){
    return this.api_get('version');
  },

  ejecutarGroovy(parametros){
    const apiRequest = ApiRequest.posting('about/ejecutar/', parametros);
    return this._requester().send(apiRequest);
  },

  listarLoggers(){
    const apiRequest = ApiRequest.getting('about/logs/');
    return this._requester().sendAndEmberize(apiRequest);
  },

  ajustarLog(ajuste){
    const apiRequest = ApiRequest.posting('about/logs/', ajuste);
    return this._requester().sendAndEmberize(apiRequest);
  },

  instalarEspiaEn(logger){
    const apiRequest = ApiRequest.posting('about/logs/spy/' + logger);
    return this._requester().send(apiRequest);
  },
  desinstalarEspiaDe(logger){
    const apiRequest = ApiRequest.deleting('about/logs/spy/' + logger);
    return this._requester().send(apiRequest);
  },
  obtenerLogEspiado(){
    const apiRequest = ApiRequest.getting('about/logs/spy');
    return this._requester().sendAndEmberize(apiRequest);
  },

  api_get(action) {
    const apiRequest = ApiRequest.getting('about/' + action + '/');
    return this._requester().send(apiRequest);
  }
});
