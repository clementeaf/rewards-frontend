import Ember from "ember";
import CombosService from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosService, {
  duraciones: Ember.A([]),

  init(){
    this._super(...arguments);
    this.combosService().duracionDeLaRestriccionDeCantidadDeAdquisiciones().then(duraciones => {
      this.set('duraciones', duraciones);
    });
  }
});
