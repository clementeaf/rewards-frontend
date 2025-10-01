import Ember from 'ember';
import MiembrosServiceInjected from '../../mixins/miembros-service-injected';
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';
import ParametrosDePagina from '../../tos/parametros-de-pagina';
import SegmentoDeMiembrosServiceInjected from '../../mixins/segmentos-de-miembros-service-injected';

export default Ember.Component.extend(MiembrosServiceInjected, UsuarioActualServiceInjected, SegmentoDeMiembrosServiceInjected, {
  puedeFiltrarPorNombre: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAFiltrarMiembrosPorNombre();
  }),

  miembrosEncontrados: null,

  init() {
    this._super(...arguments);
    this._inicializarFiltro();
  },

  _inicializarFiltro() {
    this.set('filtro', Ember.Object.create({
      nivel: null,
      sexo: null,
      bebidaFavorita: null,
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
      this._inicializarFiltro();
    }
  },

  _buscarPagina(offset) {
    let filtro = this.get('filtro');
    let busquedaPaginada = this._armarBusquedaPaginada(filtro, ParametrosDePagina.create({limite: filtro.get('limite'), offset: offset}));
    return this.segmentosDeMiembrosService().buscarMiembros(busquedaPaginada);
  },

  _armarBusquedaPaginada(filtro, parametrosDePagina) {
    return {segmentoDeMiembros: this.get('segmento.id'), datosDeFiltroDeMiembros: filtro, parametrosDePagina: parametrosDePagina};
  },

  _actualizarConResultadosDeBusqueda(resultados) {
    this.set('datosDePaginado', resultados.get('datosDePaginado'));
    return this.set('miembrosEncontrados', resultados.get('miembros'));
  },
});
