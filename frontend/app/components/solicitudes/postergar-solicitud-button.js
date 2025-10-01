import Ember from 'ember';
import SolicitudesServiceInjected from '../../mixins/solicitudes-service-injected';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import MessagerInjected from '../../mixins/messager-injected';
import Mensaje from '../../utils/mensaje';

export default Ember.Component.extend(SolicitudesServiceInjected, ToastServiceInjected, MessagerInjected, {

  laSolicitudEstaAprobada: Ember.computed('solicitud.status', function () {
    return this.get('solicitud.status') === 'Aprobada';
  }),

  laSolicitudEstaPendiente: Ember.computed('solicitud.status', function () {
    return this.get('solicitud.status') === 'Pendiente';
  }),

  actions: {
    postergar(solicitud){
      this.solicitudesService().postergar(solicitud).then(solicitudPostergada => {
        this.toastService().confirmarExito('Solicitud postergada');
        this.messager().publicar(Mensaje.SOLICITUD_DE_MEMBRESIA_POSTERGADA, solicitudPostergada);
      });
    },
  }

});
