import Ember from "ember";
import ScrollerInjected from "../../mixins/scroller-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import FormularioDeAltaServiceInjected from "../../mixins/formulario-de-alta-service-injected";
import UsuarioActualServiceInjected from "../../mixins/usuario-actual-service-injected";

export default Ember.Controller.extend(FormularioDeAltaServiceInjected, NavigatorInjected , ScrollerInjected, ReceptorDeMensajes, UsuarioActualServiceInjected, {
  formularioSeleccionado: null,
  actions: {
    crearNuevo(){
      this._scrollToCrud();
      this.navigator().navigateToCrearFormularios();
    },
    editar(formularioDeAlta){
      this._scrollToCrud();
      this.navigator().navigateToEditarFormularioDeAlta(formularioDeAlta);
    },
    verDetalles(formularioDeAlta){
      this._scrollToCrud();
      this.navigator().navigateToVerDetalleFormularioDeAlta(formularioDeAlta);
    },
    pedirConfirmacionParaBorrar(formulario){
      this.set('formularioSeleccionado', formulario);
      this.set('modalAlEliminarUnFormulario',true);
    },
    eliminar(){
      var idEliminado =  this.get('formularioSeleccionado').get('id');
      this.formularioDeAltaService().deleteById(idEliminado).then(() => {
        var formularioExistente = this._formulariosDeAlta().findBy('id', idEliminado);
        if(formularioExistente) {
          this._formulariosDeAlta().removeObject(formularioExistente);
        } else {
          Ember.Logger.error('No se encontró el formulario eliminado ', idEliminado, ' en la lista de formularios del modelo');
        }
      });
    }
  },

  puedeEditarFormulario: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarFormularios();
  }),

  puedeBorrarFormulario: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoABorrarFormulario();
  }),

  puedeCrearFormulario: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoACrearFormulario();
  }),

  mensajes: {
    formularioDeAltaCreado(formularioCreado){
      this._formulariosDeAlta().addObject(formularioCreado);
    },
    formularioDeAltaModificado(formularioModificado){
      var idModificado = formularioModificado.get('id');
      var formularioExistente = this._formulariosDeAlta().findBy('id', idModificado);
      if (formularioExistente) {
        formularioExistente.setProperties(formularioModificado);
      } else {
        Ember.Logger.info('No se encontró el formulario modificado [',idModificado,'] en la lista de formularios del modelo');
      }
    },
  },

  _formulariosDeAlta() {
    return this.get('model');
  },

  _scrollToCrud() {
    this.scrollTo('#formularios-crud');
  }
});
