import Ember from "ember";
import CongestionValuelinkInjected from "../../../mixins/monitor-congestion-valuelink-service-injected";

export default Ember.Controller.extend(CongestionValuelinkInjected, {
  actions: {
    obtenerMediciones(){
      this.congestionValuelinkService().obtenerMediciones().then((mediciones)=>{
        this.set('model', mediciones);
      });
    },
  },
});
