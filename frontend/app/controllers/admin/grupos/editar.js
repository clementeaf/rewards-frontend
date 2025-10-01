import Ember from "ember";
import GrupoDeUsuarioServiceInjected from "msr-backoffice-frontend/mixins/grupo-de-usuario-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(GrupoDeUsuarioServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre del grupo",
      }
    }
  },

  actions: {
    guardarGrupo() {
      var model = this.get('model');
      this.grupoDeUsuarioService().update(model)
        .then((grupoActualizado)=> {
          this.navigator().navigateToAdministrarGrupos();
          this.messager().publicar(Mensaje.GRUPO_DE_CREDENCIALES_MODIFICADO, grupoActualizado);
        });
    },
    borrarGrupo(){
      var model = this.get('model');
      this.grupoDeUsuarioService().deleteById(model.get('id'))
        .then(()=> {
          this.navigator().navigateToAdministrarGrupos();
          this.messager().publicar(Mensaje.GRUPO_DE_CREDENCIALES_ELIMINADO, model);
        });
    }
  }
});


