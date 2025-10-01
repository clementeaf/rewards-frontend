import Ember from 'ember';
import ItemsMicrosConNivelServiceInjected from '../../mixins/items-micros-con-nivel-service-injected';

export default Ember.Component.extend(ItemsMicrosConNivelServiceInjected, {
  mensajeDeError: null,

  init(){
    this._super(...arguments);
    this.inicializarItemEnSeleccion();
  },

  inicializarItemEnSeleccion() {
    this.set('itemEnSeleccion', null);
    this.set('nivelEnSeleccion', null);
  },

  _itemEnSeleccion() {
    return this.get('itemEnSeleccion');
  },

  _nivelEnSeleccion() {
    return this.get('nivelEnSeleccion');
  },

  _itemsConNivelAgregados() {
    return this.get('itemsConNivelAgregados');
  },

  _buscarItemConNivelOCrearloSiNoExiste(){
    return this.itemsMicrosConNivelService().buscarOCrearloSiNoExiste(this._itemEnSeleccion(), this._nivelEnSeleccion());
  },

  actions: {
    agregarItem(){

      if (Ember.isEmpty(this._itemEnSeleccion()) || Ember.isEmpty(this._nivelEnSeleccion())) {
        this.set('mensajeDeError', "Debe seleccionar un item y un nivel para agregar");
        return;
      }

      this._buscarItemConNivelOCrearloSiNoExiste().then((itemConNivel) => {
        this._itemsConNivelAgregados().pushObject(itemConNivel);
        this.inicializarItemEnSeleccion();
      });
    }
  }
});
