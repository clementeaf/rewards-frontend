import Ember from "ember";
import SegmentoDeMiembrosServiceInjected from "../../../mixins/segmentos-de-miembros-service-injected";

export default Ember.Route.extend(SegmentoDeMiembrosServiceInjected, {
  model(params) {
    return this.segmentosDeMiembrosService().buscarSegmento(params.segmento_id).then(segmento =>
      Ember.Object.create({
        miembros: null,
        segmento: segmento
      })
    );
  }
});
