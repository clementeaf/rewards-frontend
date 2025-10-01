import Ember from "ember";

export default Ember.Component.extend({
  fueAceptada: Ember.computed('rechazada', function() {
    return !this._rechazada();
  }),

  _rechazada() {
    return this.get('rechazada');
  },
});
