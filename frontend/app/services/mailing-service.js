import Ember from "ember";
import RequesterInjected from "../mixins/requester-injected";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(RequesterInjected, SingleToResourceService, {
  pathDelRecurso: 'mailing/',

  descartarMailsEnviados(){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "descartar-mails-enviados");
    return this._requester().send(apiRequest);
  },

  autenticarSegunAmbiente(){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "autenticar-segun-ambiente");
    return this._requester().send(apiRequest);
  },

  autenticarCon(credenciales){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "autenticar-con-credenciales", credenciales);
    return this._requester().send(apiRequest);
  },

  crearOActualizarContacto(contacto){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "crearOActualizarContacto", contacto);
    return this._requester().send(apiRequest);
  },

  enviarMailDesdeEmblue(pedido){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "enviarMailDesdeEmblue", pedido);
    return this._requester().send(apiRequest);
  },

  buscarPlantillas() {
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "plantillas");
    return this._requester().sendAndEmberize(apiRequest);
  },

  buscarPlantilla(params){
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "plantillas/" + params.plantilla_id);
    return this._requester().sendAndEmberize(apiRequest);
  },

  update(plantilla){
    var id = plantilla.get('id');
    var apiRequest = ApiRequest.putting(this.pathDelRecurso + "plantillas/" + id, plantilla);
    return this._requester().sendAndEmberize(apiRequest);
  },

  enviarMailsPendientes(){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + "enviar-mails-pendientes");
    return this._requester().send(apiRequest);
  },

  buscarAliasDeBeneficios() {
    var apiRequest = ApiRequest.getting(this.pathDelRecurso + "alias-de-beneficios");
    return this._requester().sendAndEmberize(apiRequest);
  },

  guardarAliasDeBeneficios(alias){
    var apiRequest = ApiRequest.posting(this.pathDelRecurso + 'alias-de-beneficios/', alias);
    return this._requester().sendAndEmberize(apiRequest);
  },

  getDatosParaTestearEmblue() {
    return Ember.Object.create({
      tokenDinamico: null,
      emailId: null,
      triggerId: null,
      credenciales: Ember.Object.create({
        url: null,
        email: null,
        password: null,
        token: null
      }),
      contacto: Ember.Object.create({
        nombre: null,
        apellido: null,
        sexo: null,
        fechaDeNacimiento: null,
        bebidaFavorita: null,
        cantidadDeStars: null,
        nivel: null,
        instanteDeInscripcion: null,
        instanteDeCambioDeNivel: null,
        instanteDeUltimaRecarga: null,
        saldoTotal: null,
        firmoContrato: null,
        deseaRecibirNovedades: null,
        tokenParaRecuperarPassword: null,
        cantidadDeVouchers: null,
        tokenParaVerificarCuenta: null
      }),
      cantidadesDeVouchers: Ember.A()
    });
  },

});
