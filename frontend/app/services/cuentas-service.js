import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";
import MultiPartRequester from "../utils/multipart-request";

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'cuentas/',

  actualizarEmail(cuenta, nuevoEmail, motivo){
    let apiRequest = ApiRequest.putting(this.pathDelRecurso + cuenta.get('id') + "/email", { newEmail: nuevoEmail, motivoDeEdicion: motivo });
    return this.sendAndEmberize(apiRequest);
  },

  actualizarPassword(cuenta, nuevaPassword){
    let apiRequest = ApiRequest.putting(this.pathDelRecurso + cuenta.get('id') + "/password", { newPassword: nuevaPassword });
    return this.sendAndEmberize(apiRequest);
  },

  verificar(cuenta){
    let apiRequest = ApiRequest.posting(this.pathDelRecurso + cuenta.get('id') + "/verificar");
    return this.sendAndEmberize(apiRequest);
  },

  filtrar(filtro) {
    let apiRequest = ApiRequest.posting(this.pathDelRecurso, filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  cambioMasivoClavesDesdeCsv(csv){
    const apiRequest = MultiPartRequester.posting(this.pathDelRecurso  + "/cambio-masivo-claves-desde-csv", {}, {idMiembros:csv});
    return this.sendAndEmberizeWithSpinner(apiRequest);
  }

});
