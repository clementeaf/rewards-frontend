import Ember from 'ember';

/**
 * Esta clase representa los parametros de una pagina en una busqueda paginada
 */
export default Ember.Object.extend({
  limite: 10,
  offset: 0,

});
