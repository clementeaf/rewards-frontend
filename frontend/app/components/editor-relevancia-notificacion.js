import Ember from "ember";

let NOVEDAD = 'NOVEDAD';
let LIFE_CYCLE = 'LIFE_CYCLE';

export default Ember.Component.extend({
  classNames: 'input-field',
  label: "Es Life Cycle",

  valorParaElCheck: Ember.computed('value', {
    get() {
      return this._calcularValorParaElcheck();
    },
    set(key, value) {
      this._tomarValorDesdeElCheck(value);
      return value;
    }
  }),

  _calcularValorParaElcheck(){
    let value = this.get('value');
    switch (value) {
      case LIFE_CYCLE:
        return true;
      case NOVEDAD:
        return false;
      default:
        Ember.Logger.error(`El backend manda un tipo de relevancia que no conocemos: ${value}`);
        return false; // para no romper
    }
  },

  _tomarValorDesdeElCheck(valor){
    let nuevoValue = valor ? LIFE_CYCLE : NOVEDAD;
    this.set('value', nuevoValue);
  }
});
