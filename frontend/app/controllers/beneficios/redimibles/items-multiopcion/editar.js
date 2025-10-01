import Ember from "ember";
import ItemsMultiopcionServiceInjected from "../../../../mixins/items-multiopcion-service-injected";
import NavigatorInjected from "../../../../mixins/navigator-injected";
import MessagerInjected from "../../../../mixins/messager-injected";
import Mensaje from "../../../../utils/mensaje";

export default Ember.Controller.extend(ItemsMultiopcionServiceInjected, NavigatorInjected, MessagerInjected, {

  actions: {
    guardarItemMultiopcion() {
      var itemMultiopcion = this.get('model');
      this.itemsMultiopcionService().update(itemMultiopcion).then(itemMultiopcionModificado => {
        this.navigator().navigateToItemsMultiopcion();
        this.messager().publicar(Mensaje.ITEM_MULTIOPCION_MODIFICADO, itemMultiopcionModificado);
      });
    }
  },

  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre"
      }
    }
  }
});
