import Ember from "ember";
import LoggedUserTo from "../tos/logged-user-to";

/**
 * Servicio que proporciona datos mock para cuando el backend no está disponible
 */
export default Ember.Service.extend({

  getMockData(path, method = 'GET') {
    const mockResponses = {
      // Miembros
      'miembros/': this._getMiembros(),
      'tarjetas/find': this._getTarjetas(),
      'operaciones/': this._getOperaciones(),
      'usuarios/logueado': this._getUsuarioLogueado(),
      'configuracion/': this._getConfiguracion(),
      'solicitudes/': this._getSolicitudes(),
      'vouchers/': this._getVouchers(),
      'cuentas/': this._getCuentas(),
    };

    // Buscar coincidencia exacta o parcial
    for (let mockPath in mockResponses) {
      if (path.includes(mockPath) || path === mockPath) {
        return Ember.RSVP.resolve(mockResponses[mockPath]);
      }
    }

    // Datos genéricos por defecto
    return Ember.RSVP.resolve(this._getGenericMockData(path));
  },

  _getMiembros() {
    return [
      {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        numeroDeTarjeta: "1234567890",
        nivel: { id: "GOLD", nombre: "Gold" },
        saldo: 150.50,
        estado: "ACTIVO"
      },
      {
        id: 2,
        nombre: "María García",
        email: "maria.garcia@example.com",
        numeroDeTarjeta: "0987654321",
        nivel: { id: "SILVER", nombre: "Silver" },
        saldo: 75.25,
        estado: "ACTIVO"
      }
    ];
  },

  _getTarjetas() {
    return [
      {
        id: 1,
        numero: "1234567890",
        tipo: { id: "STARBUCKS_CARD", nombre: "Starbucks Card" },
        saldo: 150.50,
        estado: { id: "HABILITADA", nombre: "Habilitada" },
        miembro: "Juan Pérez"
      },
      {
        id: 2,
        numero: "0987654321",
        tipo: { id: "STARBUCKS_CARD", nombre: "Starbucks Card" },
        saldo: 75.25,
        estado: { id: "HABILITADA", nombre: "Habilitada" },
        miembro: "María García"
      }
    ];
  },

  _getOperaciones() {
    return [
      {
        id: 1,
        tipo: "RECARGA",
        monto: 50.00,
        fecha: new Date().toISOString(),
        tarjeta: "1234567890",
        usuario: "admin"
      },
      {
        id: 2,
        tipo: "CONSUMO",
        monto: -25.00,
        fecha: new Date().toISOString(),
        tarjeta: "1234567890",
        tienda: "Starbucks Centro"
      }
    ];
  },

  _getUsuarioLogueado() {
    return LoggedUserTo.create({
      id: 1,
      nombre: "Usuario Demo",
      email: "demo@example.com",
      completeName: "Usuario Demo",
      permisos: [
        "MONITOR_APP", "EJECUTAR_GROOVY", "VISUALIZAR_MENU_ADMINISTRACION",
        "BORRAR_TIENDA", "SOPORTAR_TIENDA", "EDITAR_DATOS_PERSONALES",
        "EDITAR_CUENTA", "CONSULTAR_CUENTAS", "ACCEDER_A_EDITAR_FORMULARIO",
        "CREAR_FORMULARIO", "BORRAR_FORMULARIO", "VISUALIZAR_FORMULARIO",
        "CONSULTAR_SOLICITUDES", "EDITAR_SOLICITUDES", "MODIFICAR_MIEMBROS",
        "ADMINISTRAR_BENEFICIOS", "ENTREGAR_VOUCHER", "CORRER_PROCESOS",
        "VER_INFORMACION_DEL_PROGRAMA", "VISUALIZAR_CONFIGURACION_DE_LA_APLICACION",
        "EDITAR_CONFIGURACION_DE_LA_APLICACION", "ADMINISTRAR_USUARIOS",
        "ADMINISTRAR_SEGURIDAD", "ADMINISTRAR_ESTADO_ENVIO_MAILS",
        "ADMINISTRAR_PLANTILLAS_DE_MAIL", "ADMINISTRAR_ALIAS_DE_BENEFICIOS",
        "ADMINISTRAR_CUSTOMER_VOICE", "ADMINISTRAR_TARJETAS", "VISUALIZAR_TARJETAS",
        "ADMINISTRAR_ITEM_MICROS", "CONSULTAR_BENEFICIOS", "REALIZAR_RECARGAS_DE_TARJETAS",
        "CONSULTAR_ESTADO_OPERACIONES", "FILTRAR_POR_NOMBRE_AUDITORIA_MIEMBRO",
        "FILTRAR_POR_NOMBRE_AUDITORIA_OPERACIONES"
      ]
    });
  },

  _getConfiguracion() {
    return {
      sistema: "MSR Backoffice",
      version: "1.0.0",
      modoDemo: true
    };
  },

  _getSolicitudes() {
    return [
      {
        id: 1,
        tipo: "ALTA_MIEMBRO",
        estado: "PENDIENTE",
        fecha: new Date().toISOString(),
        solicitante: "Juan Pérez"
      }
    ];
  },

  _getVouchers() {
    return [
      {
        id: 1,
        codigo: "DEMO001",
        descripcion: "Voucher de demostración",
        valor: 10.00,
        estado: "DISPONIBLE"
      }
    ];
  },

  _getCuentas() {
    return [
      {
        id: 1,
        numero: "ACC001",
        nombre: "Cuenta Demo",
        saldo: 1000.00,
        estado: "ACTIVA"
      }
    ];
  },

  _getGenericMockData(path) {
    // Datos genéricos para rutas no específicas
    if (path.includes('edit') || path.includes('nuevo')) {
      return {
        id: null,
        nombre: "",
        descripcion: "",
        estado: "ACTIVO"
      };
    }

    return {
      message: `Datos mock para: ${path}`,
      data: [],
      timestamp: new Date().toISOString(),
      modoDemo: true
    };
  }
});