import Ember from 'ember';
import ItemMicrosServiceInjected from '../../mixins/items-micros-service-injected';

export default Ember.Component.extend(ItemMicrosServiceInjected, {
  init() {
    this._super(...arguments);

    this.itemsMicrosService().familiasDeItemMicros().then(familiasEncontradas => {
      this.set('familiasDisponibles', familiasEncontradas);
    });
  },
});
