import Ember from 'ember';
import ConfiguracionDeVencimientoDeSaldoServiceInjected from '../../../mixins/configuracion-vencimiento-de-saldo-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(ConfiguracionDeVencimientoDeSaldoServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,
  model() {
    return this.configuracionDeVencimientoDeSaldoService().obtenerConfiguracion();
  }
});
