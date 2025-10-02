package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/tarjetas")
public class TarjetasController {

    @PostMapping("/find")
    public ResponseEntity<Map<String, Object>> buscarTarjetas(@RequestBody Map<String, Object> filtro) {
        Map<String, Object> response = new HashMap<>();

        List<Map<String, Object>> tarjetas = new ArrayList<>();
        Map<String, Object> tarjeta = new HashMap<>();
        tarjeta.put("id", 1);
        tarjeta.put("numero", "4111111111111111");
        tarjeta.put("estado", "ACTIVA");
        tarjeta.put("saldo", 5000.00);
        tarjeta.put("miembroId", 1);
        tarjetas.add(tarjeta);

        response.put("content", tarjetas);
        response.put("totalElements", 1);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getTarjeta(@PathVariable Long id) {
        Map<String, Object> tarjeta = new HashMap<>();
        tarjeta.put("id", id);
        tarjeta.put("numero", "4111111111111111");
        tarjeta.put("estado", "ACTIVA");
        tarjeta.put("saldo", 5000.00);
        tarjeta.put("miembroId", 1);
        tarjeta.put("fechaExpiracion", "2025-12-31");

        return ResponseEntity.ok(tarjeta);
    }

    @GetMapping("/{id}/edit")
    public ResponseEntity<Map<String, Object>> getTarjetaParaEditar(@PathVariable Long id) {
        Map<String, Object> tarjeta = new HashMap<>();
        tarjeta.put("id", id);
        tarjeta.put("numero", "4111111111111111");
        tarjeta.put("estado", "ACTIVA");
        tarjeta.put("saldo", 5000.00);
        tarjeta.put("miembroId", 1);
        tarjeta.put("bloqueada", false);

        return ResponseEntity.ok(tarjeta);
    }

    @GetMapping("/{id}/recargar")
    public ResponseEntity<Map<String, Object>> infoParaRecarga(@PathVariable Long id) {
        Map<String, Object> info = new HashMap<>();
        info.put("tarjetaId", id);
        info.put("saldoActual", 5000.00);
        info.put("montoMinimo", 100.00);
        info.put("montoMaximo", 50000.00);

        return ResponseEntity.ok(info);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> actualizarTarjeta(@PathVariable Long id, @RequestBody Map<String, Object> tarjeta) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Tarjeta actualizada correctamente");

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/recargar")
    public ResponseEntity<Map<String, Object>> recargarTarjeta(@PathVariable Long id, @RequestBody Map<String, Object> recarga) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Tarjeta recargada correctamente");
        response.put("nuevoSaldo", 10000.00);

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> crearTarjeta(@RequestBody Map<String, Object> tarjeta) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("id", 999);
        response.put("message", "Tarjeta creada correctamente");

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> eliminarTarjeta(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Tarjeta eliminada correctamente");

        return ResponseEntity.ok(response);
    }
}
