import Ember from 'ember';
import UsuarioServiceInjected from 'msr-backoffice-frontend/mixins/usuario-service-injected';
import NavigatorInjected from 'msr-backoffice-frontend/mixins/navigator-injected';
import MessagerInjected from '../../../mixins/messager-injected';
import Mensaje from '../../../utils/mensaje';

export default Ember.Controller.extend(UsuarioServiceInjected, NavigatorInjected, MessagerInjected, {
  opcionesDeValidacion: {
    messages: {
      nombreCompleto: {
        required: 'Ingrese el nombre de la persona'
      },
      loginId: {
        required: 'Ingrese el identificador del usuario'
      }
    }
  },

  _usuarioEnEdicion() {
    return this.get('model');
  },

  actions: {
    guardarUsuario() {
      this.usuarioService().update(this._usuarioEnEdicion())
        .then((usuarioModificado) => {
          this.navigator().navigateToAdministrarUsuarios();
          this.messager().publicar(Mensaje.USUARIO_MODIFICADO, usuarioModificado);
        });
    },
    borrarUsuario() {
      let usuarioEliminado = this._usuarioEnEdicion();
      this.usuarioService().deleteById(usuarioEliminado.get('id'))
        .then(() => {
          this.navigator().navigateToAdministrarUsuarios();
          this.messager().publicar(Mensaje.USUARIO_ELIMINADO, usuarioEliminado);
        });
    }
  }
});
