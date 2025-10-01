import Ember from "ember";

/**
 * Mixin que injecta miembros-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _miembrosService: Ember.inject.service('miembros-service'),
  miembrosService(){
    return this.get('_miembrosService');
  }
});
