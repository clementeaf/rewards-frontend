import Ember from 'ember';
import ApiRequest from 'msr-backoffice-frontend/utils/api-request';
import SingleToResourceService from './single-to-resource-service';

export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'formularios-de-alta',

  findWithFilter(filtro){
    let apiRequest = ApiRequest.posting(this.pathDelRecurso + "/find", filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  nuevoFormularioDeAlta(){
    return Ember.Object.create({
      sexo: null,
      estadoCivil: null,
      bebidaFavorita: null,
      esExtranjero: false,
      politicamenteExpuesta: false,
      datosPoliticos: null,
      deseaRecibirNovedades: false
    });
  },
});
