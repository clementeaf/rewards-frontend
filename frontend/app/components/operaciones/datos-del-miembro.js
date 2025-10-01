import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDelMiembro: {},
  noHayDatosDelMiembro: Ember.computed('datosDelMiembro', function() {
    return !(this.get('datosDelMiembro').nombreDelMiembro ||
    this.get('datosDelMiembro').nombreAnteriorDelMiembro ||
    this.get('datosDelMiembro').nombrePosteriorDelMiembro ||
    this.get('datosDelMiembro').apellidoAnteriorDelMiembro ||
    this.get('datosDelMiembro').apellidoPosteriorDelMiembro ||
    this.get('datosDelMiembro').emailAnteriorDelMiembro ||
    this.get('datosDelMiembro').emailPosteriorDelMiembro ||
    this.get('datosDelMiembro').fechaDeNacimientoAnteriorDelMiembro ||
    this.get('datosDelMiembro').fechaDeNacimientoPosteriorDelMiembro ||
    this.get('datosDelMiembro').bebidaFavoritaAnteriorDelMiembro ||
    this.get('datosDelMiembro').bebidafavoritaPosteriorDelMiembro ||
    this.get('datosDelMiembro').cantidadDeStarsAnteriorDelMiembro ||
    this.get('datosDelMiembro').cantidadDeStarsPosteriorDelMiembro ||
    this.get('datosDelMiembro').nivelAnteriorDelMiembro ||
    this.get('datosDelMiembro').nivelPosteriorDelMiembro ||
    this.get('datosDelMiembro').estadoDeHabilitacionAnteriorDelMiembro != null ||
    this.get('datosDelMiembro').estadoDeHabilitacionPosteriorDelMiembro != null);
  })
});
