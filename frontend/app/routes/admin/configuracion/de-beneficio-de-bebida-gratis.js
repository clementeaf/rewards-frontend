import Ember from 'ember';
import AuthorizedRoute from '../../../mixins/authorized-route';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import ConfiguracionServiceInjected from '../../../mixins/configuracion-service-injected';

export default Ember.Route.extend(ConfiguracionServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,
  model() {
    return this.configuracionService().getConfiguracionDeBeneficioDeBebidaGratis();
  }
});
