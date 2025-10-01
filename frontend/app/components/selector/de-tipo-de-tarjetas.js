import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  disabled: false,
  nullElegible: false,
  tiposDeTarjetasPosibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().tiposDeTarjetasInCombo().then(tiposDeTarjetas => {
      this.set('tiposDeTarjetasPosibles', tiposDeTarjetas);
    });
  }
});
