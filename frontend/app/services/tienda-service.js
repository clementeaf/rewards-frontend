import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";


/**
 * Servicio para administrar las tiendas (operaciones ABM)
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'tiendas',
  nuevaTienda(){
    return Ember.Object.create();
  },


});
