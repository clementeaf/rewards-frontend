import Ember from "ember";
import TiendaServiceInjected from "../../../mixins/tienda-service-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";
import PermisosConocidos from "../../../utils/permisos-conocidos";
import AuthorizedRoute from "msr-backoffice-frontend/mixins/authorized-route";

export default Ember.Route.extend(TiendaServiceInjected, MessagerInjected, AuthorizedRoute, {
  requierePermiso: PermisosConocidos.SOPORTAR_TIENDA,

  model: function(params) {
    return this.tiendaService().findById(params.tienda_id)
      .then((tiendaEditada)=>{
        // Si lo ejecuto inmediatamente, el controller padre todavía no existe y no recibe el mensaje
        Ember.run.next(this, function() {
          this.messager().publicar(Mensaje.TIENDA_EN_EDICION, tiendaEditada);
        });
        return tiendaEditada;
      });
  }

});
