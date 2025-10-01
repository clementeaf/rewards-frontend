import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio para obtener mediciones de congestión de valuelink
 **/
export default Ember.Service.extend(SingleToResourceService, {
  rutaBase: 'congestion-vl/',

  obtenerMediciones(){
    var apiRequest = ApiRequest.getting(this.rutaBase + "mediciones");
    return this.sendAndEmberize(apiRequest);
  },

});
