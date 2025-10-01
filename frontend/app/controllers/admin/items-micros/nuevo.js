import Ember from "ember";
import ItemsMicrosServiceInjected from '../../../mixins/items-micros-service-injected';
import NavigatorInjected from '../../../mixins/navigator-injected';
import MessagerInjected from '../../../mixins/messager-injected';
import Mensaje from '../../../utils/mensaje';
import ToastServiceInjected from '../../../mixins/toast-service-injected';

export default Ember.Controller.extend(ItemsMicrosServiceInjected, NavigatorInjected, MessagerInjected, ToastServiceInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre"
      }
    }
  },

  actions: {
    guardarItemMicros() {
      let itemMicros = this.get('model');
      this.itemsMicrosService().crearItemMicros(itemMicros).then(itemMicrosCreado => {
        this.messager().publicar(Mensaje.ITEM_MICROS_CREADO, itemMicrosCreado);
        this.toastService().confirmarExito('Item creado');
        this.navigator().navigateToItemsMicros();
      });
    }
  }
});
