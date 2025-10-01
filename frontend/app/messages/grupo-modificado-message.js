/**
 * Identificador de este tipo de mensajes (debe ser unico en la app)
 */
var tipo = 'GrupoModificadoMessage';

/**
 * Esta clase representa el mensaje de aviso cuando se modifica el estado de un grupo
 */
var GrupoModificadoMessage = function (grupo) {
  this.type = tipo;
  this.grupoModificado = grupo;
};

/**
 * Define las caracteristicas de este mensaje para poder ser recibido
 */
GrupoModificadoMessage.DEFINITION = {
  type: tipo
};

export default GrupoModificadoMessage;
