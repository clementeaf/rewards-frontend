import Ember from "ember";
import ConfiguracionDeStarsService from "../../../mixins/configuracion-stars-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(ConfiguracionDeStarsService, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return this.configuracionStarsService().getConfiguracion();
  }
});
