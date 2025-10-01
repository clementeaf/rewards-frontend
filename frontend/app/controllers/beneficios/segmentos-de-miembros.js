import Ember from "ember";
import ScrollerInjected from "../../mixins/scroller-injected";
import NavigatorInjected from "../../mixins/navigator-injected";
import ReceptorDeMensajes from "../../mixins/receptor-de-mensajes";
import ToastServiceInjected from "../../mixins/toast-service-injected";
import SegmentosDeMiembrosServiceInjected from "../../mixins/segmentos-de-miembros-service-injected";

export default Ember.Controller.extend(NavigatorInjected, SegmentosDeMiembrosServiceInjected, ReceptorDeMensajes, ScrollerInjected, ToastServiceInjected, {
  actions: {
    verDetalle(segmento){
      this.navigator().navigateToDetalleDeSegmentoDeMiembros(segmento);
      this.scrollearAlDetalle();
    },

    editar(segmento){
      this.navigator().navigateToEditarSegmentoDeMiembros(segmento);
      this.scrollearAlDetalle();
    },

    modificarMiembros(segmento){
      this.navigator().navigateToModificarMiembrosDelSegmento(segmento);
      this.scrollearAlDetalle();
    },

    nuevo(){
      this.scrollearAlDetalle();
      this.navigator().navigateToNuevoSegmentoDeMiembros();
    },

    eliminar(segmento){
      this.segmentosDeMiembrosService().eliminar(segmento).then(cantidadDeRelaciones => {
        this._segmentos().removeObject(segmento);
        this.toastService().confirmarExito("Se eliminó el segmento " + segmento.get('nombre') + " con " + cantidadDeRelaciones + " miembros");
        this.navigator().navigateToSegmentosDeMiembros();
      });
    },
  },

  mensajes: {
    segmentoCreado(segmento) {
      this._segmentos().addObject(segmento);
    },
    segmentoModificado(segmento) {
      const segmentoID = segmento.get('id');
      const segmentoModificado = this._segmentos().findBy('id', segmentoID);
      if(segmentoModificado) {
        segmentoModificado.setProperties(segmento);
      }
    },
  },

  _segmentos() {
    return this.get('model');
  },

  scrollearAlDetalle(){
    this.scrollTo('#segmentos-de-miembros-crud');
  },
});
