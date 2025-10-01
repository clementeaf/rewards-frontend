/**
 * Created by gustavo on 09/01/17.
 */
import Ember from "ember";

const MultipartRequest = function (apiEndpoint) {

  this.extraOptions = {};

  /**
   * Define el hash de opciones con el cual se puede realizar un request jquery
   * a la api, desde el punto base indicado.
   *
   * @param apiBaseUrl La url base donde se encuentra la api rest
   * @returns {*} El hash de opciones para realizar un request ajax
   */
  this.defineAjaxOptionsFrom = function (apiBaseUrl) {
    const defaultOptions = {
      processData: false,
      contentType: false,
      url: apiBaseUrl + apiEndpoint
    };
    return Ember.merge(defaultOptions, this.extraOptions);
  };

  /**
   * Modifica el request para realizar un put enviando el objeto wrappeado en un FormData
   */
  this.forPutting = function (body, files) {
    this.extraOptions = Ember.merge(this.extraOptions, {
      method: "PUT",
      data: this._wrapInFormData(body, files)
    });
    return this;
  };

  /**
   * Modifica el request para realizar un POST enviando el objeto wrappeado en un FormData
   */
  this.forPosting = function (body, files) {
    this.extraOptions = Ember.merge(this.extraOptions, {
      method: "POST",
      data: this._wrapInFormData(body, files)
    });
    return this;
  };


  this._wrapInFormData = function (body, files) {
    const data = new FormData();
    data.append('json', new Blob([JSON.stringify(body)], {type:'application/json'}));
    const fileKeys = Object.keys(files);
    fileKeys.forEach(function (fileKey) {
      data.append(fileKey, files[fileKey]);
    });
    return data;
  };
};

/**
 * Crea un nuevo request PUT contra el endpoint indicado utilizando el body como objeto a jsonizar y los archivos
 * @param apiEndpoint La parte de la url que corresponde al endpoint dentro de la  api
 * @param body El objeto a enviar como body
 * @param files un objeto con una key por cada archivo a enviar
 */
MultipartRequest.putting = function (apiEndpoint, body, files) {
  return new MultipartRequest(apiEndpoint).forPutting(body, files);
};

/**
 * Crea un nuevo request POST contra el endpoint indicado utilizando el body como objeto a jsonizar
 * @param apiEndpoint La parte de la url que corresponde al endpoint dentro de la  api
 * @param body El objeto a enviar como body
 * @param files un objeto con una key por cada archivo a enviar
 */
MultipartRequest.posting = function (apiEndpoint, body, files) {
  return new MultipartRequest(apiEndpoint).forPosting(body, files);
};


/**
 * Esta clase representa un request multipart hecho especificamente como llamada a la api del backend.
 * Las llamadas a la pi son realizadas con un FormData con un JSON y varios archivos, a partir de una raiz donde se
 * encuentran todos los recursos REST.
 *
 * Un request api puede tener argumentos adicionales o representar, mediante el método http, un tipo de operacion.
 *
 * @param apiEndpoint
 * @constructor
 */
export default MultipartRequest;
