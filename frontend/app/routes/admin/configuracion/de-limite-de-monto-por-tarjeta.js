import Ember from "ember";
import ConfiguracionDeLimiteDeMontoPorTarjetaServiceInjected from "../../../mixins/configuracion-limite-de-monto-por-tarjeta-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(ConfiguracionDeLimiteDeMontoPorTarjetaServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return this.configuracionDeLimiteDeMontoPorTarjetaService().obtenerConfiguracion();
  }
});
