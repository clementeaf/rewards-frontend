import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  clase: Ember.computed('numeroDePaginaActual', function () {
    if (this.get('pagina.numero') === this._numeroDePaginaActual()) {
      return 'active';
    }
    return 'waves-effect';
  }),

  numeroParaMostrar: Ember.computed('pagina', function () {
    return this.numeroDeEstaPagina() + 1;
  }),

  numeroDeEstaPagina: function () {
    return this.get('pagina.numero');
  },

  _numeroDePaginaActual() {
    return this.get('numeroDePaginaActual');
  },

  actions: {
    cambiarDePagina() {
      this.get('accionDeCambioDePagina')(this.get('pagina'));
    }
  }

});
