import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  init(){
    this._super(...arguments);
    this.combosService().obtenerEstadosDeSolicitudPosibles().then((estados)=> {
      this.set('estadosPosibles', estados);
    });
  }

});
