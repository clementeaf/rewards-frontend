import Ember from 'ember';
import ParametrosDePagina from '../../tos/parametros-de-pagina';

export default Ember.Component.extend({
  datosDePaginado: Ember.Object.create({
    parametrosDePagina: ParametrosDePagina.create(),
    returned: 0,
    total: 0
  }),

  paginas: Ember.computed('datosDePaginado', function () {
    return this.crearPaginas();
  }),

  cantidadTotalDePaginas: Ember.computed('datosDePaginado', function () {
    return Math.ceil(this._totalDeItems() / this._cantidadDeItemsPorPagina());
  }),

  numeroDePaginaActual: Ember.computed('datosDePaginado', function () {
    return this._offsetActual() / this._cantidadDeItemsPorPagina();
  }),

  esNecesarioPaginar: Ember.computed('cantidadTotalDePaginas', function () {
    return this._cantidadTotalDePaginas() > 1;
  }),

  crearPaginas() {
    let paginas = Ember.A();
    let cantidadDePaginas = this._cantidadTotalDePaginas();
    for (let i = 0; i < cantidadDePaginas; i++) {
      paginas.push(Ember.Object.create({numero: i, offset: this._calcularOffsetDeLaPagina(i)}));
    }
    return paginas;
  },

  _cantidadTotalDePaginas() {
    return this.get('cantidadTotalDePaginas');
  },

  _calcularOffsetDeLaPagina(numeroDePagina) {
    return this._cantidadDeItemsPorPagina() * numeroDePagina;
  },

  _totalDeItems() {
    return this.get('datosDePaginado.total');
  },

  _getLimit: function () {
    return this.get('datosDePaginado.parametrosDePagina.limite');
  },

  _cantidadDeItemsPorPagina() {
    return this._getLimit();
  },

  _getOffset: function () {
    return this.get('datosDePaginado.parametrosDePagina.offset');
  },

  _offsetActual() {
    return this._getOffset();
  },

  _ejecutarAccionDeBusqueda(offset) {
    let accionDeBusqueda = this.get('accionDeBusqueda');
    if (!accionDeBusqueda) {
      throw new Error('Falta definir la acción de búsqueda para la barra de paginado');
    }
    return accionDeBusqueda(offset);
  },

  actions: {
    irAPagina(pagina) {
      this._ejecutarAccionDeBusqueda(pagina.get('offset'));
    },

    irAPaginaAnterior() {
      this._ejecutarAccionDeBusqueda(this._offsetActual() - this._cantidadDeItemsPorPagina());
    },

    irAPaginaSiguiente() {
      this._ejecutarAccionDeBusqueda(this._offsetActual() + this._cantidadDeItemsPorPagina());
    },

  }

});
