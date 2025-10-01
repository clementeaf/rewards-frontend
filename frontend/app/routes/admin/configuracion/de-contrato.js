import Ember from "ember";
import ConfiguracionDeContratoServiceInjected from "../../../mixins/configuracion-de-contrato-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(ConfiguracionDeContratoServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return Ember.RSVP.hash({
      configuracionDefault: this.configuracionDeContratoService().obtenerConfiguracionDefault(),
      configuracionParaPoliticamenteExpuestos: this.configuracionDeContratoService().obtenerConfiguracionParaPoliticamenteExpuestos()
    });
  }
});
