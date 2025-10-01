import Ember from 'ember';
import FormularioDeAltaServiceInjected from '../../../mixins/formulario-de-alta-service-injected';
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(FormularioDeAltaServiceInjected,AuthorizedRoute, {
  requierePermiso: PermisosConocidos.VISUALIZAR_FORMULARIO,

  model: function(formulario) {
    return this.formularioDeAltaService().findById(formulario.id);
  }
});
