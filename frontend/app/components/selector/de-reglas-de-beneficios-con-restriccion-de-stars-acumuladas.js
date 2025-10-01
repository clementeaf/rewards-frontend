import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  reglasDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().reglasDeBeneficiosConRestriccionDeStarsAcumuladas().then(reglas => {
      this.set('reglasDisponibles', reglas);
    });
  }
});
