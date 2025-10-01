import Ember from 'ember';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';
import PermisosConocidos from '../../utils/permisos-conocidos';


export default Ember.Route.extend(AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_ITEM_MICROS,

  model() {
    return null;
  },
});
