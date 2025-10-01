import Ember from "ember";
import TiendaServiceInjected from "../../../mixins/tienda-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(TiendaServiceInjected, NavigatorInjected, MessagerInjected, {
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

  actions: {
    crearTienda(){
      this.tiendaService().create(this.get('model'))
        .then((tiendaCreada)=> {
          this.navigator().navigateToAdministrarTiendas();
          this.messager().publicar(Mensaje.TIENDA_CREADA, tiendaCreada);
        });
    },
    resetearFormulario(){
      this.set('model', this.tiendaService().nuevaTienda());
    }
  }
});
