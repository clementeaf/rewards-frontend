/**
 * Identificador de este tipo de mensajes (debe ser unico en la app)
 */
var tipo = 'GrupoEliminadoMessage';

/**
 * Esta clase representa el mensaje de aviso cuando se modifica el estado de un grupo
 */
var GrupoEliminadoMessage = function (grupo) {
  this.type = tipo;
  this.grupoEliminado = grupo;
};

/**
 * Define las caracteristicas de este mensaje para poder ser recibido
 */
GrupoEliminadoMessage.DEFINITION = {
  type: tipo
};

export default GrupoEliminadoMessage;
