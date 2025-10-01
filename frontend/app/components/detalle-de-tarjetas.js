import Ember from "ember";
import MiembrosServiceInjected from "../mixins/miembros-service-injected";
import NavigatorInjected from '../mixins/navigator-injected';
import ToastServiceInjected from '../mixins/toast-service-injected';
import MessagerInjected from "../mixins/messager-injected";
import Mensaje from "../utils/mensaje";

export default Ember.Component.extend(NavigatorInjected, ToastServiceInjected, MiembrosServiceInjected, MessagerInjected, {

  actions: {
    actualizarSaldos(){
      this.miembrosService().actualizarSaldosConValuelink(this._miembroId()).then(infoActualizada => {
        this.toastService().confirmarExito('Saldos actualizados');
        var miembro = infoActualizada.get('miembro');
        this.navigator().navigateToDetalleDeAuditoriaDeMiembro(miembro);
        this.messager().publicar(Mensaje.SALDOS_ACTUALIZADOS, infoActualizada);
      });
    }
  },

  _miembroId: function () {
    return this.get('miembroId');
  },

});
