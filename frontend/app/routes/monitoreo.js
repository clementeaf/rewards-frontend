import Ember from "ember";
import PermisosConocidos from "../utils/permisos-conocidos";
import AuthorizedRoute from "../mixins/authorized-route";

export default Ember.Route.extend(AuthorizedRoute, {
  requierePermiso: PermisosConocidos.MONITOR_APP
});
