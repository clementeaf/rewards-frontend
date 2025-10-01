import Ember from 'ember';

export default Ember.Component.extend({
  solicitudes: Ember.A(),

  totalSolicitudes: Ember.computed('solicitudes', function () {
    return this._solicitudes().length;
  }),

  totalSolicitudesPendientes: Ember.computed('solicitudes.@each.status', function () {
    return this._solicitudes().filterBy('status', 'Pendiente').length;
  }),

  totalSolicitudesPostergadas: Ember.computed('solicitudes.@each.status', function () {
    return this._solicitudes().filterBy('status', 'Postergada').length;
  }),

  totalSolicitudesAprobadas: Ember.computed('solicitudes.@each.status', function () {
    return this._solicitudes().filterBy('status', 'Aprobada').length;
  }),

  _solicitudes() {
    return this.get('solicitudes');
  }
});
