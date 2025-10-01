import Ember from 'ember';

export default Ember.Component.extend({
  labelDeFamilia: Ember.computed('familia', function () {
    let nombre = this._nombre();
    return nombre ? nombre : '- sin familia -';
  }),

  colorDeFamilia: Ember.computed('familia', function () {
    if (this._nombre()) {
      if (this._habilitada()) {
        return 'green';
      } else {
        return 'red';
      }
    }
    return 'grey';
  }),

  _nombre() {
    return this.get('familia.nombre');
  },

  _habilitada() {
    return this.get('familia.habilitada');
  }
});
