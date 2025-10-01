import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio para administrar las tarjetas rewards (operaciones ABM)
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'tarjetas',

  nuevaTarjeta(){
    return Ember.Object.create({
      tipo: null,
      saldo: 0,
      estado: Ember.Object.create({ id: 'HABILITADA', nombre: 'Habilitada'})
    });
  },

  buscarTarjetaParaRecargar(tarjeta_id) {
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "/" + tarjeta_id + "/recargar");
    return this.sendAndEmberize(apiRequest);
  },

  edit(tarjeta_id) {
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "/" + tarjeta_id + "/edit");
    return this.sendAndEmberize(apiRequest);
  },

  update(tarjeta){
    var id = tarjeta.get('id');
    var apiRequest = ApiRequest.putting(this.pathDelRecurso + "/" + id, tarjeta);
    return this.sendAndEmberize(apiRequest);
  },

  recargar(recargaDeTarjeta) {
    var id = recargaDeTarjeta.get('id');
    var apiRequest = ApiRequest.putting(this.pathDelRecurso + "/" + id + "/recargar", recargaDeTarjeta);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  find(filtro) {
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "/find", filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  }
});
