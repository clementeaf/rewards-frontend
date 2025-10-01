import Ember from 'ember';

export default Ember.Component.extend({

  permitirSeleccionarSolicitud: Ember.computed('solicitud.status', function () {
    return this.get('solicitud.status') !== 'Aprobada';
  }),

});
