import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'li',
  repartidorDeStarsBonus: null,
  classNames: ['collection-item', 'dismissable'],
  classNameBindings: ['existeUnRepartidor:hidden'],

  actions: {
    buildRepartidorDeStarsBonus(){
      this.set('repartidorDeStarsBonus', Ember.Object.create({ cantidadDeStarsBonus: 1 }));
    }
  },

  existeUnRepartidor: Ember.computed('repartidorDeStarsBonus', function() {
    return this.get('repartidorDeStarsBonus') !== null;
  })
});
