import Ember from 'ember';
import MailingServiceInjected from '../../mixins/mailing-service-injected';
import PermisosConocidos from '../../utils/permisos-conocidos';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(MailingServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_ESTADO_ENVIO_MAILS,

  model() {
    return null;
  }
});
