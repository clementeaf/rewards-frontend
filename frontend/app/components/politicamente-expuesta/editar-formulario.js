import Ember from 'ember';

export default Ember.Component.extend({
  setearDatosPoliticos: Ember.observer('formulario.politicamenteExpuesta', function() {
    if(this.get('formulario.politicamenteExpuesta')) {
      this.set('formulario.datosPoliticos', Ember.Object.create({
        inciso: null,
        cargoPolitico: null,
        subcargoPolitico: null,
        tipoDocumento: null,
        tipoIdentificacionFiscal: null
      }));
    }
    else {
      this.set('formulario.datosPoliticos', null);
    }
  })
});
