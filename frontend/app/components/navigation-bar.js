import Ember from "ember";
import NavigatorInjected from "../mixins/navigator-injected";
import UsuarioActualServiceInjected from "../mixins/usuario-actual-service-injected";
import ENV from "msr-backoffice-frontend/config/environment";

export default Ember.Component.extend(NavigatorInjected, UsuarioActualServiceInjected, {
  classNames: "navbar-fixed",

  puedeVerOpcionesDeAdmin: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerMenuDeAdministracion();
  }),

  puedeAdministrarTiendas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarTiendas();
  }),
  puedeAdministrarItemsMicros: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarItemsMicros();
  }),
  puedeVisualizarTarjetas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVisualizarTarjetas();
  }),

  puedeVerOpcionesDeEnvioDeMails: Ember.computed.or('puedeAdministrarPlantillas', 'puedeAdministrarEstadoDeEnvioDeMails', 'puedeAdministrarAliasDeBeneficios'),
  puedeAdministrarPlantillas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarPlantillas();
  }),
  puedeAdministrarEstadoDeEnvioDeMails: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarEstadoDeEnvioDeMails();
  }),
  puedeAdministrarAliasDeBeneficios: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarAliasDeBeneficios();
  }),
  puedeAdministrarCustomerVoide: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarCustomerVoice();
  }),
  puedeAdministrarUsuariosOSeguridad: Ember.computed.or('puedeAdministrarUsuarios', 'puedeAdministrarSeguridad'),
  puedeAdministrarUsuarios: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarUsuarios();
  }),
  puedeAdministrarSeguridad: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAAdministrarSeguridad();
  }),

  puedeCorrerProcesosOVerConfigDeLaAplicacion: Ember.computed.or('puedeCorrerProcesos', 'puedeVerConfiguracionDeLaAplicacion'),
  puedeCorrerProcesos: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoACorrerProcesos();
  }),
  puedeVerConfiguracionDeLaAplicacion: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerConfiguracionDeLaAplicacion();
  }),

  puedeVerOpcionesDeMonitoreo: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAMonitorear();
  }),
  puedeVerDebugguear: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoADebuguear();
  }),

  puedeVerOpcionesDeIngresos: Ember.computed.or('puedeVerSolicitudes', 'puedeVerFormulariosDeAlta'),
  puedeVerSolicitudes: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerSolicitudes();
  }),
  puedeVerFormulariosDeAlta: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerFormulariosDeAlta();
  }),

  puedeConsultarCuentas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAConsultarCuentas();
  }),
  puedeVerAuditoriaDeOperaciones: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerAuditoriaDeOperaciones();
  }),
  puedeVerAuditoriaDeRecargaDeTarjetas: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerAuditoriaDeRecargaDeTarjetas();
  }),
  puedeVerBeneficiosDeNivelPromocionesYResumen: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAVerBeneficiosDeNivelPromocionesYResumen();
  }),
  puedeEntregarVouchers: Ember.computed(function () {
    return this.usuarioActualService().estaAutorizadoAEntregarVouchers();
  }),
  puedeVerLaInformacionDelPrograma: Ember.computed(function() {
    return this.usuarioActualService().estaAutorizadoAVerLaInformacionDelPrograma();
  }),

  actions: {
    quiereIrAHome(){
      this.navigator().navigateToHome();
    },
    quiereAdministarUsuarios(){
      this.navigator().navigateToAdministrarUsuarios();
    },
    quiereAdministarGrupos(){
      this.navigator().navigateToAdministrarGrupos();
    },
    quiereAdministarRoles(){
      this.navigator().navigateToAdministrarRoles();
    },
    quiereAdministarPermisos(){
      this.navigator().navigateToAdministrarPermisos();
    },
    quiereMonitorearInfo(){
      this.navigator().navigateToMonitoreoDeInfo();
    },
    quiereMonitorearMetricas(){
      this.navigator().navigateToMonitoreoDeMetricas();
    },
    quiereMonitorearProfiling(){
      this.navigator().navigateToMonitoreoDeProfiling();
    },
    quiereMonitorearCongestion(){
      this.navigator().navigateToMonitoreoDeCongestionDeValuelink();
    },
    quiereMonitorearErrores(){
      this.navigator().navigateToMonitoreoDeErrores();
    },
    quiereMonitorearLogs(){
      this.navigator().navigateToMonitoreoDeLogs();
    },
    quiereDebugguear(){
      this.navigator().navigateToDebugging();
    },
    verSolicitudes(){
      this.navigator().navigateToSolicitudes();
    },
    verAuditoria(){
      this.navigator().navigateToAuditoria();
    },
    verAuditoriaDeCuentas(){
      this.navigator().navigateToAuditoriaDeCuentas();
    },
    verAuditoriaDeMiembros(){
      this.navigator().navigateToAuditoriaDeMiembros();
    },
    verAuditoriaCambioMasivoDeClaves(){
      this.navigator().navigateToAuditoriaCambioMasivoDeClaves();
    },
    verAuditoriaDeRecargaDeTarjetas(){
      this.navigator().navigateToAuditoriaDeRecargaDeTarjetas();
    },
    verAuditoriaDeOperaciones(){
      this.navigator().navigateToAuditoriaDeOperaciones();
    },
    verBeneficiosDeNivel(){
      this.navigator().navigateToBeneficiosDeNivel();
    },
    verPromociones(){
      this.navigator().navigateToPromociones();
    },
    verResumenDeBeneficios(){
      this.navigator().navigateToResumenDeBeneficios();
    },
    verSegmentosDeMiembros(){
      this.navigator().navigateToSegmentosDeMiembros();
    },
    verInformacionDelPrograma(){
      this.navigator().navigateToInformacionDelPrograma();
    },
    verRedimibles(){
      this.navigator().navigateToRedimibles();
    },
    verEntregaManualDeBeneficios(){
      this.navigator().navigateToEntregaManualDeBeneficios();
    },
    quiereAdministarTiendas(){
      this.navigator().navigateToAdministrarTiendas();
    },
    quiereAdministarTarjetas(){
      this.navigator().navigateToAdministrarTarjetas();
    },
    quiereAdministarItemsMicros(){
      this.navigator().navigateToItemsMicros();
    },
    quiereAdministarConfiguracion(){
      this.navigator().navigateToConfiguracion();
    },
    verFormularios(){
      this.navigator().navigateToAdministarFormularios();
    },
    quiereAdministrarPlantillas(){
      this.navigator().navigateToAdministarPlantillasDeMail();
    },
    quiereVerEstadoEnvioDeMails(){
      this.navigator().navigateToVerEstadoEnvioDeMails();
    },
    quiereAdministrarAliasDeBeneficios(){
      this.navigator().navigateToAdministrarAliasDeBeneficios();
    },
    quiereAdministrarCustomerVoice(){
      this.navigator().navigateToAdministrarCustomerVoice();
    },
    quiereVerProcesos(){
      this.navigator().navigateToProcesos();
    },
    quiereDesloguearse(){
      // Lo mandamos a la url de salida, que le informa a spring el logout
      window.location.href = ENV.applicationContextRoot + "j_spring_security_logout";
    }
  }
});
