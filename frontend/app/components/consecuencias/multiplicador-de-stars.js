import Ember from "ember";

export default Ember.Component.extend({
  multiplicadorDeStars: null,
  actions: {
    sacarMultiplicadorDeStars() {
      this.set('multiplicadorDeStars', null);
    }
  }
});
