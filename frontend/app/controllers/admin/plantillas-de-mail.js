import Ember from "ember";
import ScrollerInjected from "../../mixins/scroller-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import NavigatorInjected from "msr-backoffice-frontend/mixins/navigator-injected";
import FormularioDeAltaServiceInjected from "../../mixins/formulario-de-alta-service-injected";

export default Ember.Controller.extend(FormularioDeAltaServiceInjected, NavigatorInjected, ScrollerInjected, ReceptorDeMensajes,{
  actions: {
    editar(plantilla){
      this.irAlEditor();
      this.navigator().navigateToEditarPlantillaDeMail(plantilla);
    }
  },

  mensajes: {
    plantillaDeMailModificada(plantillaModificada){
      var idModificada = plantillaModificada.get('id');
      var plantillaExistente = this._plantillas().findBy('id', idModificada);
      if (plantillaExistente) {
        plantillaExistente.setProperties(plantillaModificada);
      } else {
        Ember.Logger.error('No se encontró la plantilla modificada ', idModificada, ' en la lista de plantillas del modelo');
      }
    },
  },

  _plantillas() {
    return this.get('model');
  },

  irAlEditor() {
    this.scrollTo('#plantilla-en-edicion');
  }
});
