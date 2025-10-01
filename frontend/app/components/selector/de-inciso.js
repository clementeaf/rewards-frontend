import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  incisosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().incisos().then(incisos => {
      this.set('incisosDisponibles', incisos);
    });
  }
});
