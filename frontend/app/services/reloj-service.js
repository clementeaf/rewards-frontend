import Ember from "ember";
import RequesterInjected from "../mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(SingleToResourceService, RequesterInjected, {
  buscarReloj(){
    var apiRequest = ApiRequest.getting("reloj/");
    return this.sendAndEmberize(apiRequest);
  },
  cambiarHora(reloj){
    var apiRequest = ApiRequest.posting("reloj/", reloj);
    return this._requester().send(apiRequest);
  }
});
