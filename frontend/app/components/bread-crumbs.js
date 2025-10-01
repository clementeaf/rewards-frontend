import Ember from "ember";

export default Ember.Component.extend({
  list: '',
  tagName: 'nav',
  classNames: 'nav-breadcrumbs',

  items: Ember.computed('list', function() {
    return this.get('list').split("|");
  })
});
