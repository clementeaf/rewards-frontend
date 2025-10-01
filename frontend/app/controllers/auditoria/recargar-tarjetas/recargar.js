import Ember from "ember";
import TarjetasServiceInjected from "../../../mixins/tarjetas-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(TarjetasServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      motivo: {
        required: "",
      }
    }
  },

  actions: {
    recargar() {
      var model = this.get('model');
      this.tarjetasService().recargar(model)
        .then((tarjetaRecargada)=> {
          this.navigator().navigateToAuditoriaDeRecargaDeTarjetas();
          this.messager().publicar(Mensaje.TARJETA_RECARGADA, tarjetaRecargada);
        });
    }
  }
});


