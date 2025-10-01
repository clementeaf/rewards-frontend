import Ember from "ember";

/**
 * Mixin que inyecta error-messages-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _errorMessages: Ember.inject.service('error-messages-service'),
  errorMessagesService(){
    return this.get('_errorMessages');
  },
});
