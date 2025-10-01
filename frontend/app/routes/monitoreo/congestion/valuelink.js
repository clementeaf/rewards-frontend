import Ember from "ember";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";
import CongestionValuelinkInjected from "../../../mixins/monitor-congestion-valuelink-service-injected";

export default Ember.Route.extend(AuthorizedRoute, CongestionValuelinkInjected, {
  requierePermiso: PermisosConocidos.MONITOR_APP,

  model() {
    return this.congestionValuelinkService().obtenerMediciones();
  }
});
