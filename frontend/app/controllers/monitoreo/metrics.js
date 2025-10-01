/* global moment */
import Ember from "ember";
import MetricsServiceInjected from "../../mixins/metrics-service-injected";

export default Ember.Controller.extend(MetricsServiceInjected, {
  filtro: Ember.Object.create({
    instanteMinimo: moment().startOf('day').toISOString(),
    instanteMaximo: moment().endOf('day').toISOString(),
    variablesIncluidas: Ember.A(),
    expresarEnPorcentaje: false
  }),
  snapshotSeries: [],

  actions: {
    getSnapshot(){
      let filtro = this.get('filtro');
      this.metricsService().buscarMetricasPara(filtro)
        .then((response)=> {
          this.set('snapshotSeries', response);
        });
    }
  },

});
