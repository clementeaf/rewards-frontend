import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'li',
  multiplicadorDeStars: null,
  classNames: ['collection-item', 'dismissable'],
  classNameBindings: ['existeUnMultiplicador:hidden'],

  actions: {
    buildMultiplicadorDeStars(){
      this.set('multiplicadorDeStars', Ember.Object.create({ multiplicador: 2 }));
    }
  },

  existeUnMultiplicador: Ember.computed('multiplicadorDeStars', function() {
    return this.get('multiplicadorDeStars') !== null;
  })
});
