import Ember from "ember";
import ApiRequest from "../utils/api-request";
import RequesterInjected from "../mixins/requester-injected";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Este servicio permite acceso a los objetos que representan configuraciones para poder actualizarlos
 *
 **/
export default Ember.Service.extend(RequesterInjected, SingleToResourceService, {
  pathDelRecurso: 'configuracion',

  getVersionMinimaDelPos(){
    let apiRequest = ApiRequest.getting(this._pathDelRecurso() + '/version-minima-pos');
    return this._requester().send(apiRequest);
  },

  updateVersionMinimaDelPos(configDeVersion){
    let apiRequest = ApiRequest.putting(this._pathDelRecurso() + '/version-minima-pos', configDeVersion);
    return this._requester().send(apiRequest);
  },

  getConfiguracionDeBeneficioDeBebidaGratis(){
    let apiRequest = ApiRequest.getting(this._pathDelRecurso() + '/beneficio-de-bebida-gratis');
    return this.sendAndEmberize(apiRequest);
  },

  updateConfiguracionDeBeneficioDeBebidaGratis(configuracion){
    let apiRequest = ApiRequest.putting(this._pathDelRecurso() + '/beneficio-de-bebida-gratis', configuracion);
    return this.sendAndEmberize(apiRequest);
  },

  _pathDelRecurso() {
    return this.get('pathDelRecurso');
  },
});
