import Ember from 'ember';
import SolicitudesServiceInjected from "../../mixins/solicitudes-service-injected";

export default Ember.Component.extend(SolicitudesServiceInjected,  {
  solicitudesEncontradas: Ember.A(),

  init(){
    this._super(...arguments);
    this.inicializarFiltro();
  },

  inicializarFiltro(){
    this.set('filtro', Ember.Object.create({
      sexo: null,
      status: null,
      tienda: null,
      dni: null,
      instanteDeIngresoDesde: null,
      instanteDeIngresoHasta: null,
      limite: 25
    }));
  },

  actions: {
    filtrarSolicitudes(){
      var filtro = this.get('filtro');
      this.solicitudesService().buscar(filtro).then((solicitudesEncontradas) => {
          this.set('solicitudesEncontradas',solicitudesEncontradas);
        });
    },

    limpiarFiltro(){
      this.inicializarFiltro();
    }

  }

});
