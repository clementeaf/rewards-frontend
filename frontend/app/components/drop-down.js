import Ember from "ember";

export default Ember.Component.extend({
  title: '',
  name: Ember.computed('title', function () {
    var title = this.get('title');
    if (!title) {
      return '';
    }
    return title.replace(/ +/g, "");
  }),

  didInsertElement() {
    this.$(".dropdown-button").dropdown();
  }
});
