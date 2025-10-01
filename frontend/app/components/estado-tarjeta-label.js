import Ember from 'ember';

export default Ember.Component.extend({
  labelDeEstado: Ember.computed('estado', function() {
    var estado = this._estado();
    return estado ? estado : '-';
  }),

  colorDeEstado: Ember.computed('estado', function() {
    switch(this._estado()) {
      case 'Habilitada':
        return 'green';
      case 'Bloqueada':
        return 'red';
    }
    return 'grey';
  }),

  _estado() {
    return this.get('estado.nombre');
  }
});
