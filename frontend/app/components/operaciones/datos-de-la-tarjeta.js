import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDeLaTarjeta: {},
  noHayDatosDeTarjeta: Ember.computed('datosDeLaTarjeta', function () {
    return !(
      this.get('datosDeLaTarjeta.numeroDeTarjeta') ||
      this.get('datosDeLaTarjeta.tipoDeTarjetaEnEseInstante') ||
      this.get('datosDeLaTarjeta.tipoDeTarjetaPosterior') ||
      this.get('datosDeLaTarjeta.tipoDeTarjetaAnterior') ||
      this.get('datosDeLaTarjeta.estadoAnteriorDeLaTarjeta') ||
      this.get('datosDeLaTarjeta.estadoPosteriorDeLaTarjeta') ||
      this.get('datosDeLaTarjeta.saldoAnteriorDeLaTarjeta') ||
      this.get('datosDeLaTarjeta.saldoPosteriorDeLaTarjeta') ||
      this.get('datosDeLaTarjeta.vencimientoAnteriorDeLaTarjeta') ||
      this.get('datosDeLaTarjeta.vencimientoPosteriorDeLaTarjeta') ||
      this.get('datosDeLaTarjeta.esLaPrimerTarjeta')
    );
  })
});
