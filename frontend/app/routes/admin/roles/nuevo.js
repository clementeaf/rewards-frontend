import Ember from 'ember';
import RolesServiceInjected from 'msr-backoffice-frontend/mixins/roles-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(RolesServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_SEGURIDAD,
  model: function() {
    return this.rolesService().nuevoRol();
  }
});
