import Ember from 'ember';
import TarjetasServiceInjected from '../../../mixins/tarjetas-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(TarjetasServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_TARJETAS,

  model(params) {
    return this.tarjetasService().edit(params.tarjeta_id);
  }
});
