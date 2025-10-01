import Ember from "ember";

export default Ember.Mixin.create({
  _customer_voice_service: Ember.inject.service('customer-voice-service'),
  customerVoiceService(){
    return this.get('_customer_voice_service');
  },
});
