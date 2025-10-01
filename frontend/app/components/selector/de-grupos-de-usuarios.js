import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  gruposDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this.combosService().gruposDeUsuarios()
      .then((listaDeGrupos)=> {
        this.set('gruposDisponibles', listaDeGrupos);
      });
  }
});
