import Ember from 'ember';
import ItemsMultiopcionServiceInjected from "../../../mixins/items-multiopcion-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "../../../mixins/authorized-route";

export default Ember.Route.extend(ItemsMultiopcionServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.CONSULTAR_BENEFICIOS,
  model(){
    return this.itemsMultiopcionService().findAll();
  }
});
