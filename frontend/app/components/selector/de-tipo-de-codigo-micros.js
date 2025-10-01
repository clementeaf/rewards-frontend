import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  tiposDeCodigoDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().tiposDeCodigoItemMicrosInCombo().then((tiposDeCodigo)=> {
      this.set('tiposDeCodigoDisponibles', tiposDeCodigo);
    });
  }

});
