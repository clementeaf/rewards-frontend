import Ember from 'ember';

export default Ember.Component.extend({
  esUnaCantidadDeTiempoConcreto: Ember.computed('tiempoDeValidez.cantidadDeTiempoConcreto', function() {
    return this.get('tiempoDeValidez.cantidadDeTiempoConcreto') != null;
  }),

  opcionElegida: Ember.computed('tiempoDeValidez','esUnaCantidadDeTiempoConcreto', {
    get() {
      if(this.get('esUnaCantidadDeTiempoConcreto')) {
        return this.get('opcionOtra');
      }else{
        return this.get('opcionMes');
      }
    },
    set(key, value) {
      value.get('accion').apply(this);
      return value;
    }
  }),

  init(){
    this._super(...arguments);
    this.set('opcionMes', Ember.Object.create({
      id: 1,
      label: 'Hasta fin de mes',
      accion: this._alSeleccionarHastaFinDeMes
    }));
    this.set('opcionOtra', Ember.Object.create({
      id: 2,
      label: 'Otra duración',
      accion: this._alSeleccionarOtraDuracion
    }));
    this.set('opcionesDeValidez', Ember.A([ this.get('opcionMes'), this.get('opcionOtra')]) );
  },

  _alSeleccionarHastaFinDeMes(){
    this.set('tiempoDeValidez.cantidadDeTiempoHastaFinDeMes', Ember.Object.create({}));

    // Este backup permite arrepentirse sin perder los datos del tiempo concreto
    this.set('cantidadDeTiempoConcretoBackup', this.get('tiempoDeValidez.cantidadDeTiempoConcreto'));
    this.set('tiempoDeValidez.cantidadDeTiempoConcreto', null);
  },

  _alSeleccionarOtraDuracion(){
    this.set('tiempoDeValidez.cantidadDeTiempoHastaFinDeMes', null);
    this.set('tiempoDeValidez.cantidadDeTiempoConcreto', this.get('cantidadDeTiempoConcretoBackup') || Ember.Object.create({
      unidadDeTiempo: null,
      cantidad: null
    }));
    this.set('cantidadDeTiempoConcretoBackup', null);
  }
});
