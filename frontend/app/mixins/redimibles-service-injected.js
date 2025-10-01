import Ember from "ember";

/**
 * Mixin que injecta redimibles-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _redimiblesService: Ember.inject.service('redimibles-service'),
  redimiblesService(){
    return this.get('_redimiblesService');
  }
});
