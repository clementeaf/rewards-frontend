import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio Miembros; injectado con el mixin MiembrosServiceInjected
 * Un miembro es el usuario del sistema que consume beneficios. El portador de una tarjeta
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'miembros/',

  findAll(){
    return this.findWithFilter(Ember.Object.create({}));
  },

  findByNroTarjeta(nroTarjeta){
    return this.findWithFilter(Ember.Object.create({numeroDeTarjeta: nroTarjeta}));
  },

  findWithFilter(filtro){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso, filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  edit(id){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + id + '/edit');
    return this.sendAndEmberize(apiRequest);
  },

  altaTarjeta(data){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + data.get('memberId') + '/alta-tarjeta', data);
    return this.sendAndEmberize(apiRequest);
  },

  update(miembroEnEdicion){
    var apiRequest = ApiRequest.putting(this.pathDelRecurso + miembroEnEdicion.get('id'), miembroEnEdicion);
    return this.sendAndEmberize(apiRequest);
  },

  actualizarSaldosConValuelink(id){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + id + '/actualizar-saldos-con-vl');
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  reporteDeBeneficiosAlDia(miembro){
    var apiRequest = ApiRequest.getting(`miembros/${miembro.id}/reporte-de-beneficios-al-dia/`);
    return this.sendAndEmberize(apiRequest);
  },

  informacionDeAuditoria(id){
    var apiRequest = ApiRequest.getting(`miembros/${id}/informacion-de-auditoria/`);
    return this.sendAndEmberize(apiRequest);
  },

  /**
   * Redefino los metodos heredados que todavía no deberíamos usar ni tenemos implementados en el backend
   */
  create(){
    throw new Error("Por ahora un miembro no puede ser creado");
  },

  deleteById(id, body) {
    let apiRequest = ApiRequest.posting("miembros/" + id + "/eliminar-miembro-rewards", body);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },
});
