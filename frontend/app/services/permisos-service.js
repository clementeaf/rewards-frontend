import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Esta clase representa el servicio PermisosService del backend para administrar los permisos
 */
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'permisos',

  /**
   * Redefinimos el metodo heredado para advertir el error antes de ir al backend
   */
  create(){
    throw new Error("Los permisos no pueden ser creados");
  },

  /**
   * Redefinimos el metodo heredado para advertir el error antes de ir al backend
   */
  deleteById(){
    throw new Error("Los permisos no pueden ser eliminados");
  },

});
