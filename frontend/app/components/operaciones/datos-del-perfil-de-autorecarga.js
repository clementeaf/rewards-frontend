import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDeLaOperacion: {},
  noHayDatosDelPerfil: Ember.computed('perfilDeAutorecarga', function() {
    return !(this.get('perfilDeAutorecarga').estadoDePerfilDeAutoRecarga ||
    this.get('perfilDeAutorecarga').diaDelMes ||
    this.get('perfilDeAutorecarga').umbralDeSaldo );
  })
});
