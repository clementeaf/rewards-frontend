import Ember from "ember";

export default Ember.Mixin.create({
  _ejecutorDeTareasService: Ember.inject.service('ejecutor-de-tareas-service'),
  ejecutorDeTareasService(){
    return this.get('_ejecutorDeTareasService');
  },
});
