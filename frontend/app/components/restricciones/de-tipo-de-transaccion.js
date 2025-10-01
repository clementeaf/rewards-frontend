import Ember from "ember";

export default Ember.Component.extend({
  restriccion: null,

  actions: {
    sacarRestriccion() {
      this.set('restriccion', null);
    }
  }
});
