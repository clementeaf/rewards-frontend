import Ember from "ember";
import UsuarioServiceInjected from "msr-backoffice-frontend/mixins/usuario-service-injected";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";

export default Ember.Controller.extend(UsuarioServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombreCompleto: {
        required: "Ingrese el nombre de la persona",
      },
      loginId: {
        required: "Ingrese el identificador del usuario"
      },
      userGroup: {
        required: "Indique el grupo al que pertenece"
      }
    }
  },

  actions: {
    crearUsuario() {
      var usuario = this.get('model');
      this.usuarioService().create(usuario)
        .then((usuarioCreado)=> {
          this.navigator().navigateToAdministrarUsuarios();
          this.messager().publicar(Mensaje.USUARIO_CREADO, usuarioCreado);
        });
    },
    resetearFormulario(){
      return this.usuarioService().newUser().then((nuevo)=> {
        this.set('model', nuevo);
      });
    }
  }
});


