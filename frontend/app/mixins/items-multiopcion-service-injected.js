import Ember from "ember";

export default Ember.Mixin.create({
  _itemsMultiopcionService: Ember.inject.service('items-multiopcion-service'),
  itemsMultiopcionService(){
    return this.get('_itemsMultiopcionService');
  }
});
