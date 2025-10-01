import Ember from "ember";
import AboutServiceInjected from "../mixins/about-service-injected";

export default Ember.Component.extend(AboutServiceInjected, {
  model: {
    versionBackend: 'Cargando...',
    versionFrontend: 'Cargando...'
  },
  init(){
    this._super(...arguments);
    this.aboutService().obtenerVersion()
      .then((versiones)=> {
        this.set('model', versiones);
      });
  }
});
