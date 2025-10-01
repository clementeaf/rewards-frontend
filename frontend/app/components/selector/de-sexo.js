import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  sexosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().sexos().then(sexos => {
      this.set('sexosDisponibles', sexos);
    });
  }
});
