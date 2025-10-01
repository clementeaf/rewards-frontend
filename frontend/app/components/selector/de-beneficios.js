import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  beneficiosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().beneficiosConsumibles().then(beneficios => {
      this.set('beneficiosDisponibles', beneficios);
    });
  }
});
