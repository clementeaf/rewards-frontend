import Ember from 'ember';
import FormularioDeAltaServiceInjected from '../../../mixins/formulario-de-alta-service-injected';
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(FormularioDeAltaServiceInjected,AuthorizedRoute, {
  requierePermiso: PermisosConocidos.CREAR_FORMULARIO,

  model() {
    return this.formularioDeAltaService().nuevoFormularioDeAlta();
  }
});
