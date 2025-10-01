import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'configuracion/recargas-anuales',

  obtenerConfiguracion(){
    return this.findAll();
  },
  actualizarMaximoDeRecargas(configuracion){
    return this.update(configuracion);
  }

});
