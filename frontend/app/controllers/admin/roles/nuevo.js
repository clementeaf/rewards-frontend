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
    crearRol(){
      this.rolesService().create(this.get('model'))
        .then((rolCreado)=> {
          this.navigator().navigateToAdministrarRoles();
          this.messager().publicar(Mensaje.ROL_CREADO, rolCreado);
        });
    },
    resetearFormulario(){
      this.set('model', Ember.Object.create());
    }
  }
});
