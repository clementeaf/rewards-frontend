import Ember from "ember";
import MailingServiceInjected from "../../mixins/mailing-service-injected";
import ToastServiceInjected from "../../mixins/toast-service-injected";

export default Ember.Component.extend(MailingServiceInjected, ToastServiceInjected, {
  mensajeDeError: null,
  listadoDeAlias: Ember.Object.create({alias: Ember.A()}),

  init(){
    this._super(...arguments);
    this.inicializarBeneficioEnSeleccion();
  },

  inicializarBeneficioEnSeleccion() {
    this.set('beneficioEnSeleccion', null);
    this.set('nombreEnEmblueDelBeneficioEnSeleccion', null);
  },

  _beneficioEnSeleccion() {
    return this.get('beneficioEnSeleccion');
  },

  _nombreEnEmblueDelBeneficioEnSeleccion() {
    return this.get('nombreEnEmblueDelBeneficioEnSeleccion');
  },

  _listadoDeAlias() {
    return this.get('listadoDeAlias');
  },

  _alias(){
    return this._listadoDeAlias().get('alias');
  },

  actions: {
    agregarBeneficioConNombre(){
      if (Ember.isEmpty(this._beneficioEnSeleccion()) || Ember.isEmpty(this._nombreEnEmblueDelBeneficioEnSeleccion())) {
        this.set('mensajeDeError', "Debe seleccionar un beneficio e indicar su nombre en emblue para poder agregarlo");
        return;
      }

      if (this._nombreEnEmblueDelBeneficioEnSeleccion().length > 20) {
        this.set('mensajeDeError', "El nombre no puede tener más de 20 caracteres");
        return;
      }

      if (this._alias().findBy('beneficio.id', this._beneficioEnSeleccion().get('id'))) {
        this.set('mensajeDeError', "El beneficio seleccionado ya se encuentra en la lista");
        return;
      }

      let aliasDeBeneficioEnEmblue = Ember.Object.create({beneficio: this._beneficioEnSeleccion(), nombreEnEmblue: this._nombreEnEmblueDelBeneficioEnSeleccion()});
      this._alias().pushObject(aliasDeBeneficioEnEmblue);
      this.inicializarBeneficioEnSeleccion();
    },

    guardarAliasDeBeneficios(){
      this.mailingService().guardarAliasDeBeneficios(this._listadoDeAlias()).then(() => {
        this.toastService().confirmarExito("Alias de beneficios guardados con éxito");
      });
    }
  }
});
