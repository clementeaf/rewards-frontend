import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  tiposDeIdentificacionFiscalDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().tiposDeIdentificacionFiscal().then(tipos => {
      this.set('tiposDeIdentificacionFiscalDisponibles', tipos);
    });
  }
});
