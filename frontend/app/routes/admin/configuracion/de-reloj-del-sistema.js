import Ember from 'ember';
import RelojService from '../../../mixins/reloj-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(RelojService, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION,

  model() {
    return this.relojService().buscarReloj().then();
  }
});
