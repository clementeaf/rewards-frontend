import Ember from 'ember';
import AuthorizedRoute from '../../../mixins/authorized-route';
import PermisosConocidos from '../../../utils/permisos-conocidos';
import MailsEncoladosServiceInjected from '../../../mixins/mails-encolados-service-injected';

export default Ember.Route.extend(MailsEncoladosServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_ESTADO_ENVIO_MAILS,

  model(params) {
    return this.mailsEncoladosService().buscarMailEncoladoPorId(params.mail_id);
  }
});
