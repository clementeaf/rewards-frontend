import Ember from "ember";
import ConfiguracionDeControlDeFraudeServiceInjected from "../../../mixins/configuracion-control-de-fraude-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(ConfiguracionDeControlDeFraudeServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return this.configuracionDeControlDeFraudeService().obtenerConfiguracion();
  }
});
