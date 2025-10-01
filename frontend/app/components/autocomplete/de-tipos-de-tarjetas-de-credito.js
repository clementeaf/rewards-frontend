import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  tarjetasDeCreditoDisponibles: Ember.A(),

  init() {
    this._super(...arguments);
    this.combosService().tiposDeTarjetasDeCredito().then(listaDeTipos => {
      this.set('tarjetasDeCreditoDisponibles', listaDeTipos);
    });
  }
});
