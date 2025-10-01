import Ember from "ember";
import ReglasServiceInjected from "../../mixins/reglas-service-injected";
import AuthorizedRoute from "../../mixins/authorized-route";
import PermisosConocidos from "../../utils/permisos-conocidos";

export default Ember.Route.extend(ReglasServiceInjected, AuthorizedRoute, PermisosConocidos, {
  requierePermiso: PermisosConocidos.CONSULTAR_BENEFICIOS,
  model(){
    return this.reglasService().resumenDeBeneficios();
  }
});
