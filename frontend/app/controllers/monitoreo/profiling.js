import Ember from "ember";
import ProfileServiceInjected from "../../mixins/profile-service-injected";
import timeizar from "../../utils/timeizar";

export default Ember.Controller.extend(ProfileServiceInjected, {
  arbolDeProfile: {},
  parametrosDeProfile: {
    umbralDeArgumentos: 200,
    umbralDeTrazas: 200
  },
  umbralDeTrazasEnTiempo: Ember.computed('parametrosDeProfile.umbralDeTrazas', function(){
    return timeizar(this.parametrosDeProfile.umbralDeTrazas/100);
  }),
  umbralDeArgumentosEnTiempo: Ember.computed('parametrosDeProfile.umbralDeArgumentos', function(){
    return timeizar(this.parametrosDeProfile.umbralDeArgumentos/100);
  }),

  mostrar: function(promise){
    promise.then((trace)=>{
      this.set('arbolDeProfile', trace);
    });
  },

  actions: {
    empezarProfiling(){
      this.profileService().empezarProfiling(this.parametrosDeProfile);
    },
    detenerProfiling(){
      this.mostrar(this.profileService().detenerProfiling());
    },
    obtenerArbol(){
      this.mostrar(this.profileService().obtenerArbol());
    }
  }

});
