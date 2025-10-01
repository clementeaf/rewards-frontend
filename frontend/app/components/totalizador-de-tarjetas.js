import Ember from "ember";

export default Ember.Component.extend({
  tarjetas: Ember.A(),
  
  totalTarjetas: Ember.computed('tarjetas', function() {
    return this._tarjetas().length;
  }),
  
  totalSaldos: Ember.computed('tarjetas', function() {
    return this._tarjetas().reduce((total, tarjeta) => 
      total + tarjeta.get('saldo'), 0
    );
  }),

  _tarjetas() {
    return this.get('tarjetas');
  }
});
