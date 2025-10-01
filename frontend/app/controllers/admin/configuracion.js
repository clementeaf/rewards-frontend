import Ember from 'ember';
import NavigatorInjected from '../../mixins/navigator-injected';
import TabsInjected from '../../mixins/tabs-injected';
import UsuarioActualServiceInjected from '../../mixins/usuario-actual-service-injected';

export default Ember.Controller.extend(NavigatorInjected, TabsInjected, UsuarioActualServiceInjected, {
  init() {
    this._super(...arguments);
    this.armarTabs('configuration-tabs');
  },

  actions: {
    verConfiguracionDeStars() {
      this.navigator().navigateToConfiguracionDeStarts();
    },

    verConfiguracionDelContrato() {
      this.navigator().navigateToConfiguracionDelContrato();
    },

    verConfiguracionDelRelojDelSistema() {
      this.navigator().navigateToConfiguracionDelRelojDelSistema();
    },

    verConfiguracionDeMontosTotalesDeControl() {
      this.navigator().verConfiguracionDeMontosTotalesDeControl();
    },

    verConfiguracionDeLimiteDeMontoPorTarjeta() {
      this.navigator().verConfiguracionDeLimiteDeMontoPorTarjeta();
    },

    verConfiguracionDeControlDeFraude() {
      this.navigator().verConfiguracionDeControlDeFraude();
    },

    verConfiguracionDePos() {
      this.navigator().navigateToConfiguracionDePos();
    },

    verConfiguracionDeEmail() {
      this.navigator().verConfiguracionDeEmail();
    },

    verConfiguracionDeVencimientoDeSaldo() {
      this.navigator().verConfiguracionDeVencimientoDeSaldo();
    },

    verConfiguracionDeBeneficioDeBebidaGratis() {
      this.navigator().verConfiguracionDeBeneficioDeBebidaGratis();
    },

  }
});
