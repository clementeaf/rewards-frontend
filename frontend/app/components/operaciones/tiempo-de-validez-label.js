import Ember from 'ember';

export default Ember.Component.extend({
  esUnaCantidadDeTiempoConcreto: Ember.computed('tiempoDeValidez.cantidadDeTiempoConcreto', function () {
    return !Ember.isNone(this.get('tiempoDeValidez.cantidadDeTiempoConcreto'));
  }),

  cantidadDeTiempoLabel: Ember.computed('tiempoDeValidez.cantidadDeTiempoConcreto', function () {
    if (this.get('esUnaCantidadDeTiempoConcreto')) {
      return this.get('tiempoDeValidez.cantidadDeTiempoConcreto.cantidad') + ' ' + this.get('tiempoDeValidez.cantidadDeTiempoConcreto.unidadDeTiempo.nombre');
    } else {
      return 'Hasta fin de mes';
    }
  })
});
