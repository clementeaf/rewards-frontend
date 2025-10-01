import Ember from 'ember';

export default Ember.Component.extend({
  textoParaHabilitado: Ember.computed('femenino', function() {
    return this.get('femenino') ? 'HABILITADA' : 'HABILITADO';
  }),
  textoParaDeshabilitado: Ember.computed('femenino', function() {
    return this.get('femenino') ? 'DESHABILITADA' : 'DESHABILITADO';
  }),
});
