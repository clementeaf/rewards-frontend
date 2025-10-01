import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  tiendasDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().tiendas().then((tiendas)=> {
      this.set('tiendasDisponibles', tiendas);
    });
  }

});
