/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'msr-backoffice-frontend',
    environment: environment,
    applicationContextRoot: '/msr-backoffice/',
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
        Array: true
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  /**
   * Urls usadas para enviar requests y desloguear al usuario
   */
  ENV.rootURL = ENV.applicationContextRoot + 'web/';
  ENV.apiRootUrl = ENV.applicationContextRoot + "api/";


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    /**
     * Permite loguear por consola la publicacion, suscripcionm y recepcion de mensajes
     * (para cuando las cosas se pongan feas)
     */
    ENV.loguear_mensajes = false;

    /**
     * Habilita el modo mock cuando el backend no está disponible
     */
    ENV.enableMockFallback = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
