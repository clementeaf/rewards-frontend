import Ember from "ember";

export default Ember.Component.extend({
  generadorDeVoucher: null,
  generadoresDeVoucher: Ember.A([]),

  actions: {
    sacarGeneradorDeVoucher() {
      let generadoresDeVoucher = this.get('generadoresDeVoucher');
      generadoresDeVoucher.removeObject(this.get('generadorDeVoucher'));
      this.set('generadoresDeVoucher', generadoresDeVoucher);
      this.set('generadorDeVoucher', null);
    },

    restringirPorTienda() {
      let estaRestringido = this.get('generadorDeVoucher.estaRestringidoParaLaTiendaQueLoGenera');
      this.set('generadorDeVoucher.estaRestringidoParaLaTiendaQueLoGenera', !estaRestringido);
    }
  }
});
