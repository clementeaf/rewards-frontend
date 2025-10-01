import Ember from 'ember';
import AboutServiceInjected from '../mixins/about-service-injected';

export default Ember.Component.extend(AboutServiceInjected, {
  ajustes: Ember.A(),
  botonDesactivado: Ember.computed('ajuste.logger', 'ajuste.nivel', function () {
    return !this.get('ajuste.logger') || !this.get('ajuste.nivel');
  }),

  init(){
    this._super(...arguments);
    this._inicializarAjuste();
    this._actualizarLoggers();
  },

  actions: {
    ajustarLog(){
      let ajuste = this.get('ajuste');
      this.aboutService().ajustarLog(ajuste).then(()=>{
        this._inicializarAjuste();
        this._actualizarLoggers();
      });
    },
    quiereCambiarAjuste(ajuste){
      this.set('ajuste', Ember.Object.create(ajuste));
    },
    actualizarLog(){
      this.aboutService().actualizarLog();
      this.set('ultimasLineas', 'asdasdsadasd');
    }
  },

  _inicializarAjuste(){
    this.set('ajuste', Ember.Object.create({
      nivel: null
    }));
  },
  _actualizarLoggers(){
    this.aboutService().listarLoggers().then((loggers)=>{
      this.set('ajustes', loggers);
    });
  }

});
