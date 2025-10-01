import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import OperacionesServiceInjected from "../../mixins/operaciones-service-injected";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";

export default Ember.Component.extend(OperacionesServiceInjected, UsuarioActualServiceInjected, NavigatorInjected, {
  init(){
    this._super(...arguments);
    this.inicializarFiltro();
    this.set('showDownloadButton', false);
  },

  inicializarFiltro(){
    let datosPredefinidos = this.get('datosPredefinidos');
    this.set('filtro', Ember.Object.create({
      dni: datosPredefinidos.dni,
      nombreABuscar: datosPredefinidos.nombre,
      tipoDeTarjeta: null,
      tipoDeOperacion: null,
      tiendaFiltrada: null,
      usuarioFiltrado: null,
      comparadorDeMonto: null,
      limite: 25
    }));
  },

  datosPredefinidosObserver: Ember.observer('datosPredefinidos', function() {
    this.inicializarFiltro();
  }),

  operacionesEncontradasObserver: Ember.observer('operacionesEncontradas', function() {
    const operaciones = this.get('operacionesEncontradas');
    this.set('showDownloadButton', operaciones && operaciones.length > 0);
  }),

  puedeFiltrarPorNombre: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAFiltrarOperacionesPorNombre();
  }),

  actions: {
    filtrar(){
      var filtro = this.get('filtro');
      this.operacionesService().buscarRecientesCon(filtro).then(operacionesEncontradas => {
        this.set('operacionesEncontradas', operacionesEncontradas);
      });
    },

    historico(){
      var filtro = this.get('filtro');
      this.operacionesService().findWithFilter(filtro).then(operacionesEncontradas => {
        this.set('operacionesEncontradas', operacionesEncontradas);
      });
    },

    limpiar(){
      this.inicializarFiltro();
      this.set('showDownloadButton', false);
      this.navigator().navigateToAuditoriaDeOperaciones();
    },

    downloadCSV() {
      const operaciones = this.get('operacionesEncontradas');
      if (!operaciones || operaciones.length === 0) return;

      const headers = [
        'Operación',
        'Fecha',
        'Tipo Tarjeta',
        'Nro. Tarjeta',
        'Miembro',
        'Origen',
        'Tienda',
        'Nro. POS',
        'Nro. Check',
        'Total',
        'Saldo',
        'Stars'
      ];

      const csvContent = [
        headers.join(','),
        ...operaciones.map(op => [
          op.tipoDeOperacion,
          op.instanteEnElQueOcurrio,
          op.tipoDeTarjetaEnEseInstante,
          op.numeroDeTarjeta,
          op.nombreDelMiembro,
          op.origenDeLaOperacion,
          op.nombreDeTienda,
          op.numeroDePos || '',
          op.numeroDeCheck || '',
          op.total || '',
          op.saldoPosteriorDeLaTarjeta || '',
          op.cantidadDeStarsPosteriorDelMiembro || ''
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'operaciones.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
});
