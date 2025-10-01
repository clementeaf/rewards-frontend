import Ember from "ember";

export default Ember.Mixin.create({
  _segmentosDeMiembrosService: Ember.inject.service('segmentos-de-miembros-service'),
  segmentosDeMiembrosService(){
    return this.get('_segmentosDeMiembrosService');
  }
});
