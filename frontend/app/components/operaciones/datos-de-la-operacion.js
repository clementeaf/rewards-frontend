import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDeLaOperacion: {},
  noHayDatosDeLaOperacion: Ember.computed('datosDeLaOperacion', function() {
    return !(this.get('datosDeLaOperacion').instanteEnElQueOcurrio ||
    this.get('datosDeLaOperacion').origenDeLaOperacion ||
    this.get('datosDeLaOperacion').total ||
    this.get('datosDeLaOperacion').modalidadDePago ||
    this.get('datosDeLaOperacion').codigoDelModoDePago ||
    this.get('datosDeLaOperacion').metodoDePago ||
    this.get('datosDeLaOperacion').numeroDeTarjetaContraparte ||
    this.get('datosDeLaOperacion').saldoAnteriorDeLaTarjetaDestino ||
    this.get('datosDeLaOperacion').saldoPosteriorDeLaTarjetaDestino ||
    this.get('datosDeLaOperacion').numeroDeCheck ||
    this.get('datosDeLaOperacion').starsGanadas ||
    this.get('datosDeLaOperacion').numeroDePos ||
    this.get('datosDeLaOperacion').nombreDeTienda ||
    this.get('datosDeLaOperacion').metodoDeLectura ||
    this.get('datosDeLaOperacion').usuario ||
    this.get('datosDeLaOperacion').tiempoDeValidezDelVoucherEntregado ||
    this.get('datosDeLaOperacion').beneficioEntregado ||
    this.get('datosDeLaOperacion').redimibleEntregado ||
    this.get('datosDeLaOperacion').idEnControlDeFraude ||
    this.get('datosDeLaOperacion').motivo );
  })
});
