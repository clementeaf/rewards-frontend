import Ember from 'ember';
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import FormularioDeAltaService from "../../../mixins/formulario-de-alta-service-injected";

export default Ember.Controller.extend(FormularioDeAltaService, NavigatorInjected,{});
