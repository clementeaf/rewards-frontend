import Ember from 'ember';

export function notNull(params) {
  var datito = params[0];
  return datito !== null;
}

export default Ember.Helper.helper(notNull);
