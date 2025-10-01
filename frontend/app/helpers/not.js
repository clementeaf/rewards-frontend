import Ember from 'ember';

export function not(value) {
  return !value[0];
}

export default Ember.Helper.helper(not);
