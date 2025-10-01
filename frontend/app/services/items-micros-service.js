import Ember from "ember";
import ApiRequest from "../utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'items-micros/',

  nuevoItem(){
    return Ember.Object.create({tipoDeCodigo: null, codigo: null, nombre: null, familia: null, habilitado: true});
  },

  crearItemMicros(item) {
    let apiRequest = ApiRequest.posting(this.apiPathDeLosRecursos() + 'nuevo/', item);
    return this.sendAndEmberize(apiRequest);
  },

  familiasDeItemMicros() {
    return this.getting('familias-de-item-micros/');
  },

  sincronizarManual() {
    return this.getting('sincronizar');
  },

  buscarPaginando(busquedaPaginada) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso + 'paginando', busquedaPaginada);
    return this.sendAndEmberize(apiRequest);
  },

  getting(ruta) {
    let apiRequest = ApiRequest.getting(this.apiPathDeLosRecursos() + ruta);
    return this.sendAndEmberize(apiRequest);
  },

});
