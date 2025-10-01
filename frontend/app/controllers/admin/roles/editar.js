import Ember from "ember";
import RolesServiceInjected from "msr-backoffice-frontend/mixins/roles-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(RolesServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre del rol",
      }
    }
  },

  actions: {
    guardarRol() {
      var model = this.get('model');
      this.rolesService().update(model)
        .then((rolActualizado)=> {
          this.navigator().navigateToAdministrarRoles();
          this.messager().publicar(Mensaje.ROL_MODIFICADO, rolActualizado);
        });
    },
    borrarRol(){
      var model = this.get('model');
      this.rolesService().deleteById(model.get('id'))
        .then(()=> {
          this.navigator().navigateToAdministrarRoles();
          this.messager().publicar(Mensaje.ROL_ELIMINADO, model);
        });
    }
  }
});


