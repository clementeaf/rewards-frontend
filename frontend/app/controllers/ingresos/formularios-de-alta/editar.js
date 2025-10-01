import Ember from 'ember';
import Mensaje from "../../../utils/mensaje";
import MessagerInjected from "../../../mixins/messager-injected";
import NavigatorInjected from "../../../mixins/navigator-injected";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";
import FormularioDeAltaServiceInjected from "../../../mixins/formulario-de-alta-service-injected";

export default Ember.Controller.extend(FormularioDeAltaServiceInjected, NavigatorInjected, MessagerInjected, UsuarioActualServiceInjected, {
  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre"
      }
    }
  },

  puedeEditarDatosPersonales: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarDatosPersonales();
  }),

  puedeEditarDatosCuenta: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarDatosDeLaCuenta();
  }),

  actions: {
    guardar() {
      const formularioDeAlta = this.get('model');
      this.formularioDeAltaService().update(formularioDeAlta).then(formularioDeAltaModificado => {
        this.navigator().navigateToAdministarFormularios();
        this.messager().publicar(Mensaje.FORMULARIO_DE_ALTA_MODIFICADO, formularioDeAltaModificado);
      });
    }
  }
});
