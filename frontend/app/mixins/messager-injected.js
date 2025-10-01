import Ember from "ember";

/**
 * Agrega el servicio de mensajeria interno como colaborador
 */
export default Ember.Mixin.create({
  messagerService: Ember.inject.service('messager-service'),
  messager(){
    return this.get('messagerService');
  },
});
