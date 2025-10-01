import Ember from "ember";

/**
 * Este mixin permite reutilizar el código de jquery que crea tabs a partir de una lista en la vista.
 * Recibe el nombre o el id del elemento que contiene la lista a tabular, y hace su magia.
 */
export default Ember.Mixin.create({
  armarTabs(elementoQueContieneLosTabs){
    if(elementoQueContieneLosTabs.indexOf('#') === -1){
      elementoQueContieneLosTabs = '#' + elementoQueContieneLosTabs;
    }

    Ember.run.schedule("afterRender", Ember.$(elementoQueContieneLosTabs), function() {
      Ember.$('ul.tabs').tabs();
    });
  }
});
