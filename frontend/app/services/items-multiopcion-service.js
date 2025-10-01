import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'items-multiopcion/',

  nuevoItem(){
    return Ember.Object.create({ nombre: null, itemsMicrosConNivel: Ember.A() });
  }
});
