import Ember from "ember";

/**
 * Mixin que injecta miembros-auditables-service como colaborador interno
 **/
export default Ember.Mixin.create({
  _informacionParaAuditoria: Ember.inject.service('informacion-para-auditoria-service'),
  informacionParaAuditoriaService(){
    return this.get('_informacionParaAuditoria');
  }
});
