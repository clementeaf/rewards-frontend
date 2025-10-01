import Ember from 'ember';
import SingleToResourceService from './single-to-resource-service';
import ApiRequest from 'msr-backoffice-frontend/utils/api-request';

/**
 * Servicio para obtener las solicitudes del backend e informar cambios
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'solicitudes/',

  findById(idDeSolicitud){
    var apiRequest = ApiRequest.getting(this.apiPathDeLosRecursos() + "/" + idDeSolicitud);
    return this.sendAndEmberize(apiRequest);
  },


  buscar(filtro){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso, filtro);
    return this.sendAndEmberizeWithSpinner(apiRequest);
  },

  /**
   * Marca la solicitud como aprobada
   */
  aprobar(solicitud){
    var apiRequest = ApiRequest.putting(this.apiPathDeLosRecursos() + '/aprobar', solicitud);
    return this.sendAndEmberize(apiRequest);
  },
  /**
   * Marca la solicitud como postergada
   */
  postergar(solicitud){
    var apiRequest = ApiRequest.putting(this.apiPathDeLosRecursos() + solicitud.get('id') + '/postergar', solicitud);
    return this.sendAndEmberize(apiRequest);
  },
  /**
   * Marca la solicitud como marcada para reimpresion
   */
  reimprimir(solicitud){
    var apiRequest = ApiRequest.putting(this.apiPathDeLosRecursos() + solicitud.get('id') + '/reimprimir', solicitud);
    return this.sendAndEmberize(apiRequest);
  },

});
