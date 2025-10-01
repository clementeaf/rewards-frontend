import Ember from "ember";
import PermisosServiceInjected from "../../../mixins/permisos-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(PermisosServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombrePublico: {
        required: "Ingrese el nombre breve",
      },
      descripcion: {
        required: "Ingrese una descripcion de la accion habilitada"
      }
    }
  },

  actions: {
    guardarPermiso(){
      var permiso = this.get('model');
      this.permisosService().update(permiso)
        .then((permisoActualizado)=> {
          this.navigator().navigateToAdministrarPermisos();
          this.messager().publicar(Mensaje.PERMISO_MODIFICADO, permisoActualizado);
        });
    },
  }
});
