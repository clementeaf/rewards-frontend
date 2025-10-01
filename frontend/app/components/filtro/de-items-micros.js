import Ember from 'ember';
import ItemsMicrosServiceInjected from '../../mixins/items-micros-service-injected';
import ParametrosDePagina from '../../tos/parametros-de-pagina';

export default Ember.Component.extend(ItemsMicrosServiceInjected, {
  itemsMicrosEncontrados: null,

  init() {
    this._super(...arguments);
    this.inicializarFiltro();
  },

  inicializarFiltro() {
    this.set('filtro', Ember.Object.create({
      tipoDeCodigo: null,
      codigo: null,
      habilitado: null,
      familiaDeItemMicros: null,
      limite: 10
    }));
  },

  actions: {
    busquedaNueva() {
      this._buscarPagina(0).then(resultados => {
        return this._actualizarConResultadosDeBusqueda(resultados);
      });
    },

    buscarPagina(offset) {
      this._buscarPagina(offset).then(resultados => {
        return this._actualizarConResultadosDeBusqueda(resultados);
      });
    },

    limpiarFiltro() {
      this.inicializarFiltro();
    },

  },

  _buscarPagina(offset) {
    let filtro = this.get('filtro');
    const parametrosDePagina = ParametrosDePagina.create({limite: filtro.get('limite'), offset: offset});
    let busquedaPaginada = this._armarBusquedaPaginada(filtro, parametrosDePagina);
    return this.itemsMicrosService().buscarPaginando(busquedaPaginada);
  },

  _armarBusquedaPaginada(filtro, parametrosDePagina) {
    return {datosDeFiltroDeItemsMicros: filtro, parametrosDePagina: parametrosDePagina};
  },

  _actualizarConResultadosDeBusqueda(resultados) {
    this.set('datosDePaginado', resultados.get('datosDePaginado'));
    return this.set('itemsMicrosEncontrados', resultados.get('itemsMicros'));
  },

});
