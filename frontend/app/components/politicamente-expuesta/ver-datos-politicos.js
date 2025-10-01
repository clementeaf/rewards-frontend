import Ember from 'ember';

export default Ember.Component.extend({
  esIncisoBoI: Ember.computed('datosPoliticos.inciso', function() {
    let inciso = this.get('datosPoliticos.inciso');
    return inciso.id === "INCISO_B" || inciso.id === "INCISO_I" ;
  })
});
