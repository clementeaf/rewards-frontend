import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Servicio que permite manipular la configuracion del contrato
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'configuracion/contrato',

  obtenerConfiguracionDefault(){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "/default");
    return this.sendAndEmberize(apiRequest);
  },

  obtenerConfiguracionParaPoliticamenteExpuestos(){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "/politicamente-expuesto");
    return this.sendAndEmberize(apiRequest);
  },

  guardarConfiguracion(configuracion){
    var apiRequest = ApiRequest.putting(this.pathDelRecurso, configuracion);
    return this.sendAndEmberize(apiRequest);
  }

});
