import Ember from "ember";
import SolicitudesServiceInjected from '../../../mixins/solicitudes-service-injected';
import AuthorizedRoute from "../../../mixins/authorized-route";
import PermisosConocidos from "../../../utils/permisos-conocidos";

export default Ember.Route.extend(SolicitudesServiceInjected, AuthorizedRoute,  {
  requierePermiso: PermisosConocidos.CONSULTAR_SOLICITUDES,
  model: function(params) {
    return this.solicitudesService().findById(params.solicitud_id);
  }
});
