import Ember from 'ember';

export function mayorQueZero(params) {
  var datito = params[0];
  return datito > 0;
}

export default Ember.Helper.helper(mayorQueZero);
