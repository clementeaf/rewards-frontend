import Ember from "ember";

/**
 * Mixin que injecta <%= dasherizedModuleName %>-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _<%= camelizedModuleName %>_service: Ember.inject.service('<%= dasherizedModuleName %>-service'),
  <%= camelizedModuleName %>Service(){
    return this.get('_<%= camelizedModuleName %>_service');
  },
});
