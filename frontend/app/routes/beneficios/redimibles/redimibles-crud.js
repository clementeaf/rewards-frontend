import Ember from "ember";
import RedimiblesServiceInjected from "../../../mixins/redimibles-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "../../../mixins/authorized-route";

export default Ember.Route.extend(RedimiblesServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.CONSULTAR_BENEFICIOS,
  model(){
    return this.redimiblesService().findAll();
  }
});
