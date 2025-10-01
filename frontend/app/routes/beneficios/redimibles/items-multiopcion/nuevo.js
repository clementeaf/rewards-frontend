import Ember from "ember";
import ItemsMultiOpcionServiceInjected from "../../../../mixins/items-multiopcion-service-injected";
import PermisosConocidos from "../../../../utils/permisos-conocidos";
import AuthorizedRoute from "../../../../mixins/authorized-route";

export default Ember.Route.extend(ItemsMultiOpcionServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_BENEFICIOS,
  model() {
    return this.itemsMultiopcionService().nuevoItem();
  },
});
