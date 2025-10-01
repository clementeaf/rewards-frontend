import Ember from 'ember';
import PermisosServiceInjected from '../../mixins/permisos-service-injected';
import PermisosConocidos from '../../utils/permisos-conocidos';
import AuthorizedRoute from '../../mixins/authorized-route';

export default Ember.Route.extend(PermisosServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_SEGURIDAD,

  model(){
    return this.permisosService().findAll();
  }
});
