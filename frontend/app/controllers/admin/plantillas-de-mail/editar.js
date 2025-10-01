import Ember from "ember";
import MailingServiceInjected from "../../../mixins/mailing-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(MailingServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese un nombre o una descripción para la plantilla"
      },
      triggerId: {
        required: "Ingrese el trigger id de la plantilla"
      }
    }
  },

  actions: {
    guardarPlantilla() {
      var model = this.get('model');
      this.mailingService().update(model)
        .then((plantillaActualizada)=> {
          this.navigator().navigateToAdministarPlantillasDeMail();
          this.messager().publicar(Mensaje.PLANTILLA_MODIFICADA, plantillaActualizada);
        });
    },
    cancelar(){
      this.navigator().navigateToAdministarPlantillasDeMail();
    }
  }
});


