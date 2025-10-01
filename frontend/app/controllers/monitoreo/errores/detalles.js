import Ember from "ember";

export default Ember.Controller.extend({
  indiceElegido: 0,
  contextoElegido: Ember.computed('indiceElegido','model.ultimosContextos', function () {
    let indiceElegido = this.get('indiceElegido');
    let contextoElegido = this._contextos()[indiceElegido];
    return contextoElegido;
  }),
  puedeVerAnterior: Ember.computed('indiceElegido', function () {
    return this.get('indiceElegido') > 0;
  }),
  puedeVerSiguiente: Ember.computed('indiceElegido', 'model.ultimosContextos.length', function () {
    return this.get('indiceElegido') < this._contextos().length - 1;
  }),

  actions: {
    quiereVerContexto(indice){
      this.set('indiceElegido', indice);
    },
    quiereVerAnterior(){
      let indiceAnterior = this.get('indiceElegido') - 1;
      this.set('indiceElegido', indiceAnterior);
    },
    quiereVerSiguiente(){
      let indiceSiguiente = this.get('indiceElegido') + 1;
      this.set('indiceElegido', indiceSiguiente);
    },
    quiereCopiarContenido(){
      this._selectText('contenedorDeDescripcion');
      try {
        document.execCommand('copy');
      } catch (err) {
        Ember.Logger.error('Oops, unable to copy: ' + err, err);
      }
    }
  },

  _contextos(){
    return this.get('model.ultimosContextos');
  },

  _selectText(element) {
    var doc = document;
    let text = doc.getElementById(element);
    let range;
    if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      let selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }


});
