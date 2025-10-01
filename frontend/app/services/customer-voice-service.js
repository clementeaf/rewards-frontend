import Ember from "ember";
import ApiRequest from "../utils/api-request";
import RequesterInjected from "../mixins/requester-injected";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(RequesterInjected, SingleToResourceService, {
  pathDelRecurso: 'customer-voice',

  buscarConfiguracionDeBeneficioEntregable(){
    let apiRequest = ApiRequest.getting(this._pathDelRecurso() + '/beneficio-entregable');
    return this.sendAndEmberize(apiRequest);
  },

  updateConfiguracionDeBeneficioEntregable(configuracion){
    let apiRequest = ApiRequest.putting(this._pathDelRecurso() + '/beneficio-entregable', configuracion);
    return this.sendAndEmberize(apiRequest);
  },

  _pathDelRecurso() {
    return this.get('pathDelRecurso');
  },
});
