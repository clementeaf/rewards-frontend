import Ember from "ember";
import RedimiblesServiceInjected from "../../../../mixins/redimibles-service-injected";
import NavigatorInjected from "../../../../mixins/navigator-injected";
import MessagerInjected from "../../../../mixins/messager-injected";
import Mensaje from "../../../../utils/mensaje";

export default Ember.Controller.extend(RedimiblesServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre"
      },
      ticketCompleto: {
        required: "Indique si es ticket completo",
      }
    }
  },

  actions: {
    guardarRedimible() {
      const redimible = this.get('model');
      this.redimiblesService().update(redimible).then(redimibleModificado => {
        this.navigator().navigateToRedimibles();
        this.messager().publicar(Mensaje.REDIMIBLE_MODIFICADO, redimibleModificado);
      });
    },

    eliminarRedimible(){
      const redimible = this.get('model');
      this.redimiblesService().deleteById(redimible.get('id')).then(() => {
        this.navigator().navigateToRedimibles();
        this.messager().publicar(Mensaje.REDIMIBLE_ELIMINADO, redimible);
      });
    }
  },
});
