import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'configuracion/vencimiento-de-saldo',

  obtenerConfiguracion(){
    return this.findAll();
  },
  guardarConfiguracion(configuracion){
    return this.update(configuracion);
  }

});
