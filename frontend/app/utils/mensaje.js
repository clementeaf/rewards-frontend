/**
 * Esta "clase" hace las veces de enum con los distintos nombres de canales en los que se publican mensajes.
 * Los suscriptores pueden usar la constante directamente, o indirectamente a traves de un hash "mensajes"
 * si utilizan
 */
export default {
  USUARIO_CREADO: 'usuarioCreado',
  USUARIO_MODIFICADO: 'usuarioModificado',
  USUARIO_ELIMINADO: 'usuarioEliminado',

  GRUPO_DE_CREDENCIALES_CREADO: 'grupoDeCredencialesCreado',
  GRUPO_DE_CREDENCIALES_MODIFICADO: 'grupoDeCredencialesModificado',
  GRUPO_DE_CREDENCIALES_ELIMINADO: 'grupoDeCredencialesEliminado',

  ROL_CREADO: 'rolCreado',
  ROL_MODIFICADO: 'rolModificado',
  ROL_ELIMINADO: 'rolEliminado',

  PERMISO_MODIFICADO: 'permisoModificado',

  MIEMBRO_MODIFICADO: 'miembroModificado',
  TARJETA_ASIGNADA: 'tarjetaAsignada',

  REGLA_CREADA: 'reglaCreada',
  REGLA_MODIFICADA: 'reglaModificada',

  SEGMENTO_CREADO: 'segmentoCreado',
  SEGMENTO_MODIFICADO: 'segmentoModificado',

  TIENDA_CREADA: 'tiendaCreada',
  TIENDA_MODIFICADA: 'tiendaModificada',
  TIENDA_EN_EDICION: 'tiendaEnEdicion',
  TIENDA_ELIMINADA: 'tiendaEliminada',

  TARJETA_CREADA: 'tarjetaCreada',
  TARJETA_MODIFICADA: 'tarjetaModificada',
  TARJETA_ELIMINADA: 'tarjetaEliminada',
  TARJETA_RECARGADA: 'tarjetaRecargada',

  SALDOS_ACTUALIZADOS: 'saldosActualizados',

  REDIMIBLE_MODIFICADO: 'redimibleModificado',
  REDIMIBLE_CREADO: 'redimibleCreado',
  REDIMIBLE_ELIMINADO: 'redimibleEliminado',

  ITEM_MICROS_MODIFICADO: 'itemMicrosModificado',
  ITEM_MICROS_CREADO: 'itemMicrosCreado',

  ITEM_MULTIOPCION_MODIFICADO: 'itemMultiopcionModificado',
  ITEM_MULTIOPCION_CREADO: 'itemMultiopcionCreado',

  FORMULARIO_DE_ALTA_MODIFICADO: 'formularioDeAltaModificado',
  FORMULARIO_DE_ALTA_ELIMINADO: 'formularioDeAltaEliminado',
  FORMULARIO_DE_ALTA_CREADO:  'formularioDeAltaCreado',

  PLANTILLA_MODIFICADA: 'plantillaDeMailModificada',

  SOLICITUD_DE_MEMBRESIA_POSTERGADA: 'solicitudDeMembresiaPostergada',
  SOLICITUDES_DE_MEMBRESIA_APROBADAS: 'solicitudesDeMembresiaAprobadas',
  SOLICITUD_MARCADA_PARA_REIMPRESION: 'solicitudMarcadaParaReimpresion',
};
