import Ember from 'ember';
import ComboServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(ComboServiceInjected, {
  init() {
    this._super(...arguments);
    this.combosService().itemsMicrosInCombo().then((listaDeItems) => {
      this.set('itemsDisponibles', listaDeItems);
    });
  }
});
