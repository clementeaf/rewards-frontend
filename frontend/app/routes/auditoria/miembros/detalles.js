import Ember from "ember";
import AuthorizedRoute from "../../../mixins/authorized-route";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import MiembrosServiceInjected from "../../../mixins/miembros-service-injected";

export default Ember.Route.extend(AuthorizedRoute, MiembrosServiceInjected, {
  requierePermiso: PermisosConocidos.CONSULTAR_AUDITORIA_MIEMBROS,
  model(params) {
    return this.miembrosService().informacionDeAuditoria(params.miembro_id);
  }
});
