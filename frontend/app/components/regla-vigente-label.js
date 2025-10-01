/* global moment */
import Ember from "ember";

export default Ember.Component.extend({

  estaVigente: Ember.computed('regla.restriccionDePeriodoDeValidez', function() {
    var restriccionDePeriodoDeValidez = this.get('regla.restriccionDePeriodoDeValidez');
    if (!restriccionDePeriodoDeValidez) {
      // No está restricto a ningun periodo por lo que está vigente
      return true;
    }

    return restriccionDePeriodoDeValidez.periodosDeValidez
      .some(periodo => this._estamosDentroDe(periodo));
  }),

  _estamosDentroDe(periodo) {
    var ahora = moment();
    var desde = moment(periodo.desde);
    var hasta = moment(periodo.hasta);
    return ahora.isBetween(desde, hasta, null, '[]');
  }

});
