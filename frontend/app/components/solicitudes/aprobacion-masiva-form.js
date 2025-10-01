import Ember from 'ember';
import SolicitudesServiceInjected from '../../mixins/solicitudes-service-injected';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import MessagerInjected from '../../mixins/messager-injected';
import Mensaje from '../../utils/mensaje';

export default Ember.Component.extend(SolicitudesServiceInjected, ToastServiceInjected, MessagerInjected, {

  solicitudes: Ember.A(),
  comentario: '',
  longitudMaximaDeComentario: 500,

  noPuedeAprobarSolicitudes: Ember.computed('solicitudesSeleccionadas', 'numeroDeCaja', 'numeroDeSobre', 'comentarioDemasiadoLargo', function () {
    let noHaySolicitudesSeleccionadas = Ember.isEmpty(this._solicitudesSeleccionadas());
    let noSeIngresoElNumeroDeCaja = Ember.isEmpty(this._numeroDeCaja());
    let noSeIngresoElNumeroDeSobre = Ember.isEmpty(this._numeroDeSobre());
    return noHaySolicitudesSeleccionadas || noSeIngresoElNumeroDeCaja || noSeIngresoElNumeroDeSobre || this.get('comentarioDemasiadoLargo');
  }),

  aprobarSolicitudesLabel: Ember.computed('solicitudes.@each.seleccionada', function () {
    return 'Aprobar ' + this._solicitudesSeleccionadas().length + ' Solicitudes';
  }),

  solicitudesSeleccionadas: Ember.computed('solicitudes.@each.seleccionada', function () {
    return this._solicitudes().filterBy('seleccionada', true);
  }),

  comentarioDemasiadoLargo: Ember.computed('comentario', function () {
    return this._comentario().length > this.get('longitudMaximaDeComentario');
  }),

  _solicitudesSeleccionadas(){
    return this.get('solicitudesSeleccionadas');
  },

  _solicitudes() {
    return this.get('solicitudes');
  },

  _numeroDeCaja(){
    return this.get('numeroDeCaja');
  },

  _numeroDeSobre(){
    return this.get('numeroDeSobre');
  },

  _comentario(){
    return this.get('comentario');
  },

  _direccionEnAdea(){
    return {numeroDeCaja: this._numeroDeCaja(), numeroDeSobre: this._numeroDeSobre(), comentario: this._comentario()};
  },

  _armarBundleDeSolicitudesParaAprobar(){
    let solicitudesSeleccionadas = this._solicitudesSeleccionadas().map((solicitud) => solicitud.id);
    return Ember.Object.create({solicitudesParaAprobar: solicitudesSeleccionadas, direccionEnAdea: this._direccionEnAdea()});
  },

  _reinicializarDireccionEnAdea(){
    this.set('numeroDeCaja', '');
    this.set('numeroDeSobre', '');
    this.set('comentario', '');
  },

  actions: {
    aprobarSolicitudes(){
      let solicitudesSeleccionadasParaAprobacion = this._armarBundleDeSolicitudesParaAprobar();

      this.solicitudesService().aprobar(solicitudesSeleccionadasParaAprobacion).then((solicitudesAprobadas) => {
        this.toastService().confirmarExito('Solicitudes aprobadas');
        this.messager().publicar(Mensaje.SOLICITUDES_DE_MEMBRESIA_APROBADAS, solicitudesAprobadas);
        this._reinicializarDireccionEnAdea();
      });
    },
  }

});
