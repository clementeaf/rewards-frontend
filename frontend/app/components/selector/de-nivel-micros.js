import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  nivelesDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().nivelesItemMicrosInCombo().then((niveles)=> {
      this.set('nivelesDisponibles', niveles);
    });
  }

});
