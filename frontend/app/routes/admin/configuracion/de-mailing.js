import Ember from 'ember';
import MailingServiceInjected from '../../../mixins/mailing-service-injected';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import AuthorizedRoute from '../../../mixins/authorized-route';

export default Ember.Route.extend(MailingServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.REALIZAR_PRUEBAS_CONTRA_EMBLUE,

  model() {
    return this.mailingService().getDatosParaTestearEmblue();
  }
});
