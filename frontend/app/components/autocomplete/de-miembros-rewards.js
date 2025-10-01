import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  init() {
    this._super(...arguments);
    this.combosService().miembrosRewards().then(miembros => {
      var opciones = Ember.$.map(miembros, function (miembro) {
        miembro.set('descripcion', `${miembro.nombre} (DNI ${miembro.dni})`);
        return miembro;
      });
      this.set('miembrosDisponibles', opciones);
    });
  }
});
