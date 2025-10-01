import Ember from "ember";
import EjecutorDeTareasServiceInjected from "../../mixins/ejecutor-de-tareas-service-injected";
import PermisosConocidos from "../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(EjecutorDeTareasServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.CORRER_PROCESOS,
  model() {
    return this.ejecutorDeTareasService().tareas();
  }
});
