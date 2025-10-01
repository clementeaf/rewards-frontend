import Ember from "ember";
import Mensaje from "../../../../utils/mensaje";
import MessagerInjected from "../../../../mixins/messager-injected";
import NavigatorInjected from "../../../../mixins/navigator-injected";
import RedimiblesServiceInjected from "../../../../mixins/redimibles-service-injected";

export default Ember.Controller.extend(RedimiblesServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre",
      },
      ticketCompleto: {
        required: "Indique si es ticket completo",
      }
    }
  },

  actions: {
    crearRedimible(){
      this.redimiblesService().create(this.get('model')).then(redimibleCreado => {
        this.navigator().navigateToRedimibles();
        this.messager().publicar(Mensaje.REDIMIBLE_CREADO, redimibleCreado);
      });
    },

    resetearFormulario(){
      this.set('model', this.redimiblesService().nuevoRedimible());
    }
  },
});
