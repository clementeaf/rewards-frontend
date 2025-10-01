import Ember from "ember";
import AuthorizedRoute from "../../mixins/authorized-route";
import PermisosConocidos from "../../utils/permisos-conocidos";
import OperacionesServiceInjected from "../../mixins/operaciones-service-injected";

export default Ember.Route.extend(OperacionesServiceInjected, AuthorizedRoute,{
  requierePermiso: PermisosConocidos.CONSULTAR_ESTADO_OPERACIONES,
  model(){
    return null;
  }
});
