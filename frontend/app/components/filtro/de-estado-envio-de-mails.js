import Ember from 'ember';
import MailsEncoladosServiceInjected from "../../mixins/mails-encolados-service-injected";

export default Ember.Component.extend(MailsEncoladosServiceInjected, {
  mailsEncontrados: Ember.A(),

  init(){
    this._super(...arguments);
    this.inicializarFiltro();
  },

  inicializarFiltro(){
    this.set('filtro', Ember.Object.create({
      tipoDeNotificacion: null,
      mail: null,
      instanteDeIngresoDesde: null,
      instanteDeIngresoHasta: null,
      instanteDeEnvioDesde: null,
      instanteDeEnvioHasta: null,
      fueEnviado: null,
      ocurrioFalla: null,
      status: null,
      limite: 25
    }));
  },

  actions: {
    filtrarMails(){
      const filtro = this.get('filtro');
      this.mailsEncoladosService().buscarMailsEncolados(filtro).then(mailsEncontrados => {
        this.set('mailsEncontrados',mailsEncontrados);
      });
    },

    limpiarFiltro(){
      this.inicializarFiltro();
    },
  }

});
