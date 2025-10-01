import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  codigosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().codigosCupon().then(codigos => {
      this.set('codigosDisponibles', codigos);
    });
  }
});
