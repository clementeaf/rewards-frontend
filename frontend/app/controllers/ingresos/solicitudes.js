import Ember from 'ember';
import NavigatorInjected from 'msr-backoffice-frontend/mixins/navigator-injected';
import ScrollerInjected from '../../mixins/scroller-injected';
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';
import SolicitudesServiceInjected from '../../mixins/solicitudes-service-injected';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import ReceptorDeMensajes from '../../mixins/receptor-de-mensajes';

export default Ember.Controller.extend(SolicitudesServiceInjected, NavigatorInjected, ScrollerInjected,
  ToastServiceInjected, UsuarioActualServiceInjected, ReceptorDeMensajes, {

    solicitudes: Ember.A(),

    puedeEditarSolicitudes: Ember.computed(function () {
      return this.usuarioActualService().estaAutorizadoAEditarSolicitudes();
    }),

    solicitudesSeleccionadas: Ember.computed('solicitudes.@each.seleccionada', function () {
      return this._solicitudes().filterBy('seleccionada', true);
    }),

    solicitudesAprobables: Ember.computed('solicitudes.@each.status', function () {
      return this._solicitudes().filter(function (solicitud) {
        return solicitud.status !== 'Aprobada';
      });
    }),

    _solicitudesSeleccionadas(){
      return this.get('solicitudesSeleccionadas');
    },

    _solicitudes() {
      return this.get('solicitudes');
    },

    _actualizarEstadoDe(solicitudActualizda){
      let idModificado = solicitudActualizda.get('id');
      let existente = this._solicitudes().findBy('id', idModificado);
      if (existente) {
        existente.setProperties(solicitudActualizda);
      } else {
        Ember.Logger.error('No se encontró la solicitud modificada [', idModificado, '] en la lista');
      }
    },

    _marcarComoAprobadas(solicitudesAprobadas){
      solicitudesAprobadas.forEach((solicitudActualizada) => this._actualizarEstadoDe(solicitudActualizada));
    },

    _deseleccionarTodas(){
      this._solicitudes().setEach('seleccionada', false);
    },

    _seleccionarSolicitudesAprobables(){
      this.get('solicitudesAprobables').setEach('seleccionada', true);
    },

    actions: {
      aprobarSolicitudes(){
        let solicitudesSeleccionadasParaAprobacion = this._armarBundleDeSolicitudesParaAprobar();

        this.solicitudesService().aprobar(solicitudesSeleccionadasParaAprobacion).then((solicitudesAprobadas) => {
          this.toastService().confirmarExito('Solicitudes aprobadas');
          this._marcarComoAprobadas(solicitudesAprobadas);
          this._reinicializarDireccionEnAdea();
        });
      },

      verDetalleDeSolicitud(solicitud){
        this.scrollTo('#detalleDeSolicitud');
        this.navigator().navigateToDetallesDeSolicitud(solicitud);
      },

      seleccionarTodasToggle(){
        if (this._solicitudesSeleccionadas().length) {
          this._deseleccionarTodas();
        }
        else {
          this._seleccionarSolicitudesAprobables();
        }
      }
    },

    mensajes: {
      solicitudDeMembresiaPostergada(solicitudPostergada){
        this._actualizarEstadoDe(solicitudPostergada);
      },

      solicitudesDeMembresiaAprobadas(solicitudesAprobadas){
        this._marcarComoAprobadas(solicitudesAprobadas);
        this._deseleccionarTodas();
      },

      solicitudMarcadaParaReimpresion(solicitudMarcadaParaReimprimir){
        this._actualizarEstadoDe(solicitudMarcadaParaReimprimir);
      },
    }
  });
