/**
 * Esta "clase" hace las veces de enum con los distintos permisos
 *
 */
export default {

  /**
   * Permite acceder a la aplicacion
   */
  ACCESS_APPLICATION: 'ACCESS_APPLICATION',
  /**
   * Permite visualizar el menu de administracion.
   */
  VISUALIZAR_MENU_ADMINISTRACION: 'VISUALIZAR_MENU_ADMINISTRACION',
  /**
   * Permite consultar, crear y modificar una tienda
   */
  SOPORTAR_TIENDA: 'SOPORTAR_TIENDA',
  /**
   * Permite borrar una tienda
   */
  BORRAR_TIENDA: 'BORRAR_TIENDA',
  /**
   * Permite administrar Item Micros
   */
  ADMINISTRAR_ITEM_MICROS: 'ADMINISTRAR_ITEM_MICROS',
  /**
   * Permite visualizar formulario
   */
  VISUALIZAR_FORMULARIO: 'VISUALIZAR_FORMULARIO',
  /**
   * Crear visualizar formulario
   */
  CREAR_FORMULARIO: 'CREAR_FORMULARIO',
  /**
   * Borrar visualizar formulario
   */
  BORRAR_FORMULARIO: 'BORRAR_FORMULARIO',
  /**
   * Editar datos personales, domiciliares y de persona pol. expuesta
   */
  EDITAR_DATOS_PERSONALES: 'EDITAR_DATOS_PERSONALES',
  /**
   * "Editar datos de la Cuenta"
   */
  EDITAR_CUENTA: 'EDITAR_CUENTA',
  /**
   * "Consultar datos de la cuenta"
   */
  CONSULTAR_CUENTAS: 'CONSULTAR_CUENTAS',
  /**
   * "Acceder a ver datos de la Solicitud"
   */
  CONSULTAR_SOLICITUDES: 'CONSULTAR_SOLICITUDES',
  /**
   * "Acceder a editar datos de solicitud"
   */
  EDITAR_SOLICITUDES: 'EDITAR_SOLICITUDES',
  /**
   * "Acceder a editar datos de la Cuenta y formulario"
   */
  ACCEDER_A_EDITAR_FORMULARIO: 'ACCEDER_A_EDITAR_FORMULARIO',
  /**
   * Permite acceder a la seccion de monitoreo
   */
  MONITOR_APP: 'MONITOR_APP',
  /**
   * Permite Consultar el estado de los miembros
   */
  CONSULTAR_AUDITORIA_MIEMBROS: 'CONSULTAR_AUDITORIA_MIEMBROS',
  /**
   * Permite Consultar el estado de las operaciones
   */
  CONSULTAR_ESTADO_OPERACIONES: 'CONSULTAR_ESTADO_OPERACIONES',
  /**
   * Permite realizar recargas de tarjetas
   */
  REALIZAR_RECARGAS_DE_TARJETAS: 'REALIZAR_RECARGAS_DE_TARJETAS',
  /**
   * Permite ver la información del programa
   */
  VER_INFORMACION_DEL_PROGRAMA: 'VER_INFORMACION_DEL_PROGRAMA',
  /**
   * Permite Consultar beneficios por nivel, promociones y resumen
   */
  CONSULTAR_BENEFICIOS: 'CONSULTAR_BENEFICIOS',
  /**
   * Permite administrar beneficios por nivel, promociones, redimibles y resumen
   */
  ADMINISTRAR_BENEFICIOS: 'ADMINISTRAR_BENEFICIOS',
  /**
   * Permite Modificar estado de miembros
   */
  MODIFICAR_MIEMBROS: 'MODIFICAR_MIEMBROS',
  /**
   * Permite Entregar voucher
   */
  ENTREGAR_VOUCHER: 'ENTREGAR_VOUCHER',
  /**
   * Permite Ver contenido de Combo de Nivel
   **/
  ACCEDER_A_LISTADO_DE_NIVEL: 'ACCEDER_A_LISTADO_DE_NIVEL',
  /**
   * Permite Ver contenido de Combo de Sexo
   **/
  ACCEDER_A_LISTADO_DE_SEXO: 'ACCEDER_A_LISTADO_DE_SEXO',
  /**
   * Permite Ver contenido de Combo de Tipo de Operacion
   **/
  ACCEDER_A_LISTADO_DE_TIPO_OPERACION: 'ACCEDER_A_LISTADO_DE_TIPO_OPERACION',
  /**
   * Permite Ver contenido de Combo de Tipo de Tarjeta
   **/
  ACCEDER_A_LISTADO_DE_TIPO_TARJETA: 'ACCEDER_A_LISTADO_DE_TIPO_TARJETA',
  /**
   * Permite Ver contenido de Combo de Tienda
   **/
  ACCEDER_A_LISTADO_DE_TIENDA: 'ACCEDER_A_LISTADO_DE_TIENDA',
  /**
   * Permite Ver contenido de Combo de Montos
   **/
  ACCEDER_A_LISTADO_DE_MONTOS: 'ACCEDER_A_LISTADO_DE_MONTOS',
  /**
   * Permite Ver contenido de Combo de Estado de Solicitud
   **/
  ACCEDER_A_LISTADO_DE_ESTADO_SOLICITUD: 'ACCEDER_A_LISTADO_DE_ESTADO_SOLICITUD',
  /**
   * Permite acceder al listado de beneficios consumibles
   **/
  ACCEDER_A_LISTADO_DE_BENEFICIOS_CONSUMIBLES: 'ACCEDER_A_LISTADO_DE_BENEFICIOS_CONSUMIBLES',
  /**
   * Permite Ver contenido de Combo de Bebida Favorita
   **/
  ACCEDER_A_LISTADO_DE_BEBIDA_FAVORITA: 'ACCEDER_A_LISTADO_DE_BEBIDA_FAVORITA',
  /**
   * Permite Ver contenido de Combo/Automcomplete de Item Micros
   **/
  ACCEDER_A_LISTADO_DE_ITEM_MICROS: 'ACCEDER_A_LISTADO_DE_ITEM_MICROS',
  /**
   * Permite Ver contenido de Combo/Automcomplete de relacion de conjuntos
   **/
  ACCEDER_A_LISTADO_DE_RELACION_CONJUNTOS: 'ACCEDER_A_LISTADO_DE_RELACION_CONJUNTOS',
  /**
   * Permite Ver contenido de Combo/Automcomplete de estado civil
   **/
  ACCEDER_A_LISTADO_DE_ESTADO_CIVIL: 'ACCEDER_A_LISTADO_DE_ESTADO_CIVIL',
  /**
   * Permite Ver contenido de Combo/Automcomplete de nivel micros
   **/
  ACCEDER_A_LISTADO_DE_NIVEL_MICROS: 'ACCEDER_A_LISTADO_DE_NIVEL_MICROS',
  /**
   * Permite Ver contenido de Combo/Automcomplete de item multiopcion
   **/
  ACCEDER_A_LISTADO_DE_ITEM_MULTIOPCION: 'ACCEDER_A_LISTADO_DE_ITEM_MULTIOPCION',
  /**
   * Permite Ver contenido de Combo/Automcomplete de redimibles
   **/
  ACCEDER_A_LISTADO_DE_REDIMIBLE: 'ACCEDER_A_LISTADO_DE_REDIMIBLE',
  /**
   * Permite ver el filtro de nombre del miembro para Auditoria de Operaciones
   * */
  FILTRAR_POR_NOMBRE_AUDITORIA_OPERACIONES: 'FILTRAR_POR_NOMBRE_AUDITORIA_OPERACIONES',
  /**
   * Permite ver el filtro por nombre en la Auditoria de Miembros
   **/
  FILTRAR_POR_NOMBRE_AUDITORIA_MIEMBRO: 'FILTRAR_POR_NOMBRE_AUDITORIA_MIEMBRO',
  /**
   * Editar el nombre y apellido del miembro en Auditoria de miembro
   * */
  EDITAR_NOMBREYAPELLIDO_EN_AUDITORIA_MIEMBRO: 'EDITAR_NOMBREYAPELLIDO_EN_AUDITORIA_MIEMBRO',
  /**
   * Editar el e-mail del miembro en Auditoria de miembro
   * */
  EDITAR_MAIL_EN_AUDITORIA_MIEMBRO: 'EDITAR_MAIL_EN_AUDITORIA_MIEMBRO',
  /**
   * Editar la bebida favorita del miembro en Auditoria de miembro
   * */
  EDITAR_BEBIDA_FAVORITA_EN_AUDITORIA_MIEMBRO: 'EDITAR_BEBIDA_FAVORITA_EN_AUDITORIA_MIEMBRO',
  /**
   *Editar cantidad stars y nivel de stars del miembro en Auditoria de miembro
   * */
  EDITAR_STARS_Y_NIVEL_EN_AUDITORIA_MIEMBRO: 'EDITAR_STARS_Y_NIVEL_EN_AUDITORIA_MIEMBRO',
  /**
   * Editar el estado de habilitacion del miembro en Auditoria de miembro
   * */
  EDITAR_HABILITACION_EN_AUDITORIA_MIEMBRO: 'EDITAR_HABILITACION_EN_AUDITORIA_MIEMBRO',
  /**
   * Ver datos de Tc en auditoria del miembro
   * */
  VISUALIZAR_DATOS_TC_AUDITORIA_MIEMBRO: 'VISUALIZAR_DATOS_TC_AUDITORIA_MIEMBRO',
  /**
   * Editar el saldo de TC en auditoria del miembro
   * */
  EDITAR_BLOQUEO_TC_AUDITORIA_MIEMBRO: 'EDITAR_BLOQUEO_TC_AUDITORIA_MIEMBRO',
  /**
   * Editar la fecha de nacimiento del miembro en Auditoria de miembro
   * */
  EDITAR_FECHA_NACIMIENTO_EN_AUDITORIA_MIEMBRO: 'EDITAR_FECHA_NACIMIENTO_EN_AUDITORIA_MIEMBRO',
  /**
   * Acceder al combo de incisos
   * */
  ACCEDER_LISTADO_DE_INCISOS:'ACCEDER_LISTADO_DE_INCISOS',
  /**
   * Bloquear y desbloquear la TC en auditoria del Miembro
   * */
  EDITAR_SALDO_TC_AUDITORIA_MIEMBRO: 'EDITAR_SALDO_TC_AUDITORIA_MIEMBRO',
  /**
   * Permite correr las tareas del sistema de forma manual
   */
  CORRER_PROCESOS: 'CORRER_PROCESOS',
  /**
   * Permite ver la configuracion de la aplicacion
   */
  VISUALIZAR_CONFIGURACION_DE_LA_APLICACION: 'VISUALIZAR_CONFIGURACION_DE_LA_APLICACION',
  /**
   * Permite editar la configuracion de la aplicacion
   */
  EDITAR_CONFIGURACION_DE_LA_APLICACION: 'EDITAR_CONFIGURACION_DE_LA_APLICACION',
  /**
   * Permite administrar los usuarios de la aplicacion
   */
  ADMINISTRAR_USUARIOS: 'ADMINISTRAR_USUARIOS',
  /**
   * Permite administrar los grupos, roles y permisos de la aplicacion
   */
  ADMINISTRAR_SEGURIDAD: 'ADMINISTRAR_SEGURIDAD',
  /**
   * Permite administrar el estado de envio de los mails
   */
  ADMINISTRAR_ESTADO_ENVIO_MAILS: 'ADMINISTRAR_ESTADO_ENVIO_MAILS',
  /**
   * Permite administrar las plantillas para el envio de mails
   */
  ADMINISTRAR_PLANTILLAS_DE_MAIL: 'ADMINISTRAR_PLANTILLAS_DE_MAIL',
  /**
   * Permite administrar los alias de beneficios para emblue
   */
  ADMINISTRAR_ALIAS_DE_BENEFICIOS: 'ADMINISTRAR_ALIAS_DE_BENEFICIOS',
  /**
   * Permite administrar lo referido a customer voice
   */
  ADMINISTRAR_CUSTOMER_VOICE: 'ADMINISTRAR_CUSTOMER_VOICE',
  /**
   * Permite administrar las tarjetas
   */
  ADMINISTRAR_TARJETAS: 'ADMINISTRAR_TARJETAS',
  /**
   * Permite visualizar las tarjetas en la seccion de administracxion de tarjetas
   */
  VISUALIZAR_TARJETAS: 'VISUALIZAR_TARJETAS',
  /**
   * Permite ver el formulario para realizar pruebas contra la API de emblue
   */
  REALIZAR_PRUEBAS_CONTRA_EMBLUE: 'REALIZAR_PRUEBAS_CONTRA_EMBLUE',
  /**
   * Permite ejecutar comandos en la consola de groovy
   */
  EJECUTAR_GROOVY: 'EJECUTAR_GROOVY',
  /**
   * Permite habilitar un miembro para una reposición de tarjeta
   */
  HABILITAR_PARA_REPOSICION_DE_TARJETA: 'HABILITAR_PARA_REPOSICION_DE_TARJETA',
  /**
   * Permite eliminar un miembro rewards
   */
  ELIMINAR_MIEMBRO: 'ELIMINAR_MIEMBRO'

};
