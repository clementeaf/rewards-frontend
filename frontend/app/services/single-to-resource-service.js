import Ember from "ember";
import RequesterInjected from "msr-backoffice-frontend/mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Esta clase representa un servicio genérico que sabe como interactuar con un recurso rest del backend, ofreciendo las
 * operaciones basicas como metodos. Cada operacion cuando genera un request al backend para afectar el recurso.
 * Del lado del backend existira un SingleToResourceService que atendera el request.
 * Cuando llega la respuesta como objeto json, es wrapeada en un objeto ember (emberizada) para poder bindear
 * atributos normalmente.
 *
 * Este servicio conoce un recurso en la api del backend, indicado por un path relativo (a la api), y utiliza una unica
 * clase que representa el recurso en el frontend. Si no se indica una clase especial se usa Ember.Object por default.
 *
 * Este servicio está limitado a representar el recurso con un solo tipo de TO en el frontend para todas las
 * operaciones. Lo cual es suficiente para casos basicos, pero se queda corto en casos más complejos
 *
 * Definidas las operaciones basado en: http://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/
 *
 */
export default Ember.Mixin.create(RequesterInjected, {

  /**
   * Ubicacion del recurso dentro de la api (path relativo que puede tener subdirectorios)
   * contra el cual se realizaran los requests
   */
  pathDelRecurso: null,


  /**
   * Busca todas las instancias del recurso existentes en el backend.
   * Devuelve un promise con los Tos una vez que el request se resuelva
   * y cada objeto json sea convertido en una instancia del recurso
   * @returns {Promise.<TResult>} El promise de un array ember de tos
   */
  findAll(){
    var apiRequest = ApiRequest.getting(this.apiPathDeLosRecursos());
    return this.sendAndEmberize(apiRequest);
  },

  /**
   * Busca una instancia concreta del recurso en el backend.
   * Devuelve un promise del To del recurso
   * @param idDelRecurso El identificador del recurso a buscar
   * @returns {Promise.<TResult>} El promise de un To
   */
  findById(idDelRecurso){
    var apiRequest = ApiRequest.getting(this.apiPathDelRecurso(idDelRecurso));
    return this.sendAndEmberize(apiRequest);
  },

  /**
   * Modifica el estado del recurso en el backend, devolviendo el estado modificado
   * @param recursoAModificar El estado para guardar en el backend
   * @returns {Promise.<TResult>} El promise del TO con el estado modificado
   */
  update(recursoAModificar){
    var idDelRecurso = recursoAModificar.get('id');
    var apiRequest = ApiRequest.putting(this.apiPathDelRecurso(idDelRecurso), recursoAModificar);
    return this.sendAndEmberize(apiRequest);
  },

  /**
   * Crea una nueva instancia del recurso en el backend. Devolviendo el To con el estado
   * del recurso creado
   * @param recursoACrear El estado que se le debe dar al recurso creado
   * @returns {Promise.<TResult>} Un promise del TO con el estado creado
   */
  create(recursoACrear){
    var apiRequest = ApiRequest.posting(this.apiPathDeLosRecursos(), recursoACrear);
    return this.sendAndEmberize(apiRequest);
  },

  /**
   * Elimina el recurso indicado por ID del backend. Devolviendo un promise vacio cuando termina
   * @param idDelRecurso El identificador del recurso en el backend
   * @returns {*|Ember.RSVP.Promise} El promise de finalizacion de la tarea (sin contenido)
   */
  deleteById(idDelRecurso){
    var apiRequest = ApiRequest.deleting(this.apiPathDelRecurso(idDelRecurso));
    return this.sendAndEmberize(apiRequest);
  },

  /**
   * Envia un apiRequest al backend emberizando la respuesta recibida
   * @param apiRequest El request a enviar
   * @returns {*|Promise.<TResult>} El promise de la respuesta envuelta en un objeto ember
   */
  sendAndEmberize(apiRequest){
    return this._requester().sendAndEmberize(apiRequest);
  },

  sendAndEmberizeWithSpinner(apiRequest) {
    return this._requester().sendAndEmberizeWithSpinner(apiRequest);
  },

  /**
   * @returns {V|*} El path relativo de este recurso para realizar operaciones de tipo "bulk"
   */
  apiPathDeLosRecursos(){
    var path = this.get('pathDelRecurso');
    if (path === null) {
      throw new Error("El path relativo del recurso no esta definido. No sabemos a donde enviar el request");
    }
    return path;
  },
  /**
   * El path relativo de este recurso para realizar operaciones sobre una unica instancia del reurso
   * @param idDeRecurso El identificador del recurso a afectar
   * @returns {string} El path relativo
   */
  apiPathDelRecurso(idDeRecurso){
    return `${this.apiPathDeLosRecursos()}/${idDeRecurso}`;
  }

});
