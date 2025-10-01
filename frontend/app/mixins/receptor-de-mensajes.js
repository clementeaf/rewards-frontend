import Ember from "ember";
import MessagerInjected from "./messager-injected";

/**
 * Este mixin permite reducir la cantidad de codigo necesario para recibir mensajes de la aplicacion en ciertos
 * callbacks.
 * En vez de tener que suscribir explicitamente cada callback a cada tipo de mensaje, extender este mixin
 * permite declarar un hash de callbacks "mensajes" que son registrados cuando la instancia se inicializa.
 * Similar a como funcionan el hash de callbacks "actions" para los eventos de ember.
 * Asi mismo, los callbacks sos desuscriptos cuando la instancia es destruida.
 *
 */
export default Ember.Mixin.create(MessagerInjected, {

  init(){
    this._super(...arguments);
    this._suscribirMensajes();
  },
  willDestroy(){
    this._desuscribirMensajes();
    return this._super(...arguments);
  },

  _suscribirMensajes(){
    this._porCadaMensajeDeclarado((nombreDeCanal, callbackReceptor)=> {
      this.messager().suscribirA(nombreDeCanal, this, callbackReceptor);
    });
  },
  _desuscribirMensajes(){
    this._porCadaMensajeDeclarado((nombreDeCanal, callbackReceptor)=> {
      this.messager().desuscribirDe(nombreDeCanal, this, callbackReceptor);
    });
  },
  _porCadaMensajeDeclarado(accionPorMensaje){
    var mensajesDeclarados = this.get('mensajes');
    if (!mensajesDeclarados) {
      // No hay nada que hacer
      return;
    }
    var nombresDeCanales = Object.keys(mensajesDeclarados);
    nombresDeCanales.forEach((nombreDeCanal) => {
      let callbackDeclarado = mensajesDeclarados[nombreDeCanal];
      accionPorMensaje(nombreDeCanal, callbackDeclarado);
    });
  }
});
