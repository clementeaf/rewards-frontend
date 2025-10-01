
import Ember from 'ember';
import ItemsMicrosServiceInjected from '../../mixins/items-micros-service-injected';
import NavigatorInjected from '../../mixins/navigator-injected';
import ToastServiceInjected from '../../mixins/toast-service-injected';
import ReceptorDeMensajes from '../../mixins/receptor-de-mensajes';
import ScrollerInjected from '../../mixins/scroller-injected';

export default Ember.Controller.extend(ItemsMicrosServiceInjected, NavigatorInjected, ReceptorDeMensajes, ToastServiceInjected, ScrollerInjected, {
  actions: {
    editar(item) {
      this.scrollToCrud();
      this.navigator().navigateToEditarItemMicros(item);
    },
    crearNuevo() {
      this.scrollToCrud();
      this.navigator().navigateToCrearItemMicros();
    },
    iniciarSincronizacion() {
      this.itemsMicrosService().sincronizarManual()
        .then(() => {
          this.toastService().confirmarExito('Items Sincronizados');
        });
    }
  },

  mensajes: {
    itemMicrosCreado(itemCreado) {
      this._items().addObject(itemCreado);
    },
    itemMicrosModificado(itemModificado) {
      var idModificado = itemModificado.get('id');
      var itemExistente = this._items().findBy('id', idModificado);
      if (itemExistente) {
        itemExistente.setProperties(itemModificado);
      }
    }
  },

  _inicializarItems() {
    this.set('model', Ember.A());
  },

  _items() {
    if (!this.get('model')) {
      this._inicializarItems();
    }
    return this.get('model');
  },

  scrollToCrud() {
    this.scrollTo('#itemMicrosCrud');
  }

});
