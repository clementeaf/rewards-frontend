import Ember from 'ember';
import NavigatorInjected from '../../../mixins/navigator-injected';
import ToastServiceInjected from '../../../mixins/toast-service-injected';
import SegmentoDeMiembrosServiceInjected from '../../../mixins/segmentos-de-miembros-service-injected';

export default Ember.Controller.extend(NavigatorInjected, SegmentoDeMiembrosServiceInjected, ToastServiceInjected, {
  noPuedeProcesarArchivo: false,

  miembrosSeleccionados: Ember.computed('model.miembros.@each.pertenece', function () {
    return this._miembros().filterBy('pertenece', true);
  }),

  seleccionarTodosCheckBoxLabel: Ember.computed('model.miembros.@each.pertenece', function () {
    let cantidadDeMiembros = this._miembros().length;
    let cantidadSeleccionados = this.get('miembrosSeleccionados').length;
    if (cantidadSeleccionados === cantidadDeMiembros) {
      return true;
    }
    if (cantidadSeleccionados === 0) {
      return false;
    }
    return undefined;
  }),

  actions: {
    agregarMiembrosListadosEnCsv() {
      this._procesarCsv((segmento) => this.segmentosDeMiembrosService().agregarRelacionesParaMiembrosenElCsv(segmento, this.get('model.csvAgregar')), 'agregaron');
    },

    eliminarMiembrosListadosEnCsv() {
      this._procesarCsv((segmento) => this.segmentosDeMiembrosService().eliminarRelacionesParaMiembrosenElCsv(segmento, this.get('model.csvEliminar')), 'eliminaron');
    },

    seleccionarComoSeaMenester() {
      if (this.get('seleccionarTodosCheckBoxLabel') === true) {
        return this._eliminarTodasLasRelaciones();
      } else {
        return this._agregarMiembrosQueNoEstanEnElSegmento();
      }
    },

    modificarMiembro(miembro) {
      if (!miembro.get('pertenece')) {
        this.segmentosDeMiembrosService().agregarRelacion(this._segmento(), miembro).then(() => {
          this._actualizarPertenenciaDelMiembro(miembro, true);
          this.toastService().confirmarExito(`Miembro ${miembro.get('nombre')} agregado`);
        });
      }
      else {
        this.segmentosDeMiembrosService().eliminarRelacion(this._segmento(), miembro).then(() => {
          this._actualizarPertenenciaDelMiembro(miembro, false);
          this.toastService().confirmarExito(`Miembro ${miembro.get('nombre')} eliminado`);
        });
      }
    },
  },

  _eliminarTodasLasRelaciones() {
    let miembrosIds = this._idsDeLosMiembros();
    return this._eliminarRelaciones(miembrosIds).then(() => {
      this.toastService().confirmarExito(`Se eliminaron ${miembrosIds.length} miembros`);
      this._actualizarPertenenciaDeLosMiembros(false);
    });
  },

  _agregarMiembrosQueNoEstanEnElSegmento() {
    let idsDeLosMiembrosQueNoEstanEnElSegmento = this._idsDeMiembrosQueNoPertenecen();
    return this._agregarRelaciones(idsDeLosMiembrosQueNoEstanEnElSegmento).then(() => {
      this.toastService().confirmarExito(`Se agregaron ${idsDeLosMiembrosQueNoEstanEnElSegmento.length} miembros`);
      this._actualizarPertenenciaDeLosMiembros(true);
    });
  },

  _actualizarPertenenciaDeLosMiembros(valor) {
    this._miembros().forEach(miembro => this._actualizarPertenenciaDelMiembro(miembro, valor));
  },

  _actualizarPertenenciaDelMiembro(miembro, valor) {
    return miembro.set('pertenece', valor);
  },

  _idsDeLosMiembros() {
    return this._miembros().map(miembro => miembro.get('id'));
  },

  _idsDeMiembrosQueNoPertenecen() {
    return this._miembros().filterBy('pertenece', false).map(miembro => miembro.get('id'));
  },

  _eliminarRelaciones(miembrosIds) {
    return this.segmentosDeMiembrosService().eliminarRelaciones(this._segmento(), miembrosIds);
  },

  _agregarRelaciones(idsDeLosMiembrosQueNoEstanEnElSegmento) {
    return this.segmentosDeMiembrosService().agregarRelaciones(this._segmento(), idsDeLosMiembrosQueNoEstanEnElSegmento);
  },

  _miembros() {
    return this.get('model.miembros');
  },

  _segmento() {
    return this.get('model.segmento');
  },

  _procesarCsv: function (bloque, mensajito) {
    this.set('noPuedeProcesarArchivo', true);
    bloque(this.get('model.segmento')).then((resultado) => {
      this.toastService().confirmarExito(`se ${mensajito} ${resultado.cantidad} miembros`);
    }).finally(() => {
      this.set('noPuedeProcesarArchivo', false);
    });
  },
});
