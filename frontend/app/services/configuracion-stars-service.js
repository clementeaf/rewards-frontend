import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(SingleToResourceService, {
  rutaBase: "stars/",

  getConfiguracion(){
    var apiRequest = ApiRequest.getting(this.rutaBase);
    return this.sendAndEmberize(apiRequest);
  },

  configurarPorMonto(configuracionPorMonto) {
    var apiRequest = ApiRequest.posting(this.rutaBase + 'configurarPorMonto/', configuracionPorMonto);
    return this.sendAndEmberize(apiRequest);
  },

  configurarPorOperacion(configuracionPorOperacion) {
    var apiRequest = ApiRequest.posting(this.rutaBase + 'configurarPorOperacion/', configuracionPorOperacion);
    return this.sendAndEmberize(apiRequest);
  }
});
