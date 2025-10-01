import Ember from "ember";

export default Ember.Component.extend({
  opcionCol: 's1',
  opcionesDeMultiCheck: Ember.A(),

  opcionesChanged: Ember.observer('opciones', function() {
    this._actualizarOpcionesDeMultiCheck();
  }),

  elegidasChanged: Ember.observer('elegidas', function() {
    this._actualizarOpcionesDeMultiCheck();
  }),

  opcionesDeMultiCheckChanged: Ember.observer('opcionesDeMultiCheck.@each.elegida', function() {
    let opcionesElegidas = Ember.A(this.get('opcionesDeMultiCheck')
      .filter(opcionMultiCheck => opcionMultiCheck.get('elegida'))
      .map(opcionMultiCheck => opcionMultiCheck.get('opcion')));

    //solo actualizamos cuando es necesario, para no seguir triggereando los observers
    let elegidas = this.get('elegidas');
    let faltaAlgunaOpcion = !opcionesElegidas.every(opcion => elegidas.includes(opcion));
    let tienenDistintaCantidadDeElegidas = elegidas.length !== opcionesElegidas.length;
    let esNecesarioActualizarLaListaDeElegidas = faltaAlgunaOpcion || tienenDistintaCantidadDeElegidas;
    if(esNecesarioActualizarLaListaDeElegidas) {
      this.set('elegidas', opcionesElegidas);
    }
  }),

  _actualizarOpcionesDeMultiCheck() {
    let opcionesDeMulticheck = this._calcularOpcionesDeMulticheck();
    this.set('opcionesDeMultiCheck', opcionesDeMulticheck);
  },

  _calcularOpcionesDeMulticheck() {
    return Ember.A(this.get('opciones').map(opcion => {
      let opcionEncontrada = this.get('elegidas').findBy('id', opcion.get('id'));
      let elegida = (opcionEncontrada !== undefined);
      return this._crearOpcionMulticheck(opcion, elegida);
    }));
  },

  _crearOpcionMulticheck(opcion, elegida){
    return Ember.Object.create({
      opcion: opcion,
      elegida: elegida,
      label: opcion.get(this.get('atributoParaLabelDeOpciones')),
    });
  }
});
