import Ember from "ember";
import ToastServiceInjected from "../../mixins/toast-service-injected";
import CuentasServiceInjected from "../../mixins/cuentas-service-injected";

export default Ember.Component.extend(CuentasServiceInjected, ToastServiceInjected, {
  emailAnterior: null,
  motivoDeEdicion: '',

  init() {
    this._super(...arguments);
    this._inicializarValoresAnteriores();
  },

  opcionesDeValidacion: {
    messages: {
      motivoDeEdicion: {
        required: "Ingrese un motivo de edición"
      }
    }
  },

  cambioLaCuenta: Ember.observer('cuenta', function() {
    this._inicializarValoresAnteriores();
  }),

  modificoEmail: Ember.computed('cuenta.email', function() {
    return this._emailAnterior() !== this._email();
  }),

  actions: {
    actualizarEmail() {
      this.cuentasService().actualizarEmail(this._cuenta(), this._email(), this.get('motivoDeEdicion')).then(cuenta => {
        this.set('cuenta', cuenta);
        this.toastService().confirmarExito("Se ha enviado un email de verificación de cuenta al email solicitado");
      });
    },

    actualizarPassword() {
      this.cuentasService().actualizarPassword(this._cuenta(), this._password()).then(() => {
        this.toastService().confirmarExito("Password actualizada");
      });
    },

    verificar() {
      this.cuentasService().verificar(this._cuenta()).then(cuenta => {
        this.set('cuenta', cuenta);
        this.toastService().confirmarExito("Cuenta verificada");
      });
    }
  },

  _cuenta() {
    return this.get('cuenta');
  },

  _email() {
    return this.get('cuenta.email');
  },

  _password() {
    return this.get('cuenta.password');
  },

  _emailAnterior() {
    return this.get('emailAnterior');
  },

  _inicializarValoresAnteriores() {
    this.set('emailAnterior', this._email());
  }
});
