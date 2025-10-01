import Ember from 'ember';

export default Ember.Component.extend({
  nombreDelNivel: {},
  classNameBindings: ['esWelcome:gray-text', 'esGreen:green-text', 'esGold:yellow-text', 'esGold:text-darken-2'],

  esWelcome: Ember.computed('nombreDelNivel', function() {
    return this.get('nombreDelNivel') === 'Welcome';
  }),

  esGreen: Ember.computed('nombreDelNivel', function() {
    return this.get('nombreDelNivel') === 'Green';
  }),

  esGold: Ember.computed('nombreDelNivel', function() {
    return this.get('nombreDelNivel') === 'Gold';
  }),
});
