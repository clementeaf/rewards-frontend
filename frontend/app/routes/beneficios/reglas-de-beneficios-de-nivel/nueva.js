import Ember from 'ember';
import AuthorizedRoute from "../../../mixins/authorized-route";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import ReglasService from "../../../mixins/reglas-service-injected";

export default Ember.Route.extend(AuthorizedRoute, ReglasService, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_BENEFICIOS,
  model() {
    return this.reglasService().nuevaReglaDeBeneficioDeNivel();
  }
});
