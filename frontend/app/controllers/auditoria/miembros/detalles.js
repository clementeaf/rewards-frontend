import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import ReceptorDeMensajes from '../../../mixins/receptor-de-mensajes';

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, {
  actions: {
    quiereVerDetallesDeOperacion(operacion){
      let idDelMiembro = this.get('model.miembro.id');
      let dniMiembro = this.get('model.miembro.datosPersonales.dni');
      let nombreMiembro = this.get('model.miembro.nombre');
      this.navigator().navigateToDetalleDeAuditoriaDeOperacionDelMiembro(operacion, idDelMiembro, dniMiembro, nombreMiembro);
    }
  },

  mensajes: {
    saldosActualizados(miembro){
      var miembroActualizado = this.get('model');
      if (miembroActualizado) {
        miembroActualizado.setProperties(miembro);
      }
    }
  },
});
