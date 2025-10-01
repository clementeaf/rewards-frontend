import Ember from 'ember';
import AuthorizedRoute from '../../../mixins/authorized-route';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import ErroresServiceInjected from '../../../mixins/errores-service-injected';

export default Ember.Route.extend(AuthorizedRoute, ErroresServiceInjected, {
  requierePermiso: PermisosConocidos.MONITOR_APP,

  model(params) {
    return this.erroresService().buscarPorId(params.id_error);
  }
});
