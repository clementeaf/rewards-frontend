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
    crear(){
      this.segmentosDeMiembrosService().crear(this.get('model')).then(segmento => {
        this.navigator().navigateToSegmentosDeMiembros();
        this.messager().publicar(Mensaje.SEGMENTO_CREADO, segmento);
      });
    },

    reset(){
      this.set('model', Ember.Object.create({}));
    }
  }
});
