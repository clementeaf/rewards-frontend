import Ember from "ember";
import RequesterInjected from "../mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

export default Ember.Service.extend(RequesterInjected, {

  buscarVariablesOrdenadas(){
    var apiRequest = ApiRequest.getting('metrics/variables/');
    return this._requester().sendAndEmberize(apiRequest);
  },

  buscarMetricasPara(filtro){
    var apiRequest = ApiRequest.posting('metrics/snapshot/', filtro);
    return this._requester().sendAndEmberize(apiRequest);
  }
});
