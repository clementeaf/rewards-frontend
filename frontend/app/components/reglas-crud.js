import Ember from "ember";
import ReglasService from "../mixins/reglas-service-injected";
import NavigatorInjected from "../mixins/navigator-injected";
import MessagerInjected from "../mixins/messager-injected";
import Mensaje from "../utils/mensaje";

export default Ember.Component.extend(ReglasService, NavigatorInjected, MessagerInjected, {

  opcionesDeValidacion: {
    messages: {
      nombreInternoBeneficio: {
        required: "Ingrese el nombre interno del beneficio",
      },
      nombreParaMiembroBeneficio: {
        required: "Ingrese el nombre del beneficio que verá el miembro",
      },
      descripcionBeneficio: {
        required: "Ingrese una breve descripcion del beneficio",
      },
      codigoBeneficio: {
        required: "Ingrese un codigo del beneficio",
      },
      validezDesde: {
        required: "Ingrese desde que fecha",
      },
      validezHasta: {
        required: "Ingrese hasta que fecha",
      },
      numeroDeStars: {
        required: "Ingrese el minimo de Stars acumuladas",
      },
      dineroMinimo: {
        required: "Ingrese el monto minimo de dinero",
      },
      cantidadDeTiempo: {
        required: "Ingrese una cantidad de tiempo",
      },
      cantidadAMultiplicar: {
        required: "Ingrese la cantidad a multiplicar",
      },
      starsBonus: {
        required: "Ingrese la cantidad de Stars bonus",
      },
    }
  },

  actions: {
    buildRestriccionDeNivel(){
      return Ember.Object.create({ niveles: Ember.A() });
    },
    buildRestriccionDePeriodoDeValidez(){
      return Ember.Object.create({ periodosDeValidez: Ember.A()});
    },
    buildRestriccionDeCompraDeProductos(){
      return Ember.Object.create({ itemsRestringidos: Ember.A(), familiasRestringidas: Ember.A() });
    },
    buildRestriccionDeCantidadDeStarsAcumuladas(){
      return Ember.Object.create({ umbralDeStarsAcumuladas: Ember.A() });
    },
    buildRestriccionDeCambioDeNivel(){
      return Ember.Object.create({});
    },
    buildRestriccionDeFirmaDeContrato(){
      return Ember.Object.create({});
    },
    buildRestriccionDeMesDeCumpleanios(){
      return Ember.Object.create({});
    },
    buildRestriccionDeTiendas(){
      return Ember.Object.create({ relacionEntreConjuntos: null, tiendas: Ember.A() });
    },
    buildRestriccionDeSegmento(){
      return Ember.Object.create({ segmentos: Ember.A() });
    },
    buildRestriccionDeDineroGastado(){
      return Ember.Object.create({ minimaCantidadDeDinero: 1 });
    },
    buildRestriccionDeMedioDePago(){
      return Ember.Object.create({ tiposDeMetodoDePago: Ember.A() });
    },
    buildRestriccionDeActividad(){
      return Ember.Object.create({ cantidadDeTiempoDeGracia: { unidadDeTiempo: null }, tuvoActividad: true });
    },
    buildRestriccionDeCantidadDeAdquisiciones(){
      return Ember.Object.create({ cantidadMaximaDeAdquisiciones: 1, duracion: null });
    },
    buildRestriccionDeTipoDeTransaccion(){
      return Ember.Object.create({
        aplicaComprasConTarjetaRewards: false,
        aplicaComprasConApp: false,
        aplicaRecargasEnTienda: false,
        aplicaRecargasMobile: false });
    },
    buildRestriccionDeSeleccionDeTarjetaPredeterminada() {
      return Ember.Object.create({ tiposDeTarjetaDeCredito: Ember.A() });
    },
    submit() {
      if(this.get('regla.id')) {
        return this._actualizar();
      }
      else {
        return this._guardar();
      }
    },
    cancelar(){
      var regla = this.get('regla');
      this._redirectToReglas(regla);
    }
  },

  _actualizar() {
    const regla = this.get('regla');
    this.reglasService().actualizar(regla).then(reglaModificada => {
      this.messager().publicar(Mensaje.REGLA_MODIFICADA, reglaModificada);
      this._redirectToReglas(reglaModificada);
    });
  },

  _guardar() {
    const regla = this.get('regla');
    this.reglasService().guardar(regla).then(nuevaRegla => {
      this.messager().publicar(Mensaje.REGLA_CREADA, nuevaRegla);
      this._redirectToReglas(nuevaRegla);
    });
  },

  _redirectToReglas(regla) {
    if(regla.tipo === "PROMOCION") {
      this.navigator().navigateToPromociones();
    }
    else {
      this.navigator().navigateToBeneficiosDeNivel();
    }
  }
});
