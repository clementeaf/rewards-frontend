import Ember from "ember";

export default Ember.Mixin.create({
  _metricsService: Ember.inject.service('metrics-service'),
  metricsService(){
    return this.get('_metricsService');
  },
});
