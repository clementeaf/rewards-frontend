import Ember from "ember";
import TiendaServiceInjected from "../../../mixins/tienda-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(TiendaServiceInjected,AuthorizedRoute, {
  requierePermiso: PermisosConocidos.SOPORTAR_TIENDA,
  model: function() {
    return this.tiendaService().nuevaTienda();
  }
});
