import Ember from "ember";
import AboutServiceInjected from '../../mixins/about-service-injected';

export default Ember.Controller.extend( AboutServiceInjected, {
  parametros: Ember.Object.create({
    snippetGroovy: '1 + 1',
  }),

  actions: {
    ejecutarSnippet(){
      this.set('respuesta', null);
      var parametros = this.get('parametros');
      this.aboutService().ejecutarGroovy(parametros)
        .then((respuesta)=>{
          this.set('respuesta', respuesta.texto);
        });
    }
  },
});
