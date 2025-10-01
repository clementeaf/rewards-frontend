import Ember from 'ember';
import PermisosConocidos from '../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_TARJETAS,
  
  model(){
    return null;
  }
});
