import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Servicio que permite ejecutar tareas
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'ejecutor-de-tareas',

  tareas(){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso);
    return this.sendAndEmberize(apiRequest);
  },

  ejecutarTarea(tarea){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + '/ejecutar/' + tarea.id);
    return this.sendAndEmberize(apiRequest);
  }
});
