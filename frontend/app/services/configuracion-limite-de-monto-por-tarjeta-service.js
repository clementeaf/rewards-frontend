import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'configuracion/limite-de-monto-por-tarjeta',

  obtenerConfiguracion(){
    return this.findAll();
  },
  actualizarLimite(configuracion){
    return this.update(configuracion);
  }

});
