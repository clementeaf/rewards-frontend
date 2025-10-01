import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'li',
  generadoresDeVoucher: Ember.A([]),
  classNames: ['collection-item', 'dismissable'],

  actions: {
    agregarGeneradorDeVoucher(){
      var generadoresDeVoucher = this.get('generadoresDeVoucher');
      this.set('generadoresDeVoucher', generadoresDeVoucher.addObject(this._buildNuevoGeneradorDeVoucher()));
    }
  },

  _buildNuevoGeneradorDeVoucher() {
   return Ember.Object.create({
     tiempoDeValidez: Ember.Object.create({
       cantidadDeTiempoConcreto: Ember.Object.create({
         unidadDeTiempo: null,
         cantidad: null
       }),
       cantidadDeTiempoHastaFinDeMes: null
     }),
     redimible: null,
     estaRestringidoParaLaTiendaQueLoGenera: false,
     limiteDeGeneracion: null
   });
  }
});
