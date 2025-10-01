import Ember from "ember";
import Mensaje from "../../../utils/mensaje";
import MessagerInjected from "../../../mixins/messager-injected";
import NavigatorInjected from "../../../mixins/navigator-injected";
import SegmentosDeMiembrosServiceInjected from "../../../mixins/segmentos-de-miembros-service-injected";

export default Ember.Controller.extend(SegmentosDeMiembrosServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre del segmento"
      }
    }
  },

  actions: {
    actualizar() {
      let model = this.get('model');
      this.segmentosDeMiembrosService().actualizar(model).then(segmentoActualizado => {
        this.navigator().navigateToSegmentosDeMiembros();
        this.messager().publicar(Mensaje.SEGMENTO_MODIFICADO, segmentoActualizado);
      });
    },
  }
});
