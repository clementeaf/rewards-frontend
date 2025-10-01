import Ember from 'ember';

export function isNull(params) {
  var datito = params[0];
  return datito === null;
}

export default Ember.Helper.helper(isNull);
