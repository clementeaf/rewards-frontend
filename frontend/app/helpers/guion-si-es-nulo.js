import Ember from 'ember';

export function guionSiEsNulo(params) {
  var valor = params[0];
  if(valor === undefined || valor === null){
    return '-';
  }
  return valor;
}

export default Ember.Helper.helper(guionSiEsNulo);
