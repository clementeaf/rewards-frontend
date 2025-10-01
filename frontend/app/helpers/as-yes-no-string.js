import Ember from 'ember';

export function asYesNoString(params) {
  var value = params[0] || false;
  return value ? 'Si' : 'No';
}

export default Ember.Helper.helper(asYesNoString);
