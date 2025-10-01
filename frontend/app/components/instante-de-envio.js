import Ember from "ember";

export default Ember.Component.extend({
  seEnvio: Ember.computed('instante', function() {
    return !!this._instante();
  }),

  _instante() {
    return this.get('instante');
  },
});
