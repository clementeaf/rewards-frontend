import Ember from 'ember';
import FormulariosDeAltaServiceInjected from "../../../mixins/formulario-de-alta-service-injected";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(FormulariosDeAltaServiceInjected,AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ACCEDER_A_EDITAR_FORMULARIO,

  model(formulario) {
    return this.formularioDeAltaService().findById(formulario.id);
  }
});
