import Ember from "ember";

export default Ember.Mixin.create({
  _mailingService: Ember.inject.service('mailing-service'),
  mailingService() {
    return this.get('_mailingService');
  }
});
