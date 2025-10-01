import Ember from "ember";
import SingleToResourceService from "../services/single-to-resource-service";

/**
 * Este servicio permite consultar los errores registrados en el backend
 */

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'errores',

  listarTodos(){
    return this.findAll();
  },

  buscarPorId(idDeError){
    return this.findById(idDeError);
  }

});
