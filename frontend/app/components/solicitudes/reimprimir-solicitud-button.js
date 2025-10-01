import Ember from 'ember';
import SolicitudesServiceInjected from '../../mixins/solicitudes-service-injected';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import MessagerInjected from '../../mixins/messager-injected';
import Mensaje from '../../utils/mensaje';

export default Ember.Component.extend(SolicitudesServiceInjected, ToastServiceInjected, MessagerInjected, {

  laSolicitudEstaMarcadaParaReimprimir: Ember.computed('solicitud.status', function () {
    return this.get('solicitud.status') === 'Reimpresion';
  }),

  actions: {
    reimprimir(solicitud){
      this.solicitudesService().reimprimir(solicitud).then(solicitudMarcadaParaReimprimir => {
        this.toastService().confirmarExito('Solicitud marcada para re-impresion');
        this.messager().publicar(Mensaje.SOLICITUD_MARCADA_PARA_REIMPRESION, solicitudMarcadaParaReimprimir);
      });
    },
  }

});
