import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  // Pagina de bienvenida
  this.route('home');

  this.route('monitoreo', function () {
    this.route('info');
    this.route('profiling');
    this.route('congestion', function() {
      this.route('valuelink');
    });
    this.route('metrics');
    this.route('debugging');
    this.route('errores', function () {
      this.route('detalles', {path: 'detalles/:id_error'});
    });
    this.route('logging');
  });

  this.route('admin', function () {
    this.route('tiendas', function () {
      this.route('editar', {path: 'editar/:tienda_id'});
      this.route('nuevo');
    });
    this.route('items-micros', function () {
      this.route('editar', {path: 'editar/:id'});
      this.route('nuevo');
    });
    this.route('tarjetas', function () {
      this.route('editar', {path: 'editar/:tarjeta_id'});
      this.route('detalle', {path: 'detalle/:tarjeta_id'});
      this.route('nuevo');
    });
    this.route('plantillas-de-mail', function () {
      this.route('editar', {path: 'editar/:plantilla_id'});
    });
    this.route('estado-envio-de-mails', function () {
      this.route('detalles', {path: 'detalles/:mail_id'});
    });
    this.route('alias-de-beneficios');
    this.route('customer-voice');

    this.route('usuarios', function () {
      this.route('editar', {path: 'editar/:usuario_id'});
      this.route('nuevo');
    });
    this.route('grupos', function () {
      this.route('editar', {path: 'editar/:grupo_id'});
      this.route('nuevo');
    });
    this.route('roles', function () {
      this.route('editar', {path: 'editar/:rol_id'});
      this.route('nuevo');
    });
    this.route('permisos', function () {
      this.route('editar', {path: 'editar/:permiso_id'});
    });

    this.route('configuracion', function () {
      this.route('de-stars');
      this.route('de-contrato');
      this.route('de-reloj-del-sistema');
      this.route('de-totales-de-control');
      this.route('de-limite-de-monto-por-tarjeta');
      this.route('de-control-de-fraude');
      this.route('de-pos');
      this.route('de-mailing');
      this.route('de-vencimiento-de-saldo');
      this.route('de-beneficio-de-bebida-gratis');
    });

    this.route('procesos');
  });

  this.route('ingresos', function () {
    this.route('solicitudes', function () {
      this.route('detalles', {path: 'detalles/:solicitud_id'});
    });
    this.route('formularios-de-alta', function () {
      this.route('nuevo');
      this.route('editar', {path: 'editar/:id'});
      this.route('detalles', {path: 'detalles/:id'});
    });
  });

  this.route('beneficios', function () {
    this.route('reglas-de-beneficios-de-nivel', function () {
      this.route('detalle', {path: 'detalle/:regla_de_beneficio_de_nivel_id'});
      this.route('editar', {path: 'editar/:regla_de_beneficio_de_nivel_id'});
      this.route('nueva');
    });
    this.route('reglas-de-promociones', function () {
      this.route('detalle', {path: 'detalle/:regla_de_promocion_id'});
      this.route('editar', {path: 'editar/:regla_de_promocion_id'});
      this.route('nueva');
    });
    this.route('segmentos-de-miembros', function () {
      this.route('detalle', {path: 'detalle/:segmento_id'});
      this.route('editar', {path: 'editar/:segmento_id'});
      this.route('modificar-miembros', {path: 'modificar-miembros/:segmento_id'});
      this.route('nuevo');
    });
    this.route('resumen');
    this.route('informacion-del-programa');
    this.route('entrega-manual');
    this.route('redimibles', function () {
      this.route('redimibles-crud', function () {
        this.route('editar', {path: 'editar/:id'});
        this.route('nueva');
      });
      this.route('items-multiopcion', function () {
        this.route('editar', {path: 'editar/:item_id'});
        this.route('nuevo');
      });
    });
  });

  this.route('auditoria', function () {
    this.route('cuentas');
    this.route('miembros', function () {
      this.route('editar', {path: 'editar/:id'});
      this.route('detalles', {path: 'detalles/:miembro_id'});
    });
    this.route('cambio-masivo-claves');
    this.route('recargar-tarjetas', function () {
      this.route('recargar', {path: 'recargar/:tarjeta_id'});
    });
    this.route('operaciones', function () {
      this.route('detalles', {path: 'detalles/:operacion_id'});
    });
    this.route('carga-tarjetas-valuelink');
  });
});

export default Router;
