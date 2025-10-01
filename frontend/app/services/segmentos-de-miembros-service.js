import Ember from "ember";
import ApiRequest from "../utils/api-request";
import SingleToResourceService from "./single-to-resource-service";
import MultiPartRequester from "../utils/multipart-request";

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'segmentos-de-miembros/',

  buscarTodos() {
    const apiRequest = ApiRequest.getting(this.pathDelRecurso);
    return this.sendAndEmberize(apiRequest);
  },

  buscarListadoConDetalle() {
    const apiRequest = ApiRequest.getting(this.pathDelRecurso + '/listado-con-detalle');
    return this.sendAndEmberize(apiRequest);
  },

  buscarDetalle(id) {
    const apiRequest = ApiRequest.getting(this.pathDelRecurso + id + '/detalle');
    return this.sendAndEmberize(apiRequest);
  },

  buscarSegmento(id) {
    const apiRequest = ApiRequest.getting(this.pathDelRecurso + id);
    return this.sendAndEmberize(apiRequest);
  },

  buscarMiembros(busquedaPaginada) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso + 'miembros', busquedaPaginada);
    return this.sendAndEmberize(apiRequest);
  },

  buscarMiembrosAsociados(busquedaPaginada) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso + 'miembros-asociados', busquedaPaginada);
    return this.sendAndEmberize(apiRequest);
  },

  agregarRelacion(segmento, miembro) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso + segmento.get('id') + "/miembros/" + miembro.get('id'));
    return this.sendAndEmberize(apiRequest);
  },

  eliminarRelacion(segmento, miembro) {
    const apiRequest = ApiRequest.deleting(this.pathDelRecurso + segmento.get('id') + "/miembros/" + miembro.get('id'));
    return this.sendAndEmberize(apiRequest);
  },

  agregarRelaciones(segmento, miembrosIds) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso + segmento.get('id') + "/miembros/agregar", miembrosIds);
    return this.sendAndEmberize(apiRequest);
  },

  eliminarRelacionesParaMiembrosenElCsv(segmento, csv) {
    const apiRequest = MultiPartRequester.posting(this.pathDelRecurso + segmento.get('id') + "/miembros/eliminar-desde-csv", {}, {miembrosParaEliminar:csv});
    return this.sendAndEmberize(apiRequest);
  },

  agregarRelacionesParaMiembrosenElCsv(segmento, csv) {
    const apiRequest = MultiPartRequester.posting(this.pathDelRecurso + segmento.get('id') + "/miembros/agregar-desde-csv", {}, {miembrosParaAgregar:csv});
    return this.sendAndEmberize(apiRequest);
  },

  eliminarRelaciones(segmento, miembrosIds) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso + segmento.get('id') + "/miembros/eliminar", miembrosIds);
    return this.sendAndEmberize(apiRequest);
  },

  actualizar(segmento) {
    const apiRequest = ApiRequest.putting(this.pathDelRecurso + segmento.get('id'), segmento);
    return this.sendAndEmberize(apiRequest);
  },

  crear(segmento) {
    const apiRequest = ApiRequest.posting(this.pathDelRecurso, segmento);
    return this.sendAndEmberize(apiRequest);
  },

  eliminar(segmento) {
    const apiRequest = ApiRequest.deleting(this.pathDelRecurso + segmento.get('id'));
    return this.sendAndEmberize(apiRequest);
  },
});
