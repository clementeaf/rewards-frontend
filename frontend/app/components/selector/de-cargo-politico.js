import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  cargosPoliticosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().cargosPoliticos().then(cargos => {
      this.set('cargosPoliticosDisponibles', cargos);
    });
  }
});
