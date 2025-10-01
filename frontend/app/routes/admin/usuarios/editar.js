import Ember from 'ember';
import UsuarioServiceInjected from 'msr-backoffice-frontend/mixins/usuario-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(UsuarioServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_USUARIOS,
  model: function(params) {
    return this.usuarioService().buscarParaEdicion(params.usuario_id);
  }
});
