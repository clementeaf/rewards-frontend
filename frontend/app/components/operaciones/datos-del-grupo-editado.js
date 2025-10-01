import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  datosDelUsuarioEditado: {},

  noHayDatosDelGrupoEditado: Ember.computed('datosDelGrupoEditado', function () {
    const grupoEditado = this._grupoEditado();
    return Ember.isEmpty(grupoEditado);
  }),

  titulin: Ember.computed('datosDelGrupoEditado', function () {
    const grupoEditado = this._grupoEditado();
    return 'Datos del Grupo Editado • ' + grupoEditado;
  }),

  _grupoEditado: function () {
    return this.get('datosDelGrupoEditado.grupoEditado');
  }
});
