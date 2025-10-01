import Ember from "ember";
import AuthorizedRoute from "../../mixins/authorized-route";
import PermisosConocidos from "../../utils/permisos-conocidos";

export default Ember.Route.extend(AuthorizedRoute,{
  requierePermiso: PermisosConocidos.CONSULTAR_CUENTAS,

  model() {
    return null;
  }
});
