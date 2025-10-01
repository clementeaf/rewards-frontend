import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'configuracion/control-de-fraude',

  obtenerConfiguracion(){
    return this.findAll();
  },
  actualizarConfiguracion(configuracion){
    return this.update(configuracion);
  }

});
