import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio operaciones injectado con el mixin OperacionesServiceInjected
 **/
export default Ember.Service.extend(SingleToResourceService, {
  rutaBase: 'operaciones/',

  buscarRecientesCon(filtro){
    var apiRequest = ApiRequest.posting(this.rutaBase + "recientes", filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  findWithFilter(filtro){
    var apiRequest = ApiRequest.posting(this.rutaBase, filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  findById(id){
    var apiRequest = ApiRequest.getting(this.rutaBase + id);
    return this.sendAndEmberize(apiRequest);
  },

  ultimasOperaciones(miembro){
    var apiRequest = ApiRequest.getting(this.rutaBase + "miembro/" + miembro.id);
    return this.sendAndEmberize(apiRequest);
  }
});
