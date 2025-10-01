import Ember from "ember";

export default Ember.Component.extend({
  restriccion: null,

  _restriccion() {
    return this.get('restriccion');
  },

  _periodosDeValidez(){
    return this._restriccion().get('periodosDeValidez');
  },

  actions: {
    sacarRestriccion() {
      this.set('restriccion', null);
    },

    borrarPeriodoDeValidez(periodoDeValidez){
      this._periodosDeValidez().removeObject(periodoDeValidez);
    },

    agregarPeriodoDeValidez(){
      let nuevoPeriodoDeValidez = Ember.Object.create({desde: null, hasta: null});
      this._periodosDeValidez().pushObject(nuevoPeriodoDeValidez);
    }
  }
});
