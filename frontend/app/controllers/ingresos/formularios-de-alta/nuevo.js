import Ember from 'ember';
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import MessagerInjected from "../../../mixins/messager-injected";
import Mensaje from "../../../utils/mensaje";
import FormularioDeAltaService from "../../../mixins/formulario-de-alta-service-injected";

export default Ember.Controller.extend(FormularioDeAltaService, NavigatorInjected, MessagerInjected, {

  actions: {
    crearFormularioDeAlta(){
      const formulario = this.get('model');
      this.formularioDeAltaService().create(formulario).then(formularioCreado => {
        this.navigator().navigateToAdministarFormularios();
        this.messager().publicar(Mensaje.FORMULARIO_DE_ALTA_CREADO, formularioCreado);
      });
    },

    noIncluido(inciso){
      return inciso !== null;
    }
  },
});
