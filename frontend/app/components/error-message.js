import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['alert', 'alert-danger', 'fade', 'in', 'acitve'],
  
  didInsertElement() {
    this.$(".close").click(function () {
      Ember.$(".alert").hide();
    });
  }
});
// NO BORREMOS ESTE COMPONENTE POR LAS DUDAS
