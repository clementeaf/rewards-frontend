import Ember from "ember";
import AuthorizedRoute from "../../mixins/authorized-route";
import PermisosConocidos from "../../utils/permisos-conocidos";
import ReglasServiceInjected from "../../mixins/reglas-service-injected";

export default Ember.Route.extend(AuthorizedRoute, ReglasServiceInjected, {
  requierePermiso: PermisosConocidos.CONSULTAR_BENEFICIOS,
  model(){
    return this.reglasService().reglasDeBeneficioDeNivel();
  }
});
