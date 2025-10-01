import Ember from 'ember';

export function asCurrency(params) {
  var value = params[0];
  if (value === null || value === undefined) {
    value = '-';
  }
  return '$ ' + value;
}

export default Ember.Helper.helper(asCurrency);
