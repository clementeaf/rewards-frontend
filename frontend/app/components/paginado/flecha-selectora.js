import Ember from 'ember';

const TIPO_DE_FLECHA = {ATRAS: 'atras', ADELANTE: 'adelante'};

export default Ember.Component.extend({
  tagName: '',
  tipoDeFlecha: null,

  claseDeFlecha: Ember.computed('numeroDePaginaActual', function () {
    if (this._puedeCambiarDePagina()) {
      return 'waves-effect';
    } else {
      return 'disabled';
    }
  }),

  icono: Ember.computed('tipoDeFlecha', function () {
    if (this._esFlechaHaciaAtras()) {
      return 'chevron_left';
    } else {
      return 'chevron_right';
    }
  }),

  _puedeCambiarDePagina() {
    if (this._esFlechaHaciaAtras()) {
      return this._numeroDePaginaActual() !== 0;
    } else {
      return this._numeroDePaginaActual() !== this._cantidadTotalDePaginas() - 1;
    }
  },

  _esFlechaHaciaAtras() {
    return this.get('tipoDeFlecha') === TIPO_DE_FLECHA.ATRAS;
  },

  _cantidadTotalDePaginas() {
    return this.get('cantidadTotalDePaginas');
  },

  _numeroDePaginaActual() {
    return this.get('numeroDePaginaActual');
  },

  actions: {
    cambiarDePagina() {
      if (this._puedeCambiarDePagina()) {
        this.get('accionDeCambioDePagina')();
      }
    }
  }

});
