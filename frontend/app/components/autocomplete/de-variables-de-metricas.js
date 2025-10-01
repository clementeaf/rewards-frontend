import Ember from 'ember';
import MetricsServiceInjected from "../../mixins/metrics-service-injected";

export default Ember.Component.extend(MetricsServiceInjected, {
  init() {
    this._super(...arguments);
    this.metricsService().buscarVariablesOrdenadas().then((listaDeVariables) => {
      this.set('variablesDisponibles', listaDeVariables);
    });
  }
});
