import Ember from 'ember';

/**
 * Este componente sirve para mostrar un label con las clases colorinches de bootstrap, en función de
 * si un valor es verdadero, falso, o no está definido.
 */
export default Ember.Component.extend({
  tagName: 'label',
  classNames: ['label'],
  classNameBindings: ['labelClass'],

  labelClass: Ember.computed('valor', function () {
    switch (this._valor()) {
      case true:
        return 'label-success';
      case false:
        return 'label-danger';
      default:
        return 'label-default';
    }
  }),

  labelText: Ember.computed('valor', function () {
    switch (this._valor()) {
      case true:
        return this.get('successText');
      case false:
        return this.get('dangerText');
      default:
        return this.get('defaultText');
    }
  }),

  _valor() {
    return this.get('valor');
  }

});
