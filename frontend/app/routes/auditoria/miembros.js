import Ember from "ember";
import AuthorizedRoute from "../../mixins/authorized-route";
import PermisosConocidos from "../../utils/permisos-conocidos";
import MiembrosInjected from "../../mixins/miembros-service-injected";

export default Ember.Route.extend( MiembrosInjected, AuthorizedRoute,{
  requierePermiso: PermisosConocidos.CONSULTAR_AUDITORIA_MIEMBROS,
  model(){
    return null;
  }
});
