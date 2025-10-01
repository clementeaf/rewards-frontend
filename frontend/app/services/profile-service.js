import Ember from "ember";
import RequesterInjected from "msr-backoffice-frontend/mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Servicio Profile; injectado con el mixin ProfileServiceInjected
 *
 * empieza, frena y obtiene la informacion del profiler del backend
 **/
export default Ember.Service.extend(RequesterInjected, {
  ruta: 'profile',

  obtenerArbol(){
    var apiRequest = ApiRequest.getting(this.ruta + '/obtenerArbol/');
    return this._requester().send(apiRequest);
  },

  detenerProfiling(){
    var apiRequest = ApiRequest.getting(this.ruta + '/frenar/');
    return this._requester().send(apiRequest);
  },

  empezarProfiling(parametros){
    var apiRequest = ApiRequest.posting(this.ruta + '/empezar/',  parametros );
    return this._requester().send(apiRequest);
  }
});
