import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  tiposDeDocumentoDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().tiposDeDocumento().then(tipos => {
      this.set('tiposDeDocumentoDisponibles', tipos);
    });
  }
});
