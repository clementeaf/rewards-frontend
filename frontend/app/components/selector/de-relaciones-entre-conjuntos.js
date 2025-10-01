import Ember from "ember";
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  relacionesEntreConjuntos: Ember.A([]),

  init(){
    this._super(...arguments);
    this.combosService().relacionesEntreConjuntos().then(relacionesEntreConjuntos => {
      this.set('relacionesEntreConjuntos', relacionesEntreConjuntos);
    });
  }
});
