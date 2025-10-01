import Ember from 'ember';

export default Ember.Component.extend({

  nombreDelNivel: Ember.computed('nivel', function() {
    var nivel = this.get('nivel');
    return nivel ? nivel.nombre : 'Welcome';
  }),

  colorDelNivel: Ember.computed('nivel', function() {
    var nivel = this.get('nivel.nombre');
    switch (nivel) {
      case 'Gold':
        return 'amber darken-1';
      case 'Green':
        return 'green';
      case 'Welcome':
        return 'grey';
    }
    return 'grey';
  })

});
