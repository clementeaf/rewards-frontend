import Ember from 'ember';
import TarjetasServiceInjected from '../mixins/tarjetas-service-injected';
import NavigatorInjected from '../mixins/navigator-injected';
import MessagerInjected from '../mixins/messager-injected';
import Mensaje from '../utils/mensaje';
import ToastServiceInjected from '../mixins/toast-service-injected';

export default Ember.Component.extend(TarjetasServiceInjected, NavigatorInjected, MessagerInjected, ToastServiceInjected, {
  motivoDeEdicion: '',
  longitudMaximaDeMotivo: 400,
  estaProcesando: false,

  opcionesDeValidacion: {
    messages: {
      numero: {
        required: "Ingrese el numero de la tarjeta"
      },
      tipo: {
        required: "Ingrese el tipo de la tarjeta"
      },
      motivoDeEdicion: {
        required: "Ingrese un motivo de edición"
      }
    }
  },

  esStarbucksCard: Ember.computed('tarjeta.tipo', function() {
    return this._tarjeta().get('tipo.id') === 'STARBUCKS_CARD';
  }),

  borrarMiembroSiNoEsStarbucksCard: Ember.computed('tarjeta.tipo', function () {
    if(!this.get('esStarbucksCard')) {
      this._tarjeta().set('miembro', null);
    }
  }),

  actions: {
    crear(){
      this.set('estaProcesando', true);
      this.tarjetasService().create(this._tarjeta()).then(nuevaTarjeta => {
        this.toastService().confirmarExito('Trajeta creada');
        this.set('estaProcesando', false);
        this.navigator().navigateToAdministrarTarjetas();
        this.messager().publicar(Mensaje.TARJETA_CREADA, nuevaTarjeta);
      });
    },
    guardar() {
      this.set('estaProcesando', true);
      this._tarjeta().set('motivoDeEdicion', this.get('motivoDeEdicion'));
      this.tarjetasService().update(this._tarjeta()).then(tarjetaActualizada => {
        this.toastService().confirmarExito('Tarjeta actualizada');
        this.set('estaProcesando', false);
        this.set('motivoDeEdicion', '');
        this.navigator().navigateToAdministrarTarjetas();
        this.messager().publicar(Mensaje.TARJETA_MODIFICADA, tarjetaActualizada);
      });
    },
    eliminar(){
      this.set('estaProcesando', true);
      this.tarjetasService().deleteById(this._tarjeta().get('id')).then(() => {
        this.toastService().confirmarExito('Tarjeta eliminada');
        this.set('estaProcesando', false);
        this.navigator().navigateToAdministrarTarjetas();
        this.messager().publicar(Mensaje.TARJETA_ELIMINADA, this._tarjeta());
      });
    },
    borrar(){
      this.set('tarjeta', this.tarjetasService().nuevaTarjeta());
    }
  },

  _tarjeta() {
    return this.get('tarjeta');
  }
});
