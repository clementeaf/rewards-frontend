import Ember from "ember";
import TiendaServiceInjected from "../../../mixins/tienda-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(TiendaServiceInjected, NavigatorInjected, MessagerInjected, UsuarioActualServiceInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre de la tienda"
      },
      ip: {
        required: "Ingrese la ip de la tienda"
      }
    }
  },

  puedeBorrarTiendas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoABorrarTiendas();
  }),


  actions: {
    guardarTienda() {
      var model = this.get('model');
      this.tiendaService().update(model)
        .then((tiendaActualizada)=> {
          this.navigator().navigateToAdministrarTiendas();
          this.messager().publicar(Mensaje.TIENDA_MODIFICADA, tiendaActualizada);
        });
    },
    borrarTienda(){
      var model = this.get('model');
      this.tiendaService().deleteById(model.get('id'))
        .then(()=> {
          this.navigator().navigateToAdministrarTiendas();
          this.messager().publicar(Mensaje.TIENDA_ELIMINADA, model);
        });
    }
  }
});


