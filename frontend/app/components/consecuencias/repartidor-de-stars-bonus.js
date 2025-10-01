import Ember from "ember";

export default Ember.Component.extend({
  repartidorDeStarsBonus: null,
  actions: {
    sacarRepartidorDeStarsBonus() {
      this.set('repartidorDeStarsBonus', null);
    }
  }
});
