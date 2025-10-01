import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";

/**
 * Esta clase representa el servicio PopularComboService del backend como punto de acceso a informacion de combos
 */
export default Ember.Service.extend(SingleToResourceService, {
  getting(action) {
    let apiRequest = ApiRequest.getting('combos/' + action);
    return this.sendAndEmberize(apiRequest);
  },

  comparadoresDeMontos(){
    return this.getting('comparadores');
  },

  relacionesEntreConjuntos(){
    return this.getting('relaciones-entre-conjuntos');
  },

  unidadesDeTiempo(){
    return this.getting('unidades-de-tiempo');
  },

  tiposDeCodigoItemMicrosInCombo(){
    return this.getting('tipos-de-codigo');
  },

  tiposDeTarjetasInCombo(){
    return this.getting('tipos-de-tarjeta');
  },

  nivelesItemMicrosInCombo(){
    return this.getting('niveles-de-item-micros');
  },

  redimiblesInCombo(){
    return this.getting('redimibles');
  },

  gruposDeUsuarios(){
    return this.getting('grupos-de-usuarios');
  },

  permisos(){
    return this.getting('permisos');
  },

  roles(){
    return this.getting('roles');
  },

  nivelesDelSistema(){
    return this.getting('niveles-del-sistema');
  },

  itemsMicrosInCombo(){
    return this.getting('items-micros');
  },

  familiasDeItemMicrosInCombo(){
    return this.getting('familias-de-item-micros');
  },

  itemsMultiopcionesInCombo(){
    return this.getting('items-multiopcion');
  },

  duracionDeLaRestriccionDeCantidadDeAdquisiciones(){
    return this.getting('duracion-de-restriccion-de-cantidad-de-adquisiciones');
  },

  estadosDeTarjeta(){
    return this.getting('estados-de-tarjeta');
  },

  estadosDeCuenta(){
    return this.getting('estados-de-cuenta');
  },

  nivelesDeLog(){
    return this.getting('niveles-de-log');
  },

  sexos(){
    return this.getting('sexos');
  },

  estadosCiviles(){
    return this.getting('estados-civiles');
  },

  bebidasFavoritas(){
    return this.getting('bebidas-favoritas');
  },

  codigosCupon(){
    return this.getting('codigos-cupon');
  },

  comparadoresDeDinero(){
    return this.getting('comparadores-de-dinero');
  },

  miembrosRewards(){
    return this.getting('miembros-rewards');
  },

  beneficiosConsumibles(){
    return this.getting('beneficios-consumibles');
  },

  reglasDeBeneficiosConRestriccionDeStarsAcumuladas(){
    return this.getting('reglas-de-beneficios-con-resitrccion-de-stars-acumuladas');
  },

  reglasDeBeneficios(){
    return this.getting('reglas-de-beneficios');
  },

  beneficios(){
    return this.getting('beneficios');
  },

  incisos(){
    return this.getting('incisos');
  },

  cargosPoliticos(){
    return this.getting('cargosPoliticos');
  },

  subcargosPoliticos(id){
    return this.getting(`cargosPoliticos/${id}/subcargos`);
  },

  tiposDeDocumento(){
    return this.getting('tiposDeDocumento');
  },

  tiposDeIdentificacionFiscal(){
    return this.getting('tiposDeIdentificacionFiscal');
  },

  tiposDeNotificacion(){
    return this.getting('tiposDeNotificacion');
  },

  tiendas(){
    return this.getting('tiendas');
  },

  tiposDeMetodoDePago(){
    return this.getting('tipos-de-metodo-de-pago');
  },

  tiposDeTarjetasDeCredito(){
    return this.getting('tipos-de-tarjetas-de-credito');
  },

  tiposDeOperaciones(){
    return this.getting('tipo-de-operaciones');
  },

  obtenerEstadosDeSolicitudPosibles(){
    return this.getting('estados-de-solicitud');
  },

  aliasDeBeneficios(){
    return this.getting('alias-de-beneficios');
  },

  segmentosDeMiembros(){
    return this.getting('segmentos-de-miembros');
  },

  usuarios() {
    return this.getting('usuarios');
  },
});
