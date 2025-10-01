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
    let definedLoggedUser = this.get('loggedUser');
    if (!definedLoggedUser) {
      // DESARROLLO: Mock de usuario para saltear autenticación con todos los permisos
      definedLoggedUser = LoggedUserTo.create({
        id: 1,
        nombre: "Usuario de Desarrollo",
        email: "demo@example.com",
        completeName: "Usuario de Desarrollo",
        permisos: [
          "MONITOR_APP", "EJECUTAR_GROOVY", "VISUALIZAR_MENU_ADMINISTRACION",
          "BORRAR_TIENDA", "SOPORTAR_TIENDA", "EDITAR_DATOS_PERSONALES",
          "EDITAR_CUENTA", "CONSULTAR_CUENTAS", "ACCEDER_A_EDITAR_FORMULARIO",
          "CREAR_FORMULARIO", "BORRAR_FORMULARIO", "VISUALIZAR_FORMULARIO",
          "CONSULTAR_SOLICITUDES", "EDITAR_SOLICITUDES", "MODIFICAR_MIEMBROS",
          "ADMINISTRAR_BENEFICIOS", "ENTREGAR_VOUCHER", "CORRER_PROCESOS",
          "VER_INFORMACION_DEL_PROGRAMA", "VISUALIZAR_CONFIGURACION_DE_LA_APLICACION",
          "EDITAR_CONFIGURACION_DE_LA_APLICACION", "ADMINISTRAR_USUARIOS",
          "ADMINISTRAR_SEGURIDAD", "ADMINISTRAR_ESTADO_ENVIO_MAILS",
          "ADMINISTRAR_PLANTILLAS_DE_MAIL", "ADMINISTRAR_ALIAS_DE_BENEFICIOS",
          "ADMINISTRAR_CUSTOMER_VOICE", "ADMINISTRAR_TARJETAS", "VISUALIZAR_TARJETAS",
          "ADMINISTRAR_ITEM_MICROS", "CONSULTAR_BENEFICIOS", "REALIZAR_RECARGAS_DE_TARJETAS",
          "CONSULTAR_ESTADO_OPERACIONES", "FILTRAR_POR_NOMBRE_AUDITORIA_MIEMBRO",
          "FILTRAR_POR_NOMBRE_AUDITORIA_OPERACIONES", "EDITAR_HABILITACION_EN_AUDITORIA_MIEMBRO",
          "EDITAR_NOMBREYAPELLIDO_EN_AUDITORIA_MIEMBRO", "EDITAR_BEBIDA_FAVORITA_EN_AUDITORIA_MIEMBRO",
          "EDITAR_STARS_Y_NIVEL_EN_AUDITORIA_MIEMBRO", "EDITAR_MAIL_EN_AUDITORIA_MIEMBRO",
          "EDITAR_SALDO_TC_AUDITORIA_MIEMBRO", "HABILITAR_PARA_REPOSICION_DE_TARJETA",
          "EDITAR_BLOQUEO_TC_AUDITORIA_MIEMBRO", "EDITAR_FECHA_NACIMIENTO_EN_AUDITORIA_MIEMBRO"
        ]
      });
      this.set('loggedUser', definedLoggedUser);
    }
    return definedLoggedUser;
  },

  buscarParaEdicion(id) {
    let apiRequest = ApiRequest.getting(this.apiPathDelRecurso(id) + '/paraEdicion');
    return this.sendAndEmberize(apiRequest);
  },

});
