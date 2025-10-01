import Ember from "ember";

var ApiRequest = function (apiEndpoint) {

  this.extraOptions = {};

  /**
   * Define el hash de opciones con el cual se puede realizar un request jquery
   * a la api, desde el punto base indicado.
   *
   * @param apiBaseUrl La url base donde se encuentra la api rest
   * @returns {*} El hash de opciones para realizar un request ajax
   */
  this.defineAjaxOptionsFrom = function (apiBaseUrl) {
    var defaultOptions = {
      dataType: 'json',
      contentType: 'application/json',
      url: apiBaseUrl + apiEndpoint
    };
    var ajaxOptions = Ember.merge(defaultOptions, this.extraOptions);
    return ajaxOptions;
  };

  /**
   * Modifica el request para realizar un put enviando el objeto pasado como body json
   */
  this.forPutting = function (body) {
    this.extraOptions = Ember.merge(this.extraOptions, {
      method: "PUT",
      data: JSON.stringify(body)
    });
    return this;
  };

  /**
   * Modifica el request para realizar un POST enviando el objeto pasado como body json
   */
  this.forPosting = function (body) {
    this.extraOptions = Ember.merge(this.extraOptions, {
      method: "POST",
      data: JSON.stringify(body)
    });
    return this;
  };

  /**
   * Modifica el request para realizar un DELETE
   */
  this.forDeleting = function () {
    this.extraOptions = Ember.merge(this.extraOptions, {
      method: "DELETE"
    });
    return this;
  };
};

/**
 * Crea un nuevo request GET contra el endpoint indicado
 * @param apiEndpoint La parte de la url que indica que endpoint, dentro de la api, sera llamado
 * @returns {ApiRequest}  El request creado con defaults para ser modificado y utilizado
 */
ApiRequest.getting = function (apiEndpoint) {
  return new ApiRequest(apiEndpoint);
};

/**
 * Crea un nuevo request PUT contra el endpoint indicado utilizando el body como objeto a jsonizar
 * @param apiEndpoint La parte de la url que corresponde al endpoint dentro de la  api
 * @param body El objeto a enviar como body
 */
ApiRequest.putting = function (apiEndpoint, body) {
  return new ApiRequest(apiEndpoint).forPutting(body);
};

/**
 * Crea un nuevo request POST contra el endpoint indicado utilizando el body como objeto a jsonizar
 * @param apiEndpoint La parte de la url que corresponde al endpoint dentro de la  api
 * @param body El objeto a enviar como body
 */
ApiRequest.posting = function (apiEndpoint, body) {
  return new ApiRequest(apiEndpoint).forPosting(body);
};

/**
 * Crea un nuevo request DELETE contra el endpoint indicado
 * @param apiEndpoint La parte de la url que corresponde al endpoint dentro de la  api
 */
ApiRequest.deleting = function (apiEndpoint) {
  return new ApiRequest(apiEndpoint).forDeleting();
};


/**
 * Esta clase representa un request hecho especificamente como llamada a la api del backend.
 * Las llamadas a la pi son realizadas con JSON a partir de una raiz donde se encuentran todos los recursos REST.
 *
 * Un request api puede tener argumentos adicionales o representar, mediante el método http, un tipo de operacion.
 *
 * @param apiEndpoint
 * @constructor
 */
export default ApiRequest;
