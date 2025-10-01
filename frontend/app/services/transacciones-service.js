import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'transacciones/',

  obtenerConfiguracion(){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + '/configuracion');
    return this.sendAndEmberize(apiRequest);
  },

  guardarConfiguracion(configuracion){
    var apiRequest = ApiRequest.putting(this.pathDelRecurso + '/configuracion', configuracion);
    return this.sendAndEmberize(apiRequest);
  }
});
