import Ember from 'ember';
import FormulariosDeAltaServiceInjected from "../../mixins/formulario-de-alta-service-injected";

export default Ember.Component.extend(FormulariosDeAltaServiceInjected, {
  formulariosEncontrados: Ember.A(),

  init(){
    this._super(...arguments);
    this.inicializarFiltro();
  },

  inicializarFiltro(){
    this.set('filtro', Ember.Object.create({
      email: null,
      sexo: null,
      limite: 25
    }));
    this.set('sexoAFiltrar', null);
  },

  armarFiltro(){
    return Ember.merge(this.get('filtro'), {
      sexo: this.get('sexoAFiltrar.id')
    });
  },

  actions: {
    filtrarFormularios(){
      var filtro = this.armarFiltro();
      this.formularioDeAltaService().findWithFilter(filtro).then(formulariosEncontrados => {
        this.set('formulariosEncontrados',formulariosEncontrados);
      });
    },

    limpiarFiltro(){
      this.inicializarFiltro();
    }
  }
});
