/**
 * Identificador de este tipo de mensajes (debe ser unico en la app)
 */
var tipo = 'GrupoCreadoMessage';

/**
 * Esta clase representa el mensaje de aviso cuando se crea un nuevo grupo de credenciales
 */
var GrupoCreadoMessage = function (grupo) {
  this.type = tipo;
  this.grupoCreado = grupo;
};

/**
 * Define las caracteristicas de este mensaje para poder ser recibido
 */
GrupoCreadoMessage.DEFINITION = {
  type: tipo
};

export default GrupoCreadoMessage;
