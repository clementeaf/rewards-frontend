import Ember from "ember";
import CombosService from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosService, {
  formasDeFiltrarMontoPosibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().comparadoresDeMontos()
      .then((listaDeComparadores)=> {
        this.set('formasDeFiltrarMontoPosibles', listaDeComparadores);
      });
  }
});
