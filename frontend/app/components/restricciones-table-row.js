import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['collection-item', 'dismissable'],
  classNameBindings: ['existeLaRestriccion:restriccion-blocked'],

  actions: {
    addRestriccion(){
      if(!this.get('existeLaRestriccion')) {
        const restriccionFactoryMethod = this.get('buildRestriccion');
        const nuevaRestriccion = restriccionFactoryMethod();
        this.set('restriccion', nuevaRestriccion);
      }
    }
  },

  existeLaRestriccion: Ember.computed('restriccion', function() {
    return this.get('restriccion') !== null;
  })
});
