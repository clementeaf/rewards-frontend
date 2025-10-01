import Ember from "ember";

/**
 * Este servicio representa el objeto que sabe navegar y moverse por secciones de la aplicacion.
 * Abstrae el mecanismo de ruteo de Ember y permite navegar desde cualquier componente.
 *
 * Por otro lado nos permite evitar el conocimiento duplicado de que ruta corresponde a que seccion
 * y de como llegar, especialmente util si tiene argumentos. Y a la hora de mover o cambiar rutas
 * solo hay que tocar en un lugar.
 *
 * Deberia existir un metodo "publico" en esta clase por cada navegacion posible que exista en la aplicacion.
 * Donde "navegacion posible" quiere decir una ruta + set de argumentos usables
 *
 */
export default Ember.Service.extend({

  // Secciones de la aplicacion (y sus variantes)
  navigateToHome(){
    this._navigateTo('home');
  },
  navigateToAdministrarUsuarios(){
    this._navigateTo('admin.usuarios');
  },
  navigateToEditarUsuario(usuario){
    this._navigateTo('admin.usuarios.editar', usuario.get('id'));
  },
  navigateToCrearUsuario(){
    this._navigateTo('admin.usuarios.nuevo');
  },
  navigateToAdministrarGrupos(){
    this._navigateTo('admin.grupos');
  },
  navigateToEditarGrupo(grupo){
    this._navigateTo('admin.grupos.editar', grupo.get('id'));
  },
  navigateToCrearGrupo(){
    this._navigateTo('admin.grupos.nuevo');
  },
  navigateToAdministrarRoles(){
    this._navigateTo('admin.roles');
  },
  navigateToEditarRol(rol){
    this._navigateTo('admin.roles.editar', rol.get('id'));
  },
  navigateToCrearRol(){
    this._navigateTo('admin.roles.nuevo');
  },
  navigateToAdministrarTiendas(){
    this._navigateTo('admin.tiendas');
  },
  navigateToEditarTienda(tienda){
    this._navigateTo('admin.tiendas.editar', tienda.get('id'));
  },
  navigateToCrearTienda(){
    this._navigateTo('admin.tiendas.nuevo');
  },
  navigateToAdministrarTarjetas(){
    this._navigateTo('admin.tarjetas');
  },
  navigateToEditarTarjeta(tarjeta){
    this._navigateTo('admin.tarjetas.editar', tarjeta.get('id'));
  },
  navigateToDetalleTarjeta(tarjeta){
    this._navigateTo('admin.tarjetas.detalle', tarjeta.get('id'));
  },
  navigateToCrearTarjeta(){
    this._navigateTo('admin.tarjetas.nuevo');
  },
  navigateToItemsMicros(){
    this._navigateTo('admin.items-micros');
  },
  navigateToCrearItemMicros() {
    this._navigateTo('admin.items-micros.nuevo');
  },
  navigateToEditarItemMicros(item) {
    this._navigateTo('admin.items-micros.editar', item.get('id'));
  },
  navigateToAdministrarPermisos(){
    this._navigateTo('admin.permisos');
  },
  navigateToEditarPermiso(permiso){
    this._navigateTo('admin.permisos.editar', permiso.get('id'));
  },
  navigateToMonitoreoDeInfo(){
    this._navigateTo('monitoreo.info');
  },
  navigateToMonitoreoDeMetricas(){
    this._navigateTo('monitoreo.metrics');
  },
  navigateToMonitoreoDeProfiling(){
    this._navigateTo('monitoreo.profiling');
  },
  navigateToMonitoreoDeCongestionDeValuelink(){
    this._navigateTo('monitoreo.congestion.valuelink');
  },
  navigateToMonitoreoDeErrores(){
    this._navigateTo('monitoreo.errores');
  },
  navigateToMonitoreoDeLogs(){
    this._navigateTo('monitoreo.logging');
  },
  navigateToDetalleDeError(error){
    this._navigateTo('monitoreo.errores.detalles', error.get('id'));
  },
  navigateToDebugging(){
    this._navigateTo('monitoreo.debugging');
  },
  navigateToSolicitudes(){
    this._navigateTo('ingresos.solicitudes');
  },
  navigateToDetallesDeSolicitud(solicitud){
    this._navigateTo('ingresos.solicitudes.detalles', solicitud.get('id'));
  },
  navigateToAdministarFormularios(){
    this._navigateTo('ingresos.formularios-de-alta');
  },
  navigateToCrearFormularios(){
    this._navigateTo('ingresos.formularios-de-alta.nuevo');
  },
  navigateToEditarFormularioDeAlta(formularioDeAlta){
    this._navigateTo('ingresos.formularios-de-alta.editar', formularioDeAlta.get('id'));
  },
  navigateToVerDetalleFormularioDeAlta(formularioDeAlta){
    this._navigateTo('ingresos.formularios-de-alta.detalles', formularioDeAlta.get('id'));
  },
  navigateToAuditoria(){
    this._navigateTo('auditoria');
  },
  navigateToAuditoriaDeMiembros(){
    this._navigateTo('auditoria.miembros');
  },
  navigateToAuditoriaCambioMasivoDeClaves(){
    this._navigateTo('auditoria.cambio-masivo-claves');
  },
  navigateToAuditoriaDeCuentas(){
    this._navigateTo('auditoria.cuentas');
  },
  navigateToDetalleDeAuditoriaDeMiembro(miembro){
    this._navigateTo('auditoria.miembros.detalles', miembro.id);
  },
  navigateToAuditoriaDeRecargaDeTarjetas(){
    this._navigateTo('auditoria.recargar-tarjetas');
  },
  navigateToRecargaDeTarjetaEnAuditoria(tarjeta){
    this._navigateTo('auditoria.recargar-tarjetas.recargar', tarjeta.id);
  },
  navigateToEditarAuditoriaDeMiembro(miembro){
    this._navigateTo('auditoria.miembros.editar', miembro.id);
  },
  navigateToAuditoriaDeOperaciones(){
    this._navigateTo('auditoria.operaciones', null, {idDeMiembro: "", dniMiembro: "", nombreMiembro: ""});
  },
  navigateToDetalleDeAuditoriaDeOperacion(operacion){
    this._navigateTo('auditoria.operaciones.detalles', operacion.id);
  },
  navigateToDetalleDeAuditoriaDeOperacionDelMiembro(operacion, idDeMiembro, dniMiembro, nombreMiembro){
    this._navigateTo('auditoria.operaciones.detalles', operacion.id, {idDeMiembro: idDeMiembro, dniMiembro: dniMiembro, nombreMiembro: nombreMiembro});
  },
  navigateToBeneficiosDeNivel(){
    this._navigateTo('beneficios.reglas-de-beneficios-de-nivel');
  },
  navigateToDetalleDeReglaDeBeneficioDeNivel(regla) {
    this._navigateTo('beneficios.reglas-de-beneficios-de-nivel.detalle', regla.id);
  },
  navigateToEditarReglaDeBeneficioDeNivel(regla) {
    this._navigateTo('beneficios.reglas-de-beneficios-de-nivel.editar', regla.id);
  },
  navigateToCrearReglaDeBeneficioDeNivel() {
    this._navigateTo('beneficios.reglas-de-beneficios-de-nivel.nueva');
  },
  navigateToPromociones(){
    this._navigateTo('beneficios.reglas-de-promociones');
  },
  navigateToDetalleDeReglaDePromocion(promocion) {
    this._navigateTo('beneficios.reglas-de-promociones.detalle', promocion.id);
  },
  navigateToEditarReglaDePromocion(promocion) {
    this._navigateTo('beneficios.reglas-de-promociones.editar', promocion.id);
  },
  navigateToCrearReglaDePromocion() {
    this._navigateTo('beneficios.reglas-de-promociones.nueva');
  },
  navigateToSegmentosDeMiembros(){
    this._navigateTo('beneficios.segmentos-de-miembros');
  },
  navigateToDetalleDeSegmentoDeMiembros(segmento) {
    this._navigateTo('beneficios.segmentos-de-miembros.detalle', segmento.get('id'));
  },
  navigateToEditarSegmentoDeMiembros(segmento) {
    this._navigateTo('beneficios.segmentos-de-miembros.editar', segmento.get('id'));
  },
  navigateToModificarMiembrosDelSegmento(segmento) {
    this._navigateTo('beneficios.segmentos-de-miembros.modificar-miembros', segmento.get('id'));
  },
  navigateToNuevoSegmentoDeMiembros() {
    this._navigateTo('beneficios.segmentos-de-miembros.nuevo');
  },
  navigateToResumenDeBeneficios(){
    this._navigateTo('beneficios.resumen');
  },
  navigateToInformacionDelPrograma(){
    this._navigateTo('beneficios.informacion-del-programa');
  },
  navigateToRedimibles(){
    this._navigateTo('beneficios.redimibles.redimibles-crud');
  },
  navigateToEditarRedimible(redimible){
    this._navigateTo('beneficios.redimibles.redimibles-crud.editar', redimible.id);
  },
  navigateToCrearRedimible(){
    this._navigateTo('beneficios.redimibles.redimibles-crud.nueva');
  },
  navigateToItemsMultiopcion(){
    this._navigateTo('beneficios.redimibles.items-multiopcion');
  },
  navigateToEditarItemMultiopcion(item){
    this._navigateTo('beneficios.redimibles.items-multiopcion.editar', item.get('id'));
  },
  navigateToCrearItemMultiopcion(){
    this._navigateTo('beneficios.redimibles.items-multiopcion.nuevo');
  },
  navigateToEntregaManualDeBeneficios(){
    this._navigateTo('beneficios.entrega-manual');
  },
  navigateToConfiguracion(){
    this._navigateTo('admin.configuracion.de-stars');
  },
  navigateToConfiguracionDeStarts(){
    this._navigateTo('admin.configuracion.de-stars');
  },
  navigateToConfiguracionDelContrato(){
    this._navigateTo('admin.configuracion.de-contrato');
  },
  navigateToConfiguracionDelRelojDelSistema(){
    this._navigateTo('admin.configuracion.de-reloj-del-sistema');
  },
  verConfiguracionDeMontosTotalesDeControl(){
    this._navigateTo('admin.configuracion.de-totales-de-control');
  },
  verConfiguracionDeLimiteDeMontoPorTarjeta(){
    this._navigateTo('admin.configuracion.de-limite-de-monto-por-tarjeta');
  },
  verConfiguracionDeControlDeFraude(){
    this._navigateTo('admin.configuracion.de-control-de-fraude');
  },
  navigateToConfiguracionDePos(){
    this._navigateTo('admin.configuracion.de-pos');
  },
  verConfiguracionDeEmail(){
    this._navigateTo('admin.configuracion.de-mailing');
  },
  verConfiguracionDeVencimientoDeSaldo(){
    this._navigateTo('admin.configuracion.de-vencimiento-de-saldo');
  },
  verConfiguracionDeBeneficioDeBebidaGratis(){
    this._navigateTo('admin.configuracion.de-beneficio-de-bebida-gratis');
  },
  navigateToProcesos(){
    this._navigateTo('admin.procesos');
  },
  navigateToAdministarPlantillasDeMail(){
    this._navigateTo('admin.plantillas-de-mail');
  },
  navigateToVerEstadoEnvioDeMails(){
    this._navigateTo('admin.estado-envio-de-mails');
  },
  navigateToDetallesDeMailPendiente(mail){
    this._navigateTo('admin.estado-envio-de-mails.detalles', mail.get('id'));
  },
  navigateToEditarPlantillaDeMail(plantilla){
    this._navigateTo('admin.plantillas-de-mail.editar', plantilla.get('id'));
  },
  navigateToAdministrarAliasDeBeneficios(){
    this._navigateTo('admin.alias-de-beneficios');
  },
  navigateToAdministrarCustomerVoice(){
    this._navigateTo('admin.customer-voice');
  },

  // PRIVATE
  transitionerService: Ember.inject.service('transitioner'), // Servicio generico para transicionar rutas
  _transitioner(){
    return this.get('transitionerService');
  },
  _navigateTo(){
    this._transitioner().transitionTo(...arguments);
  }
});
