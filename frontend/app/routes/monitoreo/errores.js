import Ember from "ember";
import PermisosConocidos from "../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";
import ErroresServiceInjected from "../../mixins/errores-service-injected";

export default Ember.Route.extend(AuthorizedRoute, ErroresServiceInjected, {
  requierePermiso: PermisosConocidos.MONITOR_APP,
  model(){
    return this.erroresService().listarTodos();
  }
});
