import Ember from "ember";
import SegmentosDeMiembrosServiceInjected from "../../../mixins/segmentos-de-miembros-service-injected";

export default Ember.Route.extend(SegmentosDeMiembrosServiceInjected, {
  model(params) {
    return this.segmentosDeMiembrosService().buscarDetalle(params.segmento_id).then(segmento =>
      Ember.Object.create({
        miembros: null,
        segmento: segmento
      })
    );
  }
});
