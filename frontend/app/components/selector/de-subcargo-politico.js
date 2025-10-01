import Ember from 'ember';
import CombosServiceInjected from "../../mixins/combos-service-injected";

export default Ember.Component.extend(CombosServiceInjected, {
  subcargosPoliticosDisponibles: Ember.A(),

  init(){
    this._super(...arguments);
    this._actualizarSubCargosPoliticos();
  },

  cargoPoliticoChanged: Ember.observer('cargoPolitico', function() {
    this._actualizarSubCargosPoliticos();
    this.set('subcargoPoliticoElegido', null);
  }),

  haySubcargosDisponibles: Ember.computed('subcargosPoliticosDisponibles', function() {
    return this.subcargosPoliticosDisponibles.length !== 0;
  }),

  _actualizarSubCargosPoliticos() {
   this.combosService().subcargosPoliticos(this.get('cargoPolitico.id')).then(subcargos => {
      this.set('subcargosPoliticosDisponibles', subcargos);
    });
  },
});
