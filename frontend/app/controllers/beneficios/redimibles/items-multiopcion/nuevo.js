import Ember from "ember";
import ItemsMultiOpcionServiceInjected from "../../../../mixins/items-multiopcion-service-injected";
import NavigatorInjected from "../../../../mixins/navigator-injected";
import MessagerInjected from "../../../../mixins/messager-injected";
import Mensaje from "../../../../utils/mensaje";

export default Ember.Controller.extend(ItemsMultiOpcionServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre"
      }
    }
  },

  actions: {
    guardarItemMultiopcion() {
      this.itemsMultiopcionService().create(this.get('model')).then(itemMultiOpcion => {
        this.navigator().navigateToItemsMultiopcion();
        this.messager().publicar(Mensaje.ITEM_MULTIOPCION_CREADO, itemMultiOpcion);
      });
    }
  }
});
