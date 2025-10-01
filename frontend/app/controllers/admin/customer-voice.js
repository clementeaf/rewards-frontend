import Ember from 'ember';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import CustomerServiceInjected from '../../mixins/customer-voice-service-injected';

export default Ember.Controller.extend(CustomerServiceInjected, ToastServiceInjected, {
  actions: {
    guardarConfiguracion(){
      let configuracion = this.get('model');
      this.customerVoiceService().updateConfiguracionDeBeneficioEntregable(configuracion).then(() => {
        this.toastService().confirmarExito("Beneficio actualizado");
      });
    }
  }
});
