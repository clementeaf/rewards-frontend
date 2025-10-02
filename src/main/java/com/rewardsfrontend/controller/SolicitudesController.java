package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/solicitudes")
public class SolicitudesController {

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getSolicitud(@PathVariable Long id) {
        Map<String, Object> solicitud = new HashMap<>();
        solicitud.put("id", id);
        solicitud.put("miembroId", 1);
        solicitud.put("tipo", "ALTA_TARJETA");
        solicitud.put("estado", "PENDIENTE");
        solicitud.put("fechaSolicitud", "2024-10-01");

        return ResponseEntity.ok(solicitud);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> buscarSolicitudes(@RequestBody Map<String, Object> filtro) {
        Map<String, Object> response = new HashMap<>();

        List<Map<String, Object>> solicitudes = new ArrayList<>();
        Map<String, Object> solicitud = new HashMap<>();
        solicitud.put("id", 1);
        solicitud.put("miembroId", 1);
        solicitud.put("tipo", "ALTA_TARJETA");
        solicitud.put("estado", "PENDIENTE");
        solicitudes.add(solicitud);

        response.put("content", solicitudes);
        response.put("totalElements", 1);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/aprobar")
    public ResponseEntity<Map<String, Object>> aprobarSolicitud(@RequestBody Map<String, Object> solicitud) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Solicitud aprobada correctamente");

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/postergar")
    public ResponseEntity<Map<String, Object>> postergarSolicitud(@PathVariable Long id, @RequestBody Map<String, Object> solicitud) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Solicitud postergada correctamente");

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}/reimprimir")
    public ResponseEntity<Map<String, Object>> reimprimirSolicitud(@PathVariable Long id, @RequestBody Map<String, Object> solicitud) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Solicitud reimpresa correctamente");

        return ResponseEntity.ok(response);
    }
}
