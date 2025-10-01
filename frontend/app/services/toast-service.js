import Ember from 'ember';
/* global Materialize */

/**
 * Servicio que permite mostrar mensajes "toasts" para dar feedback al usuario que no requiere demasiada atencion
 **/
export default Ember.Service.extend( {

  confirmarExito(mensaje){
    this.mostrarToast(mensaje, this._tiempoDefaultParaMensajes(), 'rounded');
  },

  mostrarToast(mensajes, tiempoEnMillis, rounded){
    Materialize.toast(mensajes, tiempoEnMillis, rounded);
  },

  _tiempoDefaultParaMensajes(){
    return this.get('tiempoDefaultParaMensajes') || 2000;
  }

});
