import Ember from "ember";
import ItemsMicrosServiceInjected from '../../../mixins/items-micros-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(ItemsMicrosServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_ITEM_MICROS,
  model: function(itemMicros) {
    return this.itemsMicrosService().findById(itemMicros.id);
  },
});
