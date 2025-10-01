import Ember from "ember";
import SingleToResourceService from "./single-to-resource-service";

/**
 * Servicio Miembros Auditables; injectado con el mixin InformacionParaAuditoriaServiceInjected
 * Un miembro auditable es como un miembro, pero con bastante informacion externa a el que sirve en las vistas de auditoría
 * (Como los beneficios)
 **/
export default Ember.Service.extend(SingleToResourceService, {
  pathDelRecurso: 'informacionParaAuditoria'
});
