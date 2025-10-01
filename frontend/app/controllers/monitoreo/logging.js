import Ember from "ember";
import AboutServiceInjected from '../../mixins/about-service-injected';
import ToastServiceInjected from '../../mixins/toast-service-injected';

export default Ember.Controller.extend(AboutServiceInjected, ToastServiceInjected, {
  loggerEspiado: 'ROOT',
  loggerNoDefinido: Ember.computed('loggerEspiado', function () {
    return !this._loggerEspiado();
  }),
  actions:{
    instalarEspia(){
      this.aboutService().instalarEspiaEn(this._loggerEspiado()).then(()=>{
        this._actualizarLogEspiado();
      });
    },
    quitarEspia(){
      this.aboutService().desinstalarEspiaDe(this._loggerEspiado()).then(()=>{
        this._actualizarLogEspiado();
      });
    },
    actualizarLog(){
      this._actualizarLogEspiado();
    }
  },

  _loggerEspiado() {
    return this.get('loggerEspiado');
  },
  _actualizarLogEspiado(){
    this.aboutService().obtenerLogEspiado().then((resultado)=>{
      this.set('logEspiado', resultado.get('porcionDeLog'));
      this.toastService().confirmarExito("Actualizado");
    });
  }

});
