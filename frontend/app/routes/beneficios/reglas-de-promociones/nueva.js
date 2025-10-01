import Ember from 'ember';
import ReglasService from "../../../mixins/reglas-service-injected";
import AuthorizedRoute from "../../../mixins/authorized-route";
import PermisosConocidos from "../../../utils/permisos-conocidos";


export default Ember.Route.extend(AuthorizedRoute, ReglasService, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_BENEFICIOS,
  model() {
    return this.reglasService().nuevaReglaDePromocion();
  }
});
