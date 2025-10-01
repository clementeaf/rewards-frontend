import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {

  init() {
    this._super(...arguments);
    this.combosService().itemsMicrosInCombo().then(itemsEncontrados => {
      this.set('itemsDisponibles', itemsEncontrados);
    });
  },

});
