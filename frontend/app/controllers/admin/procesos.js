import Ember from "ember";

import NavigatorInjected from "../../mixins/navigator-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";
import EjecutorDeTareasServiceInjected from "../../mixins/ejecutor-de-tareas-service-injected";

export default Ember.Controller.extend(NavigatorInjected, EjecutorDeTareasServiceInjected, ToastServiceInjected, {
  actions: {
    ejecutarTarea(tarea) {
      this._bloquearTarea(tarea);
      this._ejecutarTarea(tarea);
    }
  },

  _bloquearTarea(tarea) {
    let botonDeEjecutar = Ember.$.find("#" + tarea.get('id') + " a");
    Ember.$(botonDeEjecutar).removeClass('linkeable');
    Ember.$(botonDeEjecutar).removeClass('green-text');
    Ember.$(botonDeEjecutar).addClass('not-linkeable');
  },

  _desbloquearTarea(tarea) {
    let botonDeEjecutar = Ember.$.find("#" + tarea.get('id') + " a");
    Ember.$(botonDeEjecutar).removeClass('not-linkeable');
    Ember.$(botonDeEjecutar).addClass('linkeable');
    Ember.$(botonDeEjecutar).addClass('green-text');
  },

  _ejecutarTarea(tarea) {
    this.ejecutorDeTareasService().ejecutarTarea(tarea)
      .then(() => {
        this.toastService().confirmarExito("Tarea " + tarea.get('nombre') + " ejecutada correctamente");
        this._desbloquearTarea(tarea);
      })
      .catch(() => this._desbloquearTarea(tarea));
  }
});
