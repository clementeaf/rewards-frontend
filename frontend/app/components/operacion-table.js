import Ember from "ember";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";

export default Ember.Component.extend(NavigatorInjected, {
  actions: {
    alClickearSobre(operacion){
      let accionAlClickear = this.get('accionAlClickearUna');
      accionAlClickear(operacion);
    }
  }
});
