import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    borrarItem(itemABorrar){
      var items = this.get('items');
      items.removeObject(itemABorrar);
    }
  },

});
