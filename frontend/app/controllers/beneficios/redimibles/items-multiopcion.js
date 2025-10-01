import Ember from "ember";
import NavigatorInjected from "../../../mixins/navigator-injected";
import ReceptorDeMensajes from "../../../mixins/receptor-de-mensajes";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";
import ScrollerInjected from "../../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ReceptorDeMensajes, ScrollerInjected, UsuarioActualServiceInjected, {

  actions: {
    editar(item){
      if(this._puedeAdministrarBeneficios()){
        this.scrollToCrud();
        this.navigator().navigateToEditarItemMultiopcion(item);
      }
    },
    crearNuevo(){
      this.scrollToCrud();
      this.navigator().navigateToCrearItemMultiopcion();
    }
  },

  puedeCrearItemMultiopcion: Ember.computed(function () {
    return this._puedeCrearItemMultiopcion();
  }),

  mensajes: {
    itemMultiopcionCreado(itemCreado){
      this._items().addObject(itemCreado);
    },
    itemMultiopcionModificado(itemModificado){
      var idModificado = itemModificado.get('id');
      var itemExistente = this._items().findBy('id', idModificado);
      if (itemExistente) {
        itemExistente.setProperties(itemModificado);
      }
    }
  },

  _items() {
    return this.get('model');
  },

  _puedeCrearItemMultiopcion(){
    return this.usuarioActualService().estaAutorizadoAAdministrarBeneficios();
  },

  scrollToCrud(){
    this.scrollTo('#itemMultiopcionCrud');
  }
});
