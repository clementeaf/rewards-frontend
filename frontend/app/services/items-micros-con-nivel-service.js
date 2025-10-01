import Ember from "ember";
import ApiRequest from "../utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio Miembros; injectado con el mixin MiembrosServiceInjected
 * Un miembro es el usuario del sistema que consume beneficios. El portador de una tarjeta
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'items-micros-con-nivel/',

  filtroDeItemConNivel(itemMicros, nivel){
    return Ember.Object.create({itemMicros: itemMicros, nivel: nivel});
  },

  buscarOCrearloSiNoExiste(itemMicros, nivel){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "/buscar-o-crear", this.filtroDeItemConNivel(itemMicros, nivel));
    return this.sendAndEmberize(apiRequest);
  }

});
