package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.MiembrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/miembros")
public class MiembrosController {

    @Autowired
    private MiembrosService miembrosService;

    @PostMapping
    public ResponseEntity<Map> buscarMiembros(@RequestBody Map<String, Object> filtro, HttpSession session) {
        return miembrosService.buscarMiembros(filtro, session);
    }

    @GetMapping("/{id}/edit")
    public ResponseEntity<Map> getMiembroParaEditar(@PathVariable Long id, HttpSession session) {
        return miembrosService.getMiembroParaEditar(id, session);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map> actualizarMiembro(@PathVariable Long id, @RequestBody Map<String, Object> miembro, HttpSession session) {
        return miembrosService.actualizarMiembro(id, miembro, session);
    }

    @PostMapping("/{id}/alta-tarjeta")
    public ResponseEntity<Map> altaTarjeta(@PathVariable Long id, @RequestBody Map<String, Object> data, HttpSession session) {
        return miembrosService.altaTarjeta(id, data, session);
    }

    @PostMapping("/{id}/actualizar-saldos-con-vl")
    public ResponseEntity<Map> actualizarSaldosConVL(@PathVariable Long id, HttpSession session) {
        return miembrosService.actualizarSaldosConVL(id, session);
    }

    @GetMapping("/{id}/reporte-de-beneficios-al-dia")
    public ResponseEntity<Map> reporteDeBeneficios(@PathVariable Long id, HttpSession session) {
        return miembrosService.reporteDeBeneficios(id, session);
    }

    @GetMapping("/{id}/informacion-de-auditoria")
    public ResponseEntity<Map> informacionDeAuditoria(@PathVariable Long id, HttpSession session) {
        return miembrosService.informacionDeAuditoria(id, session);
    }

    @PostMapping("/{id}/eliminar-miembro-rewards")
    public ResponseEntity<Map> eliminarMiembro(@PathVariable Long id, @RequestBody Map<String, Object> body, HttpSession session) {
        return miembrosService.eliminarMiembro(id, body, session);
    }
}
