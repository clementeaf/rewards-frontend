import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  tiposDeOperacionesPosibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().tiposDeOperaciones()
      .then((tiposDeOperacionesPosibles)=> {
        this.set('tiposDeOperacionesPosibles', tiposDeOperacionesPosibles);
      });
  }

});
