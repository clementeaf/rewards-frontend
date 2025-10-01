import Ember from "ember";
import ConfiguracionDeRecargasAnualesServiceInjected from "../../../mixins/configuracion-recargas-anuales-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(ConfiguracionDeRecargasAnualesServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return this.configuracionDeRecargasAnualesService().obtenerConfiguracion();
  }
});
