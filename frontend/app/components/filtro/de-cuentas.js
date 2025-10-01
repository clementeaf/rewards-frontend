import Ember from 'ember';
import CuentasServiceInjected from "../../mixins/cuentas-service-injected";

export default Ember.Component.extend(CuentasServiceInjected, {
  cuentasEncontradas: Ember.A(),

  init(){
    this._super(...arguments);
    this.inicializarFiltro();
  },

  inicializarFiltro(){
    this.set('filtro', Ember.Object.create({
      email: null,
      estado: null,
      rechazadaPorEmblue: null,
      limite: 25
    }));
  },

  actions: {
    filtrarCuentas(){
      const filtro = this.get('filtro');
      this.cuentasService().filtrar(filtro).then(cuentasEncontradas => {
        this.set('cuentasEncontradas', cuentasEncontradas);
      });
    },

    limpiarFiltro(){
      this.inicializarFiltro();
    }
  }
});
