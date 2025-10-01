import Ember from "ember";
import ENV from "msr-backoffice-frontend/config/environment";

/**
 * Esta clase representa un servicio de mensajeria interno de la aplicacion.
 * Funciona con un esquema publicar/suscribe donde los mensajes son producidos en partes de la aplicación que lo publican
 * bajo un canal (identificado por nombre), y las partes que lo quieren recibir se suscriben a ese canal.
 * Los suscriptores del canal reciben en un callback, el objeto publicado.
 */
export default Ember.Service.extend(Ember.Evented, {
  /**
   * Envia el mensaje indicado a los suscriptores del canal indicado por nombre
   * @param nombreDeCanal El nombre que identifica el canal cuyos suscriptores deben recibir el mensaje
   * @param mensaje El objeto que será recibido por los suscriptores como argumento del callback suscripto
   */
  publicar: function (nombreDeCanal, mensaje) {
    if (ENV.loguear_mensajes) {
      Ember.Logger.debug('Publicando mensaje al canal:', nombreDeCanal, mensaje);
    }
    return this.trigger(nombreDeCanal, mensaje);
  },

  /**
   * Registra a la instancia indicada como receptor, para ser invocada con el callback pasado
   * cuando se publique un mensaje en el canal indicado por nombre
   * @param nombreDeCanal El nombre que identifica el canal en el que se debe suscribir al receptor
   * @param receptor El objeto que actuará de this en el callback pasado
   * @param callback El callback invocado con el mensaje recibido como argumento cuando sea publicado
   */
  suscribirA: function (nombreDeCanal, receptor, callback) {
    if (ENV.loguear_mensajes) {
      Ember.Logger.debug('Suscribiendo receptor al canal:', nombreDeCanal, this._comoString(receptor));
      callback = (mensaje) => {
        Ember.Logger.debug('Recibiendo mensaje del canal:', nombreDeCanal, mensaje, this._comoString(receptor));
      };
    }
    return this.on(nombreDeCanal, receptor, callback);
  },

  /**
   * Desuscribe al receptor indicado para dejar de recibir mensajes del canal indicado por nombre.
   * El callback pasado debe ser el mismo que se utilizó para suscribirlo
   * @param nombreDeCanal El nombre del canal que dejara de recibir mensajes
   * @param receptor El objeto receptor previamente suscripto
   * @param callback El callback utilizado para suscribirlo
   */
  desuscribirDe: function (nombreDeCanal, receptor, callback) {
    if (ENV.loguear_mensajes) {
      Ember.Logger.debug('De-suscribiendo receptor del canal:', nombreDeCanal, this._comoString(receptor));
    }
    return this.off(nombreDeCanal, receptor, callback);
  },

  _comoString: function (receptor) {
    return (receptor['toString'] ? receptor.toString() : receptor);
  },

});
