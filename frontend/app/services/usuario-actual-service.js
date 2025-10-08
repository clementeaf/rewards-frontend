import Ember from 'ember';
import PermisosConocidos from '../utils/permisos-conocidos';
import UsuarioServiceInjected from '../mixins/usuario-service-injected';

/**
 * Servicio que permite consultar informacion del usuario actual en la app
 *
 **/
export default Ember.Service.extend(UsuarioServiceInjected, {

  /**
   * Indica especificamente si este usuario puede utilizar las herramientas de monitoreo de la aplicacion
   */
  estaAutorizadoAMonitorear(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.MONITOR_APP);
  },
  estaAutorizadoADebuguear(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EJECUTAR_GROOVY);
  },
  /**
   * Indica si el usuario loggeado puede ver el menu de administracion.
   * Cada subitem del menu deberia a su vez ser accesible con otro permiso.
   */
  estaAutorizadoAVerMenuDeAdministracion(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.VISUALIZAR_MENU_ADMINISTRACION);
  },
  estaAutorizadoABorrarTiendas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.BORRAR_TIENDA);
  },
  estaAutorizadoACrearTiendas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.SOPORTAR_TIENDA);
  },
  estaAutorizadoAEditarDatosPersonales(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_DATOS_PERSONALES);
  },
  estaAutorizadoAEditarDatosDeLaCuenta(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_CUENTA);
  },
  estaAutorizadoAConsultarCuentas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.CONSULTAR_CUENTAS);
  },
  estaAutorizadoAEditarFormularios(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ACCEDER_A_EDITAR_FORMULARIO);
  },
  estaAutorizadoACrearFormulario(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.CREAR_FORMULARIO);
  },
  estaAutorizadoABorrarFormulario(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.BORRAR_FORMULARIO);
  },
  estaAutorizadoAVerFormulariosDeAlta(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.VISUALIZAR_FORMULARIO);
  },

  /**
   * Indica si este usuario puede ver las partes de Solitudes
   */
  estaAutorizadoAVerSolicitudes(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.CONSULTAR_SOLICITUDES);
  },
  estaAutorizadoAEditarSolicitudes(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_SOLICITUDES);
  },
  /**
   * Indica si este usuario puede editar miembtos
   */
  estaAutorizadoAEditarMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.MODIFICAR_MIEMBROS);
  },
  estaAutorizadoAEditarHabilitacionMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_HABILITACION_EN_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarNombreYApellidosDeMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_NOMBREYAPELLIDO_EN_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarBebidaFavoritaDeMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_BEBIDA_FAVORITA_EN_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarCantidadStarsYNivelDeMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_STARS_Y_NIVEL_EN_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarMailDeMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_MAIL_EN_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarSaldoDeTarjeta(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_SALDO_TC_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarReposicionDeTarjeta(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.HABILITAR_PARA_REPOSICION_DE_TARJETA);
  },
  estaAutorizadoAEditarBloqueoDesbloqueoDeTarjeta(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_BLOQUEO_TC_AUDITORIA_MIEMBRO);
  },
  estaAutorizadoAEditarFechaDeNacimientoDeMiembros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_FECHA_NACIMIENTO_EN_AUDITORIA_MIEMBRO);
  },
  /**
   * Indica si este usuario puede ver las auditorias de operaciones
   */
  estaAutorizadoAVerAuditoriaDeOperaciones(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.CONSULTAR_ESTADO_OPERACIONES);
  },
  /**
   * Indica si este usuario puede ver la seccion de auditoria para recarga de tarjetas
   */
  estaAutorizadoAVerAuditoriaDeRecargaDeTarjetas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.REALIZAR_RECARGAS_DE_TARJETAS);
  },
  /**
   * Indica si este usuario puede ver informacion de Beneficios
   */
  estaAutorizadoAVerBeneficiosDeNivelPromocionesYResumen(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.CONSULTAR_BENEFICIOS);
  },
  /**
   * Indica si este usuario puede ademas administrar Redimibles
   */
  estaAutorizadoAAdministrarBeneficios(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_BENEFICIOS);
  },
  /**
   * Indica si este usuario puede entregar vouchers
   */
  estaAutorizadoAEntregarVouchers(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ENTREGAR_VOUCHER);
  },
  /**
   * Indica si este usuario puede filtrar por nombre y apellido en la auditoria de miembro
   */
  estaAutorizadoAFiltrarMiembrosPorNombre(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.FILTRAR_POR_NOMBRE_AUDITORIA_MIEMBRO);
  },
  /**
   * Indica si este usuario puede filtrar por nombre y apellido en la auditoria de operaciones
   */
  estaAutorizadoAFiltrarOperacionesPorNombre(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.FILTRAR_POR_NOMBRE_AUDITORIA_OPERACIONES);
  },
  /**
   * Indica si el usuario loggeado puede correr procesos manualmente
   */
  estaAutorizadoACorrerProcesos(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.CORRER_PROCESOS);
  },
  /**
   * Indica si el usuario loggeado puede ver la información del programa
   */
  estaAutorizadoAVerLaInformacionDelPrograma(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.VER_INFORMACION_DEL_PROGRAMA);
  },

  estaAutorizadoAVerConfiguracionDeLaAplicacion(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.VISUALIZAR_CONFIGURACION_DE_LA_APLICACION);
  },

  estaAutorizadoAEditarConfiguracionDeLaAplicacion(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.EDITAR_CONFIGURACION_DE_LA_APLICACION);
  },
  /**
   * Indica si el usuario loggeado puede administrar los usuarios de la aplicacion
   */
  estaAutorizadoAAdministrarUsuarios(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_USUARIOS);
  },
  /**
   * Indica si el usuario loggeado puede administrar los grupos, roles y permisos de la aplicacion
   */
  estaAutorizadoAAdministrarSeguridad(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_SEGURIDAD);
  },
  /**
   * Indica si el usuario loggeado puede administrar el estado de envio de los mails
   */
  estaAutorizadoAAdministrarEstadoDeEnvioDeMails(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_ESTADO_ENVIO_MAILS);
  },
  /**
   * Indica si el usuario loggeado puede administrar las plantillas de mails
   */
  estaAutorizadoAAdministrarPlantillas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_PLANTILLAS_DE_MAIL);
  },
  /**
   * Indica si el usuario loggeado puede administrar los alias de beneficios para emblue
   */
  estaAutorizadoAAdministrarAliasDeBeneficios(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_ALIAS_DE_BENEFICIOS);
  },
  /**
   * Indica si el usuario loggeado puede administrar lo referido a customer voice
   */
  estaAutorizadoAAdministrarCustomerVoice(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_CUSTOMER_VOICE);
  },
  /**
   * Indica si el usuario loggeado puede ver administrar tarjetas
   */
  estaAutorizadoAAdministrarTarjetas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_TARJETAS);
  },
  /**
   * Indica si el usuario loggeado puede ver la seccion de administracion de tarjetas
   */
  estaAutorizadoAVisualizarTarjetas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.VISUALIZAR_TARJETAS);
  },
  /**
   * Indica si el usuario loggeado puede administrar las tiendas
   */
  estaAutorizadoAAdministrarTiendas(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.SOPORTAR_TIENDA);
  },
  /**
   * Indica si el usuario loggeado puede administrar los items micros
   */
  estaAutorizadoAAdministrarItemsMicros(){
    return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ADMINISTRAR_ITEM_MICROS);
  },
  /**
   * Permite eliminar un miembro rewards
   */
    estaAutorizadoAEliminarMiembros(){
      return this._elUsuarioActualTieneElPermiso(PermisosConocidos.MODIFICAR_MIEMBROS);
      // return this._elUsuarioActualTieneElPermiso(PermisosConocidos.ELIMINAR_MIEMBRO);
    },

  _elUsuarioActualTieneElPermiso(idDePermiso){
    var usuario = this.usuarioService().getCurrentUser();
    if (!usuario) {
      return false;
    }
    var permisos = usuario.get('permisos');
    return permisos && permisos.contains(idDePermiso);
  },

});
