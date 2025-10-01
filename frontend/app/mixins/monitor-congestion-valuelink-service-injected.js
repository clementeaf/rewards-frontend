import Ember from "ember";

export default Ember.Mixin.create({
  _congestionValuelinkService: Ember.inject.service('monitor-congestion-valuelink-service'),
  congestionValuelinkService() {
    return this.get('_congestionValuelinkService');
  }
});
