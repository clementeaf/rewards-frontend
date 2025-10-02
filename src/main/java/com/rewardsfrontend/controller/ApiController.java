package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ApiController {

    @GetMapping("/msr-backoffice/api/usuarios/logueado")
    public ResponseEntity<Map<String, Object>> getLoggedUser() {
        Map<String, Object> usuario = new HashMap<>();
        usuario.put("id", 1);
        usuario.put("nombre", "Usuario");
        usuario.put("apellido", "Demo");
        usuario.put("completeName", "Usuario Demo");
        usuario.put("email", "demo@example.com");

        // Todos los permisos necesarios para mostrar toda la UI
        String[] permisos = {
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
        };
        usuario.put("permisos", permisos);

        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/msr-backoffice/api/about/heartbeat")
    public ResponseEntity<Map<String, Object>> heartbeat() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "OK");
        response.put("timestamp", System.currentTimeMillis());
        // Delay en milisegundos para el próximo heartbeat (30 segundos por defecto)
        response.put("delayEnMillis", 30000);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/home")
    public String home() {
        return "forward:/index.html";
    }
}