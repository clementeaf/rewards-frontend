import Ember from "ember";

/**
 * Este mixin permite tener un scroller como colaborador interno
 * para evitar la repeticion de codigo de declararlo cada vez, pero tampoco
 * forzar a que todos los componentes lo tengan
 */
export default Ember.Mixin.create({
  _scrollerService: Ember.inject.service('scroller'),
  scrollTo(element){
    return this.get('_scrollerService').scrollVertical(element);
  }
});
