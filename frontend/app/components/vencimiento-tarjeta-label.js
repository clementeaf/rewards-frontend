import Ember from 'ember';

export default Ember.Component.extend({

  labelDeVencimiento: Ember.computed('tarjeta.fechaDeVencimiento', function() {
    var fecha = this._fechaDeVencimiento();
    return fecha ? (this._concatenarConLabel(fecha)) : 'Sin vencimiento';
  }),

  colorDeEstado: Ember.computed('tarjeta.vencida', function() {
    if(this._estaVencida()) {
        return 'red';
    }
    return 'green';
  }),

  _estaVencida() {
    return this.get('tarjeta.vencida');
  },

  _fechaDeVencimiento() {
    return this.get('tarjeta.fechaDeVencimiento');
  },

  _label(){
    var label = this.get('label');
    if(label === undefined){
      return '';
    }
    return label;
  },

  _concatenarConLabel(fecha) {
    return this._label() + fecha;
  },

});
