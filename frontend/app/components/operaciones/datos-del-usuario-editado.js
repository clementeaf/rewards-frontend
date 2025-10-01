import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDelUsuarioEditado: {},

  noHayDatosDelUsuarioEditado: Ember.computed('datosDelUsuarioEditado', function () {
    const usuarioEditado = this._usuarioEditado();
    return Ember.isEmpty(usuarioEditado);
  }),

  titulin: Ember.computed('datosDelUsuarioEditado', function () {
    const usuarioEditado = this._usuarioEditado();
    return 'Datos del Usuario Editado • ' + usuarioEditado;
  }),

  _usuarioEditado: function () {
    return this.get('datosDelUsuarioEditado.usuarioEditado');
  }
});
