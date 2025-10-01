import Ember from "ember";

export default Ember.Mixin.create({
  _relojService: Ember.inject.service('reloj-service'),
  relojService(){
    return this.get('_relojService');
  }
});
