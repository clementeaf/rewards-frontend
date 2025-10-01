import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio Miembros; injectado con el mixin MiembrosServiceInjected
 * Un miembro es el usuario del sistema que consume beneficios. El portador de una tarjeta
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'redimibles/',

  nuevoRedimible(){
    return Ember.Object.create({ itemsGanados: Ember.A([]), itemMultiopcion: null });
  }
});
