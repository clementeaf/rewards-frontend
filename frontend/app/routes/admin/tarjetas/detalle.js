import Ember from 'ember';
import TarjetasServiceInjected from '../../../mixins/tarjetas-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(TarjetasServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_TARJETAS,

  model(params) {
    return this.tarjetasService().findById(params.tarjeta_id);
  }
});
