import Ember from 'ember';

export default Ember.Component.extend({
  labelDeStatus: Ember.computed('status', function() {
    var status = this.get('status');
    return status ? status : '-';
  }),

  colorDeStatus: Ember.computed('status', function() {
    var status = this.get('status');
    switch (status) {
      case 'Aprobada':
        return 'green';
      case 'Pendiente':
        return 'light-blue darken-3';
      case 'Reimpresion':
        return 'amber darken-1';
      case 'Postergada':
        return 'grey';
    }
    return 'grey';
  })
});
