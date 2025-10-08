import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import LoggedUserTo from "../tos/logged-user-to";


/**
 * Esta clase representa el servicio UsuarioService de usuarios Template del backend como punto de acceso a informacion
 * acerca del sistema mismo (desde el frontend)
 */
export default Ember.Service.extend(SingleToResourceService, {
  loggedUser: null,
  pathDelRecurso: 'usuarios',

  newUser(){
    return Ember.RSVP.resolve(Ember.Object.create({userGroup:null}));
  },

  findAndLoadCurrentUser(){
    let definedLoggedUser = this.get('loggedUser');
    if (definedLoggedUser) {
      // No es necesario buscarlo de nuevo, devolvemos el promise ya resuelto
      return new Ember.RSVP.resolve(definedLoggedUser);
    }
    // Vamos a buscarlo al server, y lo cacheamos
    let apiRequest = ApiRequest.getting(this.apiPathDelRecurso('logueado'));
    return this._requester().send(apiRequest)
      .then((fetchedLoggedUser)=> {
        let emberized = LoggedUserTo.create(fetchedLoggedUser);
        this.set('loggedUser', emberized);
        return emberized;
      });
  },

  getCurrentUser(){
    return this.get('loggedUser');
  },

  buscarParaEdicion(id) {
    let apiRequest = ApiRequest.getting(this.apiPathDelRecurso(id) + '/paraEdicion');
    return this.sendAndEmberize(apiRequest);
  },

});
