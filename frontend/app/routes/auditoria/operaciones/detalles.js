import Ember from "ember";
import OperacionesInjected from "../../../mixins/operaciones-service-injected";
import AuthorizedRoute from "../../../mixins/authorized-route";
import PermisosConocidos from "../../../utils/permisos-conocidos";


export default Ember.Route.extend(OperacionesInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.CONSULTAR_ESTADO_OPERACIONES,
  model: function(params) {
    return this.operacionesService().findById(params.operacion_id);
  }
});
