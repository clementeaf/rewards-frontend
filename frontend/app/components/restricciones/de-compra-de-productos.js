import Ember from "ember";
import ItemsMicrosServiceInjected from "../../mixins/items-micros-service-injected";

export default Ember.Component.extend(ItemsMicrosServiceInjected, {
  itemSeleccionado: null,
  familiaSeleccionada: null,
  restriccion: Ember.Object.create({ itemsRestringidos: Ember.A(), familiasRestringidas: Ember.A() }),

  opcionesDeValidacion: {
    messages: {
      items: {
        required: "Ingrese items",
      }
    }
  },

  itemSeleccionadoChanged: Ember.observer('itemSeleccionado', function() {
    const itemSeleccionado = this.get('itemSeleccionado');
    if(itemSeleccionado) {
      this.itemsMicrosService().findById(itemSeleccionado.get('id')).then(itemMicros => {
        this._agregarRestriccionPorItemMicros(itemMicros);
      });
    }
  }),

  familiaSeleccionadaChanged: Ember.observer('familiaSeleccionada', function() {
    const familiaSeleccionada = this.get('familiaSeleccionada');
    if(familiaSeleccionada) {
      this._agregarRestriccionPorFamiliaDeItemMicros(familiaSeleccionada);
    }
  }),

  _agregarRestriccionPorItemMicros(itemMicros) {
    let restriccionesDeItemsMicros = this._restriccionesDeItemsMicros();
    let restriccionDeItemMicros = restriccionesDeItemsMicros.findBy('itemMicros.id', itemMicros.get('id'));
    if(restriccionDeItemMicros === undefined) {
      restriccionDeItemMicros = this._crearRestriccionDeItemMicros(itemMicros);
      restriccionesDeItemsMicros.addObject(restriccionDeItemMicros);
      this.set('itemSeleccionado', null);
    }
  },

  _agregarRestriccionPorFamiliaDeItemMicros(familiaDeItemMicros) {
    let restriccionesDeFamiliaDeItemsMicros = this._restriccionesDeFamiliaDeItemsMicros();
    let restriccionDeFamiliaDeItemMicros = restriccionesDeFamiliaDeItemsMicros.findBy('familia.id', familiaDeItemMicros.get('id'));
    if(restriccionDeFamiliaDeItemMicros === undefined) {
      restriccionDeFamiliaDeItemMicros = this._crearRestriccionDeFamiliaDeItemMicros(familiaDeItemMicros);
      restriccionesDeFamiliaDeItemsMicros.addObject(restriccionDeFamiliaDeItemMicros);
      this.set('familiaSeleccionada', null);
    }
  },

  _crearRestriccionDeItemMicros(itemMicros) {
    return Ember.Object.create({
      itemMicros: itemMicros,
      nivelesMicros: Ember.A(),
    });
  },

  _crearRestriccionDeFamiliaDeItemMicros(familia) {
    return Ember.Object.create({
      familia: familia,
      niveles: Ember.A(),
    });
  },

  _restriccionesDeItemsMicros() {
    return this.get('restriccion.itemsRestringidos');
  },

  _restriccionesDeFamiliaDeItemsMicros() {
    return this.get('restriccion.familiasRestringidas');
  },

  actions: {
    sacarRestriccion() {
      this.set('restriccion', null);
    },

    eliminarRestriccionDeItemMicros(restriccionDeItemMicros) {
      this._restriccionesDeItemsMicros().removeObject(restriccionDeItemMicros);
    },

    eliminarRestriccionDeFamiliaDeItemMicros(restriccionDeFamiliaDeItemMicros) {
      this._restriccionesDeFamiliaDeItemsMicros().removeObject(restriccionDeFamiliaDeItemMicros);
    }
  }
});
