import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import ScrollerInjected from "../../mixins/scroller-injected";

export default Ember.Controller.extend(NavigatorInjected, ScrollerInjected, {

  actions: {
    quiereVerDetalles(error){
      this.navigator().navigateToDetalleDeError(error);
      this.scrollearAlDetalle();
    },
  },

  scrollearAlDetalle() {
    this.scrollTo('#detallesDelError');
  }
});
