import Ember from "ember";
import ApiRequest from "msr-backoffice-frontend/utils/api-request";
import SingleToResourceService from "./single-to-resource-service";

export default Ember.Service.extend(SingleToResourceService, {
  resumenDeBeneficios(){
    const apiRequest = ApiRequest.getting('beneficios/resumen');
    return this.sendAndEmberize(apiRequest);
  },

  informacionDelPrograma(){
    const apiRequest = ApiRequest.getting('beneficios/informacion-del-programa');
    return this.sendAndEmberize(apiRequest);
  },

  nuevaReglaDeBeneficioDeNivel() {
    return this._nuevaRegla("DE_NIVEL");
  },

  nuevaReglaDePromocion() {
    return this._nuevaRegla("PROMOCION");
  },

  reglasDeBeneficioDeNivel(){
    const apiRequest = ApiRequest.getting('beneficios/reglas-de-beneficio-de-nivel');
    return this.sendAndEmberize(apiRequest);
  },

  reglasDePromociones(){
    const apiRequest = ApiRequest.getting('beneficios/reglas-de-promociones');
    return this.sendAndEmberize(apiRequest);
  },

  buscarRegla(regla_id) {
    const apiRequest = ApiRequest.getting('beneficios/reglas-de-beneficio/' + regla_id);
    return this.sendAndEmberize(apiRequest);
  },

  buscarReglaParaEditar(regla_id) {
    const apiRequest = ApiRequest.getting('beneficios/reglas-de-beneficio/' + regla_id + '/editar');
    return this.sendAndEmberize(apiRequest);
  },

  actualizar(regla) {
    const apiRequest = ApiRequest.putting('beneficios/reglas-de-beneficio/' + regla.id, regla);
    return this.sendAndEmberize(apiRequest);
  },

  eliminar(regla) {
    const apiRequest = ApiRequest.deleting('beneficios/reglas-de-beneficio/' + regla.id);
    return this.sendAndEmberize(apiRequest);
  },

  guardar(regla) {
    const apiRequest = ApiRequest.posting('beneficios/reglas-de-beneficio/', regla);
    return this.sendAndEmberize(apiRequest);
  },

  _nuevaRegla(tipo) {
    return Ember.Object.create({
      tipo: tipo,
      habilitada: true,
      restriccionDeNivel: null,
      restriccionDeCambioDeNivel: null,
      restriccionDeFirmaDeContrato: null,
      restriccionDeMesDeCumpleanios: null,
      restriccionDePeriodoDeValidez: null,
      restriccionDeCompraDeProductos: null,
      restriccionDeCantidadDeStarsAcumuladas: null,
      restriccionDeTiendas: null,
      restriccionDeDineroGastado: null,
      restriccionDeMedioDePago: null,
      restriccionDeActividad: null,
      restriccionDeSegmento: null,
      restriccionDeCantidadDeAdquisiciones: null,
      restriccionDeTipoDeTransaccion: null,
      restriccionDeSeleccionDeTarjetaPredeterminada: null,
      generadoresDeVoucher: Ember.A([]),
      multiplicadorDeStars: null,
      repartidorDeStarsBonus: null,
      beneficio: Ember.Object.create({nombre: "", descripcion: "", codigo: null})
    });
  }
});
