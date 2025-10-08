import Ember from "ember";
import ENV from "msr-backoffice-frontend/config/environment";
import ErrorMessagesService from "../mixins/error-messages-service-injected";
import Emberizer from "../utils/emberizer";

/**
 * Este tipo representa el punto de comunicacion con el backend a bajo nivel (requests).
 * A traves de este objeto abstraemos la ubicación del server y los detalles de armar el requests
 * con jquery, y ofrecemos una api hacia afuera que solo implica llamar a un metodo para obtener un promise
 * de ember como request en progreso
 */
export default Ember.Service.extend(ErrorMessagesService, {
  mockDataService: Ember.inject.service('mock-data-service'),
  /**
   * Clase que se va a utilizar para crear instancias desde el json nativo que llega del backend
   * y que soporta los bindings de Ember
   */
  claseDeTo: Ember.Object,

  /**
   * Inicia un request http contra el backend dirigido a la Api rest.
   * La configuracion del request jquery se define a partir del request
   * pasado
   * @param apiRequest El request que se debe realizar a la api
   * @returns {Ember.RSVP.Promise} El promise de ember por la respuesta del backend
   */
  send(apiRequest){
    var jqueryOptions = apiRequest.defineAjaxOptionsFrom(ENV.apiRootUrl);
    return this._makeRequest(jqueryOptions);
  },

  /**
   * Envia un apiRequest al backend emberizando la respuesta recibida
   * @param apiRequest El request a enviar
   * @returns {*|Promise.<TResult>} El promise de la respuesta envuelta en un objeto ember
   */
  sendAndEmberize(apiRequest){
    var requestPromise = this.send(apiRequest);
    return this._emberizer().emberizing(requestPromise);
  },

  /**
   * Igual que send and emberize, pero traba la pantalla con un spinner durante el tiempo
   * que dura el request.
   * @param apiRequest El request que se debe realizar a la api
   * * @returns {*|Promise.<TResult>} El promise de la respuesta envuelta en un objeto ember
   */
  sendAndEmberizeWithSpinner(apiRequest){
    var requestPromise = this.sendWithSpinner(apiRequest);
    return this._emberizer().emberizing(requestPromise);
  },

  sendWithSpinner(apiRequest){
    var jqueryOptions = apiRequest.defineAjaxOptionsFrom(ENV.apiRootUrl);
    const $html = Ember.$('html');
    const $div = Ember.$('<div class="loading"></div>');
    $html.spin({
      lines: 13,
      length: 20,
      width: 10,
      radius: 30,
      scale: 1,
      corners: 1,
      rotate: 0,
      direction: 1,
      speed: 1,
      trail: 60
    });
    $html.append($div);
    return this._makeRequest(jqueryOptions).then((response) => {
      $html.data().spinner.stop();
      $div.remove();
      return response;
    });
  },

  // PRIVATE
  /**
   * Realiza el request a partir de los parametros pasados utilizando jquery ajax()
   * y wrapeando el promise original en uno de ember
   * @param ajaxOptions Los parametros de jquery ajax() para realizar el request
   * @returns {Ember.RSVP.Promise} El promise de ember por la respuesta
   */
  _makeRequest: function (ajaxOptions) {
    var jqueryPromise = Ember.$.ajax(ajaxOptions);
    return this._wrappingWithErrorAwarePromise(
        this._wrappingWithEmberPromise(
          jqueryPromise
        )
      );
  },
  _wrappingWithEmberPromise: function (jqueryPromise) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      jqueryPromise.then(resolve, reject);
    });
  },
  _wrappingWithErrorAwarePromise: function( promise ) {
    var errorHandler = (response) => {
      var message;
      var stackTrace;
      if(response.responseJSON) {
        message = response.responseJSON.message || 'Error inesperado: ' + response.status;
        stackTrace = response.responseJSON.stackTrace || [];
      } else if(response.status === 200 && response.responseText && response.responseText.includes('loginForm')){
        // Es un redirect al login, probablemente se vencio la sesion. Otra opcion es forzar el login, pero podria perder lo que esta haciendo
        message = "Su sesion ha expirado. Debe salir y volver a entrar para continuar";
        stackTrace = [];
      } else {
        message = response.statusText + " (" + response.status + ")";
        stackTrace = [];
      }
      this.errorMessagesService().showError(message, stackTrace);
      return Ember.RSVP.reject(...arguments);
    };
    return promise.catch(errorHandler);
  },

  _emberizer(){
    return Emberizer.create({claseEmber: this._claseDeTo()});
  },
  _claseDeTo(){
    return this.get('claseDeTo');
  }
});
