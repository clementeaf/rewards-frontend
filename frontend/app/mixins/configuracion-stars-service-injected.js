import Ember from "ember";

export default Ember.Mixin.create({
  _configuracionStarsService: Ember.inject.service('configuracion-stars-service'),
  configuracionStarsService(){
    return this.get('_configuracionStarsService');
  },
});
