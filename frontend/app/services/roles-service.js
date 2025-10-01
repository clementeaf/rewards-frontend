import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Esta clase representa el servicio RolesService del backend
 */
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'roles',

  nuevoRol(){
    return Ember.Object.create({permisos: Ember.A([])});
  }

});
