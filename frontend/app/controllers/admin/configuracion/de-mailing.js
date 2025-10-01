import Ember from "ember";
import ToastServiceInjected from "../../../mixins/toast-service-injected";
import MailingServiceInjected from "../../../mixins/mailing-service-injected";

export default Ember.Controller.extend(MailingServiceInjected, ToastServiceInjected, {
  opcionesDeValidacion: {
    messages: {
      destinatarioInput: {
        required: "Ingrese el e-mail del destinatario",
      },
    }
  },

  opcionesDeValidacionContacto: {
    messages: {
      tokenContactoInput: {
        required: "Primero debe obtenerse el token dinámico",
      },
      emailInput: {
        required: "Ingrese el e-mail del contacto",
      },
    }
  },

  opcionesDeValidacionEnvioMail: {
    messages: {
      tokenContactoInput: {
        required: "Primero debe obtenerse el token dinámico",
      },
      emailIdInput: {
        required: "Ingrese el id del contacto en EmBlue",
      },
      triggerIdInput: {
        required: "Ingrese el id del trigger en EmBlue",
      }
    }
  },

  actions: {
    autenticarSegunAmbiente(){
      this.mailingService().autenticarSegunAmbiente().then(respuestaAutenticacion => {
        this._procesarRespuestaDeAutenticacion(respuestaAutenticacion);
      });
    },

    autenticarConCredencialesIngresadasManualmente(){
      let credenciales = this.get('model.credenciales');
      this.mailingService().autenticarCon(credenciales).then(respuestaAutenticacion => {
        this._procesarRespuestaDeAutenticacion(respuestaAutenticacion);
      });
    },

    crearOActualizarContacto(){
      let pedido = this._crearPedidoDeCreacionOActualizacion();
      this.mailingService().crearOActualizarContacto(pedido).then(respuestaActualizacionContacto => {
        this.set('model.respuestaActualizacionContactoString', JSON.stringify(respuestaActualizacionContacto));
        this.set('model.emailId', respuestaActualizacionContacto.emailId);
        this.toastService().confirmarExito("Creación/Actualización exitosa");
      });
    },

    enviarMail(){
      let pedido = this._crearPedidoDeEnvioDeMail();
      this.mailingService().enviarMailDesdeEmblue(pedido).then((respuestaEnvioMail) => {
        this.set('model.respuestaEnvioMail', JSON.stringify(respuestaEnvioMail));
        if(respuestaEnvioMail.aggregatesTriggers >= 1){
          this.toastService().confirmarExito("Envío de mail exitoso");
        } else {
          this.toastService().confirmarExito("Falló el envío de mail");
        }
      });
    }
  },

  _procesarRespuestaDeAutenticacion(respuestaAutenticacion) {
    if (respuestaAutenticacion.token) {
      this.set('model.tokenDinamico', respuestaAutenticacion.token);
      this.toastService().confirmarExito("Autenticación Exitosa");
    } else {
      this.toastService().confirmarExito("Autenticación Fallida");
    }
  },

  _crearPedidoDeCreacionOActualizacion(){
    return {contacto: this._getContacto(), token: this._getToken()};
  },

  _crearPedidoDeEnvioDeMail(){
    return {idDeContactoEmblue: this.get('model.emailId'), triggerId: this.get('model.triggerId'), token: this._getToken()};
  },

  _getToken(){
    return this.get('model.tokenDinamico');
  },

  obtenerNombresEnEmblue: function () {
    return this.get('model.cantidadesDeVouchers').map(function (cantidad) {
      return {aliasDelBeneficio: cantidad.get('aliasDelBeneficio.nombreEnEmblue'), cantidad: cantidad.get('cantidad')};
    });
  },

  _getContacto(){
    let nombresDeAliasSeleccionados = this.obtenerNombresEnEmblue();
    this.set('model.contacto.cantidadDeVouchers', nombresDeAliasSeleccionados);
    return this.get('model.contacto');
  }
});
