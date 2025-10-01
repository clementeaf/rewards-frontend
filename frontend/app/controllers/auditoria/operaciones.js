import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import ReceptorDeMensajes from "msr-backoffice-frontend/mixins/receptor-de-mensajes";
import OperacionesServiceInjected from "../../mixins/operaciones-service-injected";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(OperacionesServiceInjected, NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, {
  queryParams: ['idDeMiembro','dniMiembro','nombreMiembro'],
  idDeMiembro: "",
  dniMiembro: "",
  nombreMiembro: "",

  datosDeFiltroPredefinido: Ember.computed('dniMiembro', 'nombreMiembro', function() {
    return {dni: this.get('dniMiembro'), nombre: this.get('nombreMiembro')};
  }),

  actions: {
    quiereVerDetalles(operacion){
      this.scrollTo('#detalleDeOperacion');
      this.navigator().navigateToDetalleDeAuditoriaDeOperacion(operacion);
    }
  }
});
