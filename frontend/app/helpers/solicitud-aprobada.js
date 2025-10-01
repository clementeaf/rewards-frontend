import Ember from 'ember';

export function estaAprobada(solicitud) {
  return solicitud[0] ? solicitud[0].get('status') === 'Aprobada' : false;
}

export default Ember.Helper.helper(estaAprobada);
