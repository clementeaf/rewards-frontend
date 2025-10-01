import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDelUsuarioEditado: {},

  noHayDatosDelRolEditado: Ember.computed('datosDelRolEditado', function () {
    const rolEditado = this._rolEditado();
    return Ember.isEmpty(rolEditado);
  }),

  titulin: Ember.computed('datosDelRolEditado', function () {
    const rolEditado = this._rolEditado();
    return 'Datos del Rol Editado • ' + rolEditado;
  }),

  _rolEditado: function () {
    return this.get('datosDelRolEditado.rolEditado');
  }
});
