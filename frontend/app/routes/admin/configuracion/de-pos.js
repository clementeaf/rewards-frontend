import Ember from "ember";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";
import TransaccionesServiceInjected from "../../../mixins/transacciones-service-injected";
import ConfiguracionServiceInjected from "../../../mixins/configuracion-service-injected";

export default Ember.Route.extend(TransaccionesServiceInjected, ConfiguracionServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return Ember.RSVP.hash({
      configuracionDeTransacciones: this.transaccionesService().obtenerConfiguracion(),
      configuracionDeVersionMinimaDelPos: this.configuracionService().getVersionMinimaDelPos()
    });
  }
});
