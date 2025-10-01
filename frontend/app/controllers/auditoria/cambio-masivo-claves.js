import Ember from "ember";
import ScrollerInjected from "../../mixins/scroller-injected";
import NavigatorInjected from "../../mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ToastServiceInjected from "../../mixins/toast-service-injected";
import CuentasServiceInjected from "../../mixins/cuentas-service-injected";


export default Ember.Controller.extend(NavigatorInjected, CuentasServiceInjected, ReceptorDeMensajes, ScrollerInjected, ToastServiceInjected, {
  actions: {
    cambiarClavesConCsv() {
      this._procesarCsv(() => this.cuentasService().cambioMasivoClavesDesdeCsv(this.get('model.csvAgregar')), 'cambiaron las claves de');
    },
  },


  _procesarCsv: function (bloque, mensajito) {
    this.set('noPuedeProcesarArchivo', true);
    let a = document.createElement("a");
    a.style = "display: none";
    bloque(this.get('model.segmento')).then((result) => {
      this.toastService().confirmarExito(`se ${mensajito} ${result.cantidad} miembros`);
    }).finally(() => {
      this.set('noPuedeProcesarArchivo', false);
    });
  },


});
