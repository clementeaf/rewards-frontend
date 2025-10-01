import Ember from "ember";
import AboutServiceInjected from "../../mixins/about-service-injected";

export default Ember.Controller.extend(AboutServiceInjected, {
  performanceData: '',
  vmParameters: '',
  lastError: '',
  
  actions: {
    reloadPerformanceData(){
      this.aboutService().getPerformanceData()
        .then((newPerformanceData)=> {
          this.set('performanceData', newPerformanceData);
        });
    },

    reloadVmData(){
      this.aboutService().getVmParameters()
        .then((newVmParemeters)=> {
          this.set('vmParameters', newVmParemeters);
        });
    },

    reloadLastErrorData(){
      this.aboutService().getLastError()
        .then((newLastError)=> {
          this.set('lastError', newLastError);
        });
    }
  }

});
