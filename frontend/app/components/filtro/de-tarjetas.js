import Ember from 'ember';
import TarjetasServiceInjected from "../../mixins/tarjetas-service-injected";

export default Ember.Component.extend(TarjetasServiceInjected, {
  init(){
    this._super(...arguments);
    this.inicializar();
  },

  inicializar(){
    this.set('filtro', this._nuevo());
  },

  _nuevo() {
    return Ember.Object.create({
      nombreDelMiembro: null,
      numeroDeTarjeta: null,
      tipoDeTarjeta: null,
      estadoDeTarjeta: null,
      comparadorDeSaldo: null,
      saldo: 0,
      limite: 25
    });
  },

  mostrarNombreDelMiembro: Ember.computed('filtro.tipoDeTarjeta', function () {
    return this.get('filtro.tipoDeTarjeta.id') === 'STARBUCKS_CARD';
  }),

  borrarNombreDelMiembro: Ember.observer('filtro.tipoDeTarjeta', function () {
    if(!this.get('mostrarNombreDelMiembro')) {
      this.set('filtro.nombreDelMiembro', null);
    }
  }),

  actions: {
    filtrar() {
      var filtro = this.get('filtro');
      this.tarjetasService().find(filtro).then(tarjetas => {
        this.set('tarjetas', tarjetas);
      });
    },

    limpiar(){
      this.inicializar();
    }
  }
});
