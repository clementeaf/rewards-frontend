import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDelReciboX: {},

  noHayDatosDelReciboX: Ember.computed('datosDelReciboX', function () {
    return Ember.isEmpty(this.get('datosDelReciboX.montoReciboXAnterior') ||
      this.get('datosDelReciboX.montoReciboXDescontado') ||
      this.get('datosDelReciboX.montoReciboXPosterior') ||
      this.get('datosDelReciboX.huboUnaInconsistenciaX'));
  }),

});
