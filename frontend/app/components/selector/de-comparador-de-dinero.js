import Ember from "ember";
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  comparadoresDeDinero: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().comparadoresDeDinero().then(comparadores => {
      this.set('comparadoresDeDinero', comparadores);
    });
  }
});
