import Ember from "ember";
import SegmentosDeMiembrosServiceInjected from "../../mixins/segmentos-de-miembros-service-injected";

export default Ember.Route.extend(SegmentosDeMiembrosServiceInjected, {
  model(){
    return this.segmentosDeMiembrosService().buscarTodos();
  }
});
