import Ember from "ember";
import ConfiguracionDeContratoServiceInjected from "../../../mixins/configuracion-de-contrato-service-injected";
import ToastServiceInjected from "../../../mixins/toast-service-injected";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";

export default Ember.Controller.extend(ConfiguracionDeContratoServiceInjected, ToastServiceInjected, UsuarioActualServiceInjected, {

  puedeEditarConfiguracionDeContrato: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarConfiguracionDeLaAplicacion();
  }),

  noPuedeEditarConfiguracionDeContrato: Ember.computed.not('puedeEditarConfiguracionDeContrato'),

  // Limite usado para mostrar feedback al usuario, pero no impide el ingreso de más
  longitudMaximaDeContrato: 200 * 40 - 100, // 200 lineas de 40 chars, y dejamos algo de margen por la variabilidad

  actions: {
    guardarContratoDefault(){
      var configuracion = this._configuracionDefault();
      this.configuracionDeContratoService().guardarConfiguracion(configuracion).then(configuracion => {
        this.set('model.configuracionDefault', configuracion);
        this.toastService().confirmarExito("Contrato guardado");
      });
    },

    insertarVariableDefault(variable) {
      var configuracion = this._configuracionDefault();
      this.insertarVariable(variable, configuracion);
    },

    guardarContratoParaPoliticamenteExpuestos(){
      var configuracion = this._configuracionParaPoliticamenteExpuestos();
      this.configuracionDeContratoService().guardarConfiguracion(configuracion).then(configuracion => {
        this.set('model.configuracionParaPoliticamenteExpuestos', configuracion);
        this.toastService().confirmarExito("Contrato guardado");
      });
    },

    insertarVariableParaPoliticamenteExpuestos(variable) {
      var configuracion = this._configuracionParaPoliticamenteExpuestos();
      this.insertarVariable(variable, configuracion);
    }
  },

  _configuracionDefault: function () {
    return this.get('model.configuracionDefault');
  },

  _configuracionParaPoliticamenteExpuestos: function () {
    return this.get('model.configuracionParaPoliticamenteExpuestos');
  },

  insertarVariable: function(variable, configuracion){
    var texto = configuracion.get('textoDelContrato');
    texto += "${" + variable + "}";
    configuracion.set('textoDelContrato', texto);
  }

});
