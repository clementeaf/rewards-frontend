import Ember from 'ember';

export default Ember.Component.extend({
  valueChanged: Ember.observer('value', function() {
    let onChange = this.get('onchange');
    onChange();
  }),
});
