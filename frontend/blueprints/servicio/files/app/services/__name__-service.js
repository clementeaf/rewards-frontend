import Ember from "ember";
import RequesterInjected from "msr-backoffice-frontend/mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Servicio <%= classifiedModuleName %>; injectado con el mixin <%= classifiedModuleName %>ServiceInjected
 *
 * TODO: Escribí lo que hace; vag@.
 **/
export default Ember.Service.extend(RequesterInjected, {
  pathDelRecurso: '<%= classifiedModuleName %>',

  findAll(){
    var apiRequest = ApiRequest.getting(this.ruta);
    return this._requester().send(apiRequest);
  },

  findById(id){
    var apiRequest = ApiRequest.getting(this.ruta + '/' + id);
    return this._requester().send(apiRequest);
  },

  update(<%= camelizedModuleName %>){
    var apiRequest = ApiRequest.putting(this.pathDelRecurso, <%= camelizedModuleName %>);
    return this._requester().send(apiRequest);
  },

  create(<%= camelizedModuleName %>){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso, <%= camelizedModuleName %>);
    return this._requester().send(apiRequest);
  },

  delete(<%= camelizedModuleName %>){
    var apiRequest = ApiRequest.deleting(this.pathDelRecurso + '/' + <%= camelizedModuleName %>.id);
    return this._requester().send(apiRequest);
  },
});
