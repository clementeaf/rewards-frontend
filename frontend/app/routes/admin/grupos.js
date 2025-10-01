import Ember from 'ember';
import GrupoDeUsuarioServiceInjected from '../../mixins/grupo-de-usuario-service-injected';
import PermisosConocidos from '../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(GrupoDeUsuarioServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_SEGURIDAD,

  model(){
    return this.grupoDeUsuarioService().findAll();
  },
});
