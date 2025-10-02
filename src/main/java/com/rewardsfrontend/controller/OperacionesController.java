package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/operaciones")
public class OperacionesController {

    @PostMapping("/recientes")
    public ResponseEntity<Map<String, Object>> operacionesRecientes(@RequestBody Map<String, Object> filtro) {
        Map<String, Object> response = new HashMap<>();

        List<Map<String, Object>> operaciones = new ArrayList<>();
        Map<String, Object> operacion = new HashMap<>();
        operacion.put("id", 1);
        operacion.put("tipo", "COMPRA");
        operacion.put("monto", 1500.00);
        operacion.put("fecha", "2024-10-01T15:30:00");
        operacion.put("miembroId", 1);
        operacion.put("estado", "COMPLETADA");
        operaciones.add(operacion);

        response.put("content", operaciones);
        response.put("totalElements", 1);

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> buscarOperaciones(@RequestBody Map<String, Object> filtro) {
        Map<String, Object> response = new HashMap<>();

        List<Map<String, Object>> operaciones = new ArrayList<>();
        response.put("content", operaciones);
        response.put("totalElements", 0);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> detalleOperacion(@PathVariable Long id) {
        Map<String, Object> operacion = new HashMap<>();
        operacion.put("id", id);
        operacion.put("tipo", "COMPRA");
        operacion.put("monto", 1500.00);
        operacion.put("fecha", "2024-10-01T15:30:00");
        operacion.put("miembroId", 1);
        operacion.put("estado", "COMPLETADA");
        operacion.put("detalle", "Compra en tienda central");

        return ResponseEntity.ok(operacion);
    }

    @GetMapping("/miembro/{id}")
    public ResponseEntity<List<Map<String, Object>>> operacionesPorMiembro(@PathVariable Long id) {
        List<Map<String, Object>> operaciones = new ArrayList<>();

        Map<String, Object> operacion = new HashMap<>();
        operacion.put("id", 1);
        operacion.put("tipo", "COMPRA");
        operacion.put("monto", 1500.00);
        operacion.put("fecha", "2024-10-01T15:30:00");
        operaciones.add(operacion);

        return ResponseEntity.ok(operaciones);
    }
}
