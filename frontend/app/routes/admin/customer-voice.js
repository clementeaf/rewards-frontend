import Ember from 'ember';
import PermisosConocidos from '../../utils/permisos-conocidos';
import CustomerServiceInjected from '../../mixins/customer-voice-service-injected';
import AuthorizedRoute from 'msr-backoffice-frontend/mixins/authorized-route';

export default Ember.Route.extend(CustomerServiceInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.ADMINISTRAR_CUSTOMER_VOICE,

  model() {
    return this.customerVoiceService().buscarConfiguracionDeBeneficioEntregable();
  }
});
