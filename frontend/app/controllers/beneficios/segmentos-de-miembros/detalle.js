import Ember from 'ember';
import NavigatorInjected from '../../../mixins/navigator-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import SegmentoDeMiembrosServiceInjected from '../../../mixins/segmentos-de-miembros-service-injected';
import ParametrosDePagina from '../../../tos/parametros-de-pagina';

export default Ember.Controller.extend(NavigatorInjected, SegmentoDeMiembrosServiceInjected, ToastServiceInjected, {
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
  },

  _buscarPagina(offset) {
    let busquedaPaginada = this._armarBusquedaPaginada(ParametrosDePagina.create({limite: 10, offset: offset}));
    return this.segmentosDeMiembrosService().buscarMiembrosAsociados(busquedaPaginada);
  },

  _armarBusquedaPaginada(parametrosDePagina) {
    return {segmentoDeMiembros: this.get('model.segmento.id'), parametrosDePagina: parametrosDePagina};
  },

  _actualizarConResultadosDeBusqueda(resultados) {
    this.set('datosDePaginado', resultados.get('datosDePaginado'));
    return this.set('model.miembros', resultados.get('miembros'));
  },
});
