import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Esta clase representa el servicio UserService de usuarios Template del backend como punto de acceso a informacion
 * acerca del sistema mismo (desde el frontend)
 */
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'grupos-de-credenciales',

  nuevoGrupo(){
    return Ember.Object.create({roles: Ember.A([])});
  },

});
