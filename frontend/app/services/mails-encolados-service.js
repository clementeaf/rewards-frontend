import Ember from "ember";
import RequesterInjected from "../mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(RequesterInjected, SingleToResourceService, {
  pathDelRecurso: 'mails-encolados/',

  buscarMailsEncolados(filtro){
    let apiRequest = ApiRequest.posting(this.pathDelRecurso + "buscar", filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  buscarMailEncoladoPorId(idMailEncolado){
    let apiRequest = ApiRequest.getting(this.pathDelRecurso + idMailEncolado);
    return this.sendAndEmberize(apiRequest);
  },

  marcarMailEncoladoParaReenvio(mail){
    let apiRequest = ApiRequest.putting(this.pathDelRecurso + mail.get('id') + "/reenviar");
    return this.sendAndEmberize(apiRequest);
  },

});
