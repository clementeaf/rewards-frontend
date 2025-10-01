import Ember from 'ember';

export function tipoDeRegla(params) {
  var tipoDeRegla = params[0];
  if(!Ember.isEmpty(tipoDeRegla)){
    return Ember.isEqual(tipoDeRegla, 'PROMOCION') ? 'Promoción' : 'De nivel';
  }
  return tipoDeRegla;
}

export default Ember.Helper.helper(tipoDeRegla);
