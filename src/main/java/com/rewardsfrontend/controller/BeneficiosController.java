package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/beneficios")
public class BeneficiosController {

    @GetMapping("/resumen")
    public ResponseEntity<Map<String, Object>> resumenBeneficios() {
        Map<String, Object> resumen = new HashMap<>();
        resumen.put("totalBeneficios", 25);
        resumen.put("beneficiosActivos", 20);
        resumen.put("beneficiosVencidos", 5);

        return ResponseEntity.ok(resumen);
    }

    @GetMapping("/informacion-del-programa")
    public ResponseEntity<Map<String, Object>> informacionDelPrograma() {
        Map<String, Object> info = new HashMap<>();
        info.put("nombrePrograma", "MSR Rewards");
        info.put("descripcion", "Programa de lealtad y beneficios");
        info.put("niveles", Arrays.asList("BRONZE", "SILVER", "GOLD", "PLATINUM"));
        info.put("activo", true);

        return ResponseEntity.ok(info);
    }

    @GetMapping("/reglas-de-beneficio-de-nivel")
    public ResponseEntity<List<Map<String, Object>>> reglasDeNivel() {
        List<Map<String, Object>> reglas = new ArrayList<>();

        Map<String, Object> regla = new HashMap<>();
        regla.put("id", 1);
        regla.put("nombre", "Descuento GOLD");
        regla.put("nivel", "GOLD");
        regla.put("descuento", 15);
        reglas.add(regla);

        return ResponseEntity.ok(reglas);
    }

    @GetMapping("/reglas-de-promociones")
    public ResponseEntity<List<Map<String, Object>>> reglasDePromociones() {
        List<Map<String, Object>> reglas = new ArrayList<>();

        Map<String, Object> regla = new HashMap<>();
        regla.put("id", 1);
        regla.put("nombre", "Promo Cumpleaños");
        regla.put("descripcion", "Bebida gratis en tu cumpleaños");
        regla.put("activa", true);
        reglas.add(regla);

        return ResponseEntity.ok(reglas);
    }

    @GetMapping("/reglas-de-beneficio/{id}")
    public ResponseEntity<Map<String, Object>> detalleRegla(@PathVariable Long id) {
        Map<String, Object> regla = new HashMap<>();
        regla.put("id", id);
        regla.put("nombre", "Descuento GOLD");
        regla.put("nivel", "GOLD");
        regla.put("descuento", 15);
        regla.put("vigente", true);

        return ResponseEntity.ok(regla);
    }

    @GetMapping("/reglas-de-beneficio/{id}/editar")
    public ResponseEntity<Map<String, Object>> reglaParaEditar(@PathVariable Long id) {
        Map<String, Object> regla = new HashMap<>();
        regla.put("id", id);
        regla.put("nombre", "Descuento GOLD");
        regla.put("nivel", "GOLD");
        regla.put("descuento", 15);

        return ResponseEntity.ok(regla);
    }

    @PutMapping("/reglas-de-beneficio/{id}")
    public ResponseEntity<Map<String, Object>> actualizarRegla(@PathVariable Long id, @RequestBody Map<String, Object> regla) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Regla actualizada correctamente");

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/reglas-de-beneficio/{id}")
    public ResponseEntity<Map<String, Object>> eliminarRegla(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Regla eliminada correctamente");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/reglas-de-beneficio")
    public ResponseEntity<Map<String, Object>> crearRegla(@RequestBody Map<String, Object> regla) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("id", 999);
        response.put("message", "Regla creada correctamente");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/voucher/miembros")
    public ResponseEntity<Map<String, Object>> crearVoucherParaMiembros(@RequestBody Map<String, Object> voucher) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Vouchers creados para miembros");
        response.put("cantidadCreados", 10);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/voucher/segmentos")
    public ResponseEntity<Map<String, Object>> crearVoucherParaSegmentos(@RequestBody Map<String, Object> voucher) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Vouchers creados para segmentos");
        response.put("cantidadCreados", 50);

        return ResponseEntity.ok(response);
    }
}
