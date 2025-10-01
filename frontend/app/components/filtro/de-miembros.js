import Ember from "ember";
import MiembrosServiceInjected from "../../mixins/miembros-service-injected";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";
import MockDataInjected from "../../mixins/mock-data-injected";

export default Ember.Component.extend(MiembrosServiceInjected, UsuarioActualServiceInjected, MockDataInjected, {
  miembrosEncontrados: Ember.A(),

  init(){
    this._super(...arguments);
    this.inicializarFiltro();
    this.showMockBanner();
  },

  inicializarFiltro(){
    this.set('filtro', Ember.Object.create({
      nivel: null,
      sexo: null,
      bebidaFavorita: null,
      limite: 10
    }));
  },

  puedeFiltrarPorNombre: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAFiltrarMiembrosPorNombre();
  }),

  actions: {
    filtrarMiembros(){
      this._filtrar().then(miembrosEncontrados => {
        this.set('miembrosEncontrados',miembrosEncontrados);
      });
    },

    limpiarFiltro(){
      this.inicializarFiltro();
    }
  },

  _filtrar() {
    let filtro = this.get('filtro');
    if (this.get('accionParaFiltrar')) {
      return this.get('accionParaFiltrar')(filtro);
    } else {
      return this.miembrosService().findWithFilter(filtro);
    }
  }
});
