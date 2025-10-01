import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import ScrollerInjected from "../../mixins/scroller-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";
import MailsEncoladosServiceInjected from '../../mixins/mails-encolados-service-injected';

export default Ember.Controller.extend(MailsEncoladosServiceInjected, NavigatorInjected, ScrollerInjected, ToastServiceInjected, {

  actions: {
    quiereReenviar(mail){
      this.mailsEncoladosService().marcarMailEncoladoParaReenvio(mail).then(mail => {
        this._actualizarEstadoDe(mail);
        this.toastService().confirmarExito("Mail encolado para ser reenviado exitosamente");
      });
    },

    verDetalleDeMail(mail){
      this.scrollTo('#detalleDeMail');
      this.navigator().navigateToDetallesDeMailPendiente(mail);
    }
  },

  _actualizarEstadoDe(mailActualizado){
    const idModificado = mailActualizado.get('id');
    const existente = this._mails().findBy('id', idModificado);
    if (existente) {
      existente.setProperties(mailActualizado);
    } else {
      Ember.Logger.error('No se encontró el mail [',idModificado,'] en la lista');
    }
  },

  _mails() {
    return this.get('model');
  }
});
