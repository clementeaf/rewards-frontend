import Ember from 'ember';

export default Ember.Component.extend({
  bloqueada: Ember.Object.create({ id: 'BLOQUEADA', nombre: 'Bloqueada' }),
  habilitada: Ember.Object.create({ id: 'HABILITADA', nombre: 'Habilitada' }),

  estadoBooleano: Ember.computed('estado', {
    get() {
      return this._estaHabilitada();
    },
    set(key, value) {
      this.set('estado', value ? this.get('habilitada') : this.get('bloqueada'));
    }
  }),

  _estaHabilitada() {
    return this._estado().get('id') === this.get('habilitada.id');
  },

  _estado() {
    return this.get('estado');
  }
});
