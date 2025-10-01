import Ember from 'ember';

export function noEstaVacio(params) {
  var array = params[0];
  return (array !== null) && array.length > 0;
}

export default Ember.Helper.helper(noEstaVacio);
