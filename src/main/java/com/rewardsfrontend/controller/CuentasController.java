package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/cuentas")
public class CuentasController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> buscarCuentas(@RequestBody Map<String, Object> filtro) {
        Map<String, Object> response = new HashMap<>();

        List<Map<String, Object>> cuentas = new ArrayList<>();
        Map<String, Object> cuenta = new HashMap<>();
        cuenta.put("id", 1);
        cuenta.put("email", "usuario@example.com");
        cuenta.put("estado", "ACTIVA");
        cuenta.put("fechaCreacion", "2023-01-15");
        cuentas.add(cuenta);

        response.put("content", cuentas);
        response.put("totalElements", 1);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/email")
    public ResponseEntity<Map<String, Object>> actualizarEmail(@PathVariable Long id, @RequestBody Map<String, Object> data) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Email actualizado correctamente");
        response.put("newEmail", data.get("newEmail"));

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/password")
    public ResponseEntity<Map<String, Object>> actualizarPassword(@PathVariable Long id, @RequestBody Map<String, Object> data) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Contraseña actualizada correctamente");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/verificar")
    public ResponseEntity<Map<String, Object>> verificarCuenta(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Cuenta verificada correctamente");

        return ResponseEntity.ok(response);
    }
}
