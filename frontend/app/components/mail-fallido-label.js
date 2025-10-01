import Ember from "ember";

export default Ember.Component.extend({
  fueExitoso: Ember.computed('mensajeDeError', function() {
    return !this._mensajeDeError();
  }),

  _mensajeDeError() {
    return this.get('mensajeDeError');
  },
});
