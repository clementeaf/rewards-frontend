import Ember from "ember";

/**
 * Esta clase representa el To del usuario logueado.
 * Definido como clase para darle algo de comportamiento
 */
export default Ember.Object.extend({
  /**
   * Indica si este usuario tiene el permiso indicado por nombre interno, como uno de sus
   * permisos habilitados
   * @param permisoConsultado El nombre identificador del permiso
   */
  tienePermiso(permisoConsultado){
    var permisosDisponibles = this.get('permisos');
    if (permisosDisponibles === null || permisosDisponibles === undefined){
      Ember.Logger.warn("No hay permisos definidos para este usuario - otorgando acceso por defecto");
      return true; // En desarrollo, permite acceso si no hay permisos
    }
    var tieneElNecesario = permisosDisponibles.includes(permisoConsultado);

    // Logging para debugging - remover en producción
    if (!tieneElNecesario) {
      Ember.Logger.info(`Usuario no tiene permiso: ${permisoConsultado}`);
    }

    return tieneElNecesario;
  },

});
