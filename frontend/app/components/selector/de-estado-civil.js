import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  estadosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().estadosCiviles().then(estadosCiviles => {
      this.set('estadosDisponibles', estadosCiviles);
    });
  }
});
