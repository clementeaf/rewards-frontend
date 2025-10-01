import Ember from 'ember';
import PermisosServiceInjected from '../../../mixins/permisos-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(PermisosServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_SEGURIDAD,

  model(params){
    var idDePermiso = params.permiso_id;
    return this.permisosService().findById(idDePermiso);
  }
});
