import Ember from "ember";
import NavigatorInjected from "../../mixins/navigator-injected";
import TabsInjected from "../../mixins/tabs-injected";

export default Ember.Controller.extend(NavigatorInjected, TabsInjected, {
  init() {
    this._super(...arguments);
    this.armarTabs('redimibles-tabs');
  },

  actions: {
    verRedimibles(){
      this.navigator().navigateToRedimibles();
    },
    verItemsMultiopcion(){
      this.navigator().navigateToItemsMultiopcion();
    }
  }
});
