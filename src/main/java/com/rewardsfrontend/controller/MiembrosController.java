package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/miembros")
public class MiembrosController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> buscarMiembros(@RequestBody Map<String, Object> filtro) {
        Map<String, Object> response = new HashMap<>();

        List<Map<String, Object>> miembros = new ArrayList<>();
        Map<String, Object> miembro1 = new HashMap<>();
        miembro1.put("id", 1);
        miembro1.put("nombre", "Juan");
        miembro1.put("apellido", "Pérez");
        miembro1.put("email", "juan.perez@example.com");
        miembro1.put("nivel", "GOLD");
        miembro1.put("stars", 1500);
        miembros.add(miembro1);

        response.put("content", miembros);
        response.put("totalElements", 1);
        response.put("totalPages", 1);
        response.put("number", 0);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/edit")
    public ResponseEntity<Map<String, Object>> getMiembroParaEditar(@PathVariable Long id) {
        Map<String, Object> miembro = new HashMap<>();
        miembro.put("id", id);
        miembro.put("nombre", "Juan");
        miembro.put("apellido", "Pérez");
        miembro.put("email", "juan.perez@example.com");
        miembro.put("telefono", "+54 11 1234-5678");
        miembro.put("fechaNacimiento", "1985-05-15");
        miembro.put("nivel", "GOLD");
        miembro.put("stars", 1500);
        miembro.put("habilitado", true);

        return ResponseEntity.ok(miembro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> actualizarMiembro(@PathVariable Long id, @RequestBody Map<String, Object> miembro) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Miembro actualizado correctamente");
        response.put("id", id);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/alta-tarjeta")
    public ResponseEntity<Map<String, Object>> altaTarjeta(@PathVariable Long id, @RequestBody Map<String, Object> data) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Tarjeta dada de alta correctamente");
        response.put("tarjetaId", 123);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/actualizar-saldos-con-vl")
    public ResponseEntity<Map<String, Object>> actualizarSaldosConVL(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Saldos actualizados con ValueLink");
        response.put("nuevoSaldo", 2500);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/reporte-de-beneficios-al-dia")
    public ResponseEntity<Map<String, Object>> reporteDeBeneficios(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("miembroId", id);
        response.put("beneficiosUtilizados", 5);
        response.put("beneficiosDisponibles", 3);

        List<Map<String, Object>> beneficios = new ArrayList<>();
        Map<String, Object> beneficio = new HashMap<>();
        beneficio.put("nombre", "Bebida gratis");
        beneficio.put("cantidad", 2);
        beneficios.add(beneficio);

        response.put("detalle", beneficios);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/informacion-de-auditoria")
    public ResponseEntity<Map<String, Object>> informacionDeAuditoria(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        response.put("miembroId", id);
        response.put("fechaCreacion", "2023-01-15T10:30:00");
        response.put("fechaUltimaModificacion", "2024-03-20T15:45:00");
        response.put("usuarioCreacion", "admin");
        response.put("usuarioUltimaModificacion", "supervisor");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/eliminar-miembro-rewards")
    public ResponseEntity<Map<String, Object>> eliminarMiembro(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Miembro eliminado correctamente");

        return ResponseEntity.ok(response);
    }
}
