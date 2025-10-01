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
      var itemMicros = this.get('model');
      this.itemsMicrosService().update(itemMicros).then(itemMicrosModificado => {
        this.messager().publicar(Mensaje.ITEM_MICROS_MODIFICADO, itemMicrosModificado);
        this.toastService().confirmarExito('Item modificado');
        this.navigator().navigateToItemsMicros();
      });
    }
  }
});
