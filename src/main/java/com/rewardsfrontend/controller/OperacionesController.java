package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.OperacionesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/operaciones")
public class OperacionesController {

    @Autowired
    private OperacionesService operacionesService;

    @PostMapping("/recientes")
    public ResponseEntity<Map> operacionesRecientes(@RequestBody Map<String, Object> filtro, HttpSession session) {
        return operacionesService.operacionesRecientes(filtro, session);
    }

    @PostMapping
    public ResponseEntity<Map> buscarOperaciones(@RequestBody Map<String, Object> filtro, HttpSession session) {
        return operacionesService.buscarOperaciones(filtro, session);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map> detalleOperacion(@PathVariable Long id, HttpSession session) {
        return operacionesService.detalleOperacion(id, session);
    }

    @GetMapping("/miembro/{id}")
    public ResponseEntity<List> operacionesPorMiembro(@PathVariable Long id, HttpSession session) {
        return operacionesService.operacionesPorMiembro(id, session);
    }
}
