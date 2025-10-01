import Ember from 'ember';

export default Ember.Component.extend({
  hayUnIncisoSeleccionado: Ember.computed('datosPoliticos.inciso', function() {
    let inciso = this.get('datosPoliticos.inciso');
    return inciso !== null;
  }),

  esIncisoBoI: Ember.computed('datosPoliticos.inciso', function() {
    let inciso = this.get('datosPoliticos.inciso');
    return inciso.id === "INCISO_B" || inciso.id === "INCISO_I" ;
  }),

  hayUnCargoSeleccionado: Ember.computed('datosPoliticos.cargoPolitico', function() {
    let cargo = this.get('datosPoliticos.cargoPolitico');
    return cargo !== null;
  }),

  esNoIcluido: Ember.observer('datosPoliticos.inciso', function() {
    let inciso = this.get('datosPoliticos.inciso');
    if(inciso.id === "NO_INCLUIDO") {
      this.set('datosPoliticos.nombre', null);
      this.set('datosPoliticos.apellido', null);
      this.set('datosPoliticos.tipoDocumento', null);
      this.set('datosPoliticos.numeroDocumento', null);
    }
  })
});
