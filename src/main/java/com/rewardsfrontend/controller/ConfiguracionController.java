package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api")
public class ConfiguracionController {

    // ========== CONFIGURACIÓN GENERAL ==========

    @GetMapping("/configuraciones")
    public ResponseEntity<Map<String, Object>> getConfiguraciones() {
        Map<String, Object> configuraciones = new HashMap<>();
        configuraciones.put("app_name", "MSR Backoffice");
        configuraciones.put("version", "1.0.0");
        configuraciones.put("environment", "development");
        return ResponseEntity.ok(configuraciones);
    }

    // ========== CONFIGURACIÓN DE POS ==========

    @GetMapping("/configuracion/version-minima-pos")
    public ResponseEntity<Map<String, Object>> getVersionMinimaPOS() {
        Map<String, Object> config = new HashMap<>();
        config.put("versionMinima", "1.0.0");
        config.put("versionRecomendada", "1.2.0");
        config.put("urlDescarga", "https://example.com/pos-download");
        return ResponseEntity.ok(config);
    }

    @PutMapping("/configuracion/version-minima-pos")
    public ResponseEntity<Map<String, Object>> updateVersionMinimaPOS(@RequestBody Map<String, Object> configDeVersion) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Versión mínima de POS actualizada correctamente");
        response.put("versionMinima", configDeVersion.get("versionMinima"));
        return ResponseEntity.ok(response);
    }

    // ========== CONFIGURACIÓN DE BEBIDA GRATIS ==========

    @GetMapping("/configuracion/beneficio-de-bebida-gratis")
    public ResponseEntity<Map<String, Object>> getBeneficioBebidaGratis() {
        Map<String, Object> config = new HashMap<>();
        config.put("habilitado", true);
        config.put("cantidadMaximaPorMes", 4);
        config.put("descripcion", "Bebida gratis en cumpleaños");
        return ResponseEntity.ok(config);
    }

    @PutMapping("/configuracion/beneficio-de-bebida-gratis")
    public ResponseEntity<Map<String, Object>> updateBeneficioBebidaGratis(@RequestBody Map<String, Object> configuracion) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Configuración de bebida gratis actualizada correctamente");
        return ResponseEntity.ok(response);
    }

    // ========== CONFIGURACIÓN DE CONTRATO ==========

    @GetMapping("/contrato/default")
    public ResponseEntity<Map<String, Object>> getContratoDefault() {
        Map<String, Object> contrato = new HashMap<>();
        contrato.put("id", 1);
        contrato.put("titulo", "Términos y Condiciones MSR Rewards");
        contrato.put("contenido", "Contenido del contrato predeterminado...");
        contrato.put("version", "1.0");
        contrato.put("fechaVigencia", "2024-01-01");
        return ResponseEntity.ok(contrato);
    }

    @GetMapping("/contrato/politicamente-expuesto")
    public ResponseEntity<Map<String, Object>> getContratoPoliticamenteExpuesto() {
        Map<String, Object> contrato = new HashMap<>();
        contrato.put("id", 2);
        contrato.put("titulo", "Declaración de Persona Políticamente Expuesta");
        contrato.put("contenido", "Contenido del contrato para personas políticamente expuestas...");
        contrato.put("version", "1.0");
        contrato.put("obligatorio", true);
        return ResponseEntity.ok(contrato);
    }

    @PutMapping("/contrato")
    public ResponseEntity<Map<String, Object>> updateContrato(@RequestBody Map<String, Object> configuracion) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Configuración de contrato actualizada correctamente");
        return ResponseEntity.ok(response);
    }

    // ========== CONFIGURACIÓN DE CONTROL DE FRAUDE ==========

    @GetMapping("/configuracion/control-de-fraude")
    public ResponseEntity<Map<String, Object>> getControlDeFraude() {
        Map<String, Object> config = new HashMap<>();
        config.put("habilitado", true);
        config.put("montoMaximoPorTransaccion", 10000);
        config.put("cantidadMaximaTransaccionesPorDia", 5);
        return ResponseEntity.ok(config);
    }

    // ========== CONFIGURACIÓN DE LÍMITE DE MONTO POR TARJETA ==========

    @GetMapping("/configuracion/limite-de-monto-por-tarjeta")
    public ResponseEntity<Map<String, Object>> getLimiteDeMontoPorTarjeta() {
        Map<String, Object> config = new HashMap<>();
        config.put("habilitado", true);
        config.put("montoMaximo", 50000);
        config.put("periodicidad", "MENSUAL");
        return ResponseEntity.ok(config);
    }

    // ========== CONFIGURACIÓN DE STARS ==========

    @GetMapping("/configuracion/stars")
    public ResponseEntity<Map<String, Object>> getConfiguracionStars() {
        Map<String, Object> config = new HashMap<>();
        config.put("tasaConversionPesosAStars", 100);
        config.put("habilitado", true);
        return ResponseEntity.ok(config);
    }

    // ========== CONFIGURACIÓN DE VENCIMIENTO DE SALDO ==========

    @GetMapping("/configuracion/vencimiento-de-saldo")
    public ResponseEntity<Map<String, Object>> getVencimientoDeSaldo() {
        Map<String, Object> config = new HashMap<>();
        config.put("diasVencimiento", 365);
        config.put("habilitado", true);
        config.put("notificarAntesDeVencer", true);
        config.put("diasNotificacion", 30);
        return ResponseEntity.ok(config);
    }

    // ========== CONFIGURACIÓN DE RELOJ DEL SISTEMA ==========

    @GetMapping("/configuracion/reloj-del-sistema")
    public ResponseEntity<Map<String, Object>> getRelojDelSistema() {
        Map<String, Object> config = new HashMap<>();
        config.put("timestamp", System.currentTimeMillis());
        config.put("timezone", "America/Argentina/Buenos_Aires");
        config.put("serverTime", new java.util.Date());
        return ResponseEntity.ok(config);
    }

    // ========== CONFIGURACIÓN DE TOTALES DE CONTROL ==========

    @GetMapping("/configuracion/totales-de-control")
    public ResponseEntity<Map<String, Object>> getTotalesDeControl() {
        Map<String, Object> config = new HashMap<>();
        config.put("habilitado", true);
        config.put("verificarDiariamente", true);
        config.put("horaVerificacion", "03:00");
        return ResponseEntity.ok(config);
    }
}
