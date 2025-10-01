import Ember from "ember";

export default Ember.Mixin.create({
  _mailsEncoladosService: Ember.inject.service('mails-encolados-service'),
  mailsEncoladosService() {
    return this.get('_mailsEncoladosService');
  }
});
