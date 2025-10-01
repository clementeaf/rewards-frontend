import Ember from "ember";

export default Ember.Mixin.create({
  _reglasService: Ember.inject.service('reglas-service'),
  reglasService(){
    return this.get('_reglasService');
  }
});
