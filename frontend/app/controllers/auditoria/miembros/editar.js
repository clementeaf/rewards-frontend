import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import UsuarioActualServiceInjected from "../../../mixins/usuario-actual-service-injected";
import Mensaje from "../../../utils/mensaje";
import MiembrosServiceInjected from "../../../mixins/miembros-service-injected";
import ToastServiceInjected from "../../../mixins/toast-service-injected";

export default Ember.Controller.extend(MiembrosServiceInjected, NavigatorInjected, MessagerInjected, UsuarioActualServiceInjected, ToastServiceInjected, {
  estaProcesando: false,
  starsAnteriores: null,
  fechaDeNacimientoAnterior: null,
  saldosAnteriores: Ember.A(),
  motivoDeEdicion: '',

  longitudMaximaDeMotivo: 400,

  opcionesDeValidacion: {
    messages: {
      nombre: {
        required: "Ingrese el nombre"
      },
      apellido: {
        required: "Ingrese el apellido"
      },
      email: {
        required: "Ingrese el email"
      },
      bebida: {
        required: "Ingrese la bebida"
      },
      stars: {
        required: "Ingrese las stars"
      },
      nivel: {
        required: "Ingrese el nivel"
      },
      fechaDeNacimiento: {
        required: "Ingrese la fecha de nacimiento"
      },
      motivoDeEdicion: {
        required: "Ingrese un motivo de edición"
      }
    }
  },

  puedeEditarHabilitacionMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarHabilitacionMiembros();
  }),

  puedeEditarNombreYApellidosDeMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarNombreYApellidosDeMiembros();
  }),

  puedeEditarBebidaFavoritaDeMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarBebidaFavoritaDeMiembros();
  }),

  puedeEditarCantidadStarsYNivelDeMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarCantidadStarsYNivelDeMiembros();
  }),

  puedeEditarMailDeMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarMailDeMiembros();
  }),

  puedeEditarFechaDeNacimientoDeMiembro: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarFechaDeNacimientoDeMiembros();
  }),

  puedeEditarReposicionDeTarjeta: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEditarReposicionDeTarjeta();
  }),

  puedeEliminarMiembros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEliminarMiembros();
  }),

  cambioElMiembro: Ember.observer('model', function() {
    this._inicializarValoresAnteriores();
  }),

  tieneQueIndicarUnMotivo: Ember.computed('model.cantidadDeStars', 'model.fechaDeNacimiento', 'model.habilitado', 'model.miembroHabilitadoParaReposicion', 'model.tarjetas.@each.saldo', 'model.tarjetas.@each.estado', function() {
    const modificoSaldo = this._tarjetas().any(tarjeta => this._saldoAnterior(tarjeta) !== tarjeta.get('saldo'));
    const modificoEstadoTarjeta = this._tarjetas().any(tarjeta => this._estadoAnterior(tarjeta) !== tarjeta.get('estado'));
    const modificoStars = this._starsAnteriores() !== this._stars();
    const modificoFechaDeNacimiento = this._fechaDeNacimientoAnterior() !== this._fechaDeNacimiento();
    const modificoHabilitacion = this._habilitacionAnterior() !== this._habilitado();
    const modificoReposicion = this._habilitadoParaReposicionAnterior() !== this._miembroHabilitadoParaReposicion();
    return modificoStars || modificoSaldo || modificoFechaDeNacimiento || modificoReposicion || modificoHabilitacion || modificoEstadoTarjeta;
  }),

  actions: {
    guardarMiembro() {
      this.set('estaProcesando', true);
      this._miembro().set('motivoDeEdicion', this.get('motivoDeEdicion'));
      this.miembrosService().update(this._miembro()).then(miembroModificado => {
        this.navigator().navigateToAuditoriaDeMiembros();
        this.set('estaProcesando', false);
        this.set('motivoDeEdicion', '');
        this.messager().publicar(Mensaje.MIEMBRO_MODIFICADO, miembroModificado);
      });
    },
    altaTarjeta(){
      this.miembrosService().altaTarjeta(this._altaTarjeta()).then( response => {
        this.navigator().navigateToAuditoriaDeMiembros();
        if(response && response.numero){
          this.toastService().confirmarExito(`Se ha asignado la tarjeta ${response.numero} exitosamente`);
        }
      });
    },
    eliminarMiembro() {
      if (this.get('model.confirmarEliminar') !== "Eliminar") {
        let message = "¿Está seguro que desea eliminar el miembro? escriba \"Eliminar\" a continuación.";
        this.errorMessagesService().showError(message, "");
      } else if (this.get('model.confirmarEliminar') === "Eliminar") {
        let body = Ember.Object.create({
          motivo: "Eliminación desde Backoffice",
          comentarios: "Eliminación desde Backoffice",
          reintegroDeSaldoSBC: true,
        });
        this.miembrosService().deleteById(this._miembro().get('id'), body).then(response => {
          location.reload();
        });
      }
    },
  },

  _miembro() {
    return this.get('model');
  },

  _stars() {
    return this.get('model.cantidadDeStars');
  },

  _fechaDeNacimiento() {
    return this.get('model.fechaDeNacimiento');
  },

  _habilitado() {
    return this.get('model.habilitado');
  },

  _miembroHabilitadoParaReposicion() {
    return this.get('model.miembroHabilitadoParaReposicion');
  },

  _tarjetas() {
    return this.get('model.tarjetas');
  },

  _starsAnteriores() {
    return this.get('starsAnteriores');
  },

  _fechaDeNacimientoAnterior() {
    return this.get('fechaDeNacimientoAnterior');
  },

  _habilitacionAnterior() {
    return this.get('habilitacionAnterior');
  },

  _habilitadoParaReposicionAnterior() {
    return this.get('habilitadoParaReposicionAnterior');
  },

  _saldoAnterior(tarjeta) {
    return this._saldosAnteriores().findBy('id', tarjeta.get('id')).get('saldo');
  },

  _saldosAnteriores() {
    return this.get('saldosAnteriores');
  },

  _estadoAnterior(tarjeta) {
    return this._estadosAnteriores().findBy('id', tarjeta.get('id')).get('estado');
  },

  _estadosAnteriores() {
    return this.get('estadosAnteriores');
  },

  _altaTarjeta() {
    this.set('model.altaTarjeta.memberId', this.get('model.id'));
    return this.get('model.altaTarjeta');
  },

  _inicializarValoresAnteriores() {
    this.set('motivoDeEdicion', '');
    this.set('starsAnteriores', this._stars());
    this.set('fechaDeNacimientoAnterior', this._fechaDeNacimiento());
    this.set('habilitacionAnterior', this._habilitado());
    this.set('habilitadoParaReposicionAnterior', this._miembroHabilitadoParaReposicion());
    this.set('saldosAnteriores', this._tarjetas().map(tarjeta =>
      Ember.Object.create({ id: tarjeta.get('id'), saldo: tarjeta.get('saldo') })
    ));
    this.set('estadosAnteriores', this._tarjetas().map(tarjeta =>
      Ember.Object.create({ id: tarjeta.get('id'), estado: tarjeta.get('estado') })
    ));
  }
});
