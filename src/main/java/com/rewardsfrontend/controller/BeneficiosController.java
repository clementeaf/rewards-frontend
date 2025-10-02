package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.BeneficiosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/beneficios")
public class BeneficiosController {

    @Autowired
    private BeneficiosService beneficiosService;

    @GetMapping("/resumen")
    public ResponseEntity<Map> resumenBeneficios(HttpSession session) {
        return beneficiosService.resumenBeneficios(session);
    }

    @GetMapping("/informacion-del-programa")
    public ResponseEntity<Map> informacionDelPrograma(HttpSession session) {
        return beneficiosService.informacionDelPrograma(session);
    }

    @GetMapping("/reglas-de-beneficio-de-nivel")
    public ResponseEntity<List> reglasDeNivel(HttpSession session) {
        return beneficiosService.reglasDeNivel(session);
    }

    @GetMapping("/reglas-de-promociones")
    public ResponseEntity<List> reglasDePromociones(HttpSession session) {
        return beneficiosService.reglasDePromociones(session);
    }

    @GetMapping("/reglas-de-beneficio/{id}")
    public ResponseEntity<Map> detalleRegla(@PathVariable Long id, HttpSession session) {
        return beneficiosService.detalleRegla(id, session);
    }

    @GetMapping("/reglas-de-beneficio/{id}/editar")
    public ResponseEntity<Map> reglaParaEditar(@PathVariable Long id, HttpSession session) {
        return beneficiosService.reglaParaEditar(id, session);
    }

    @PutMapping("/reglas-de-beneficio/{id}")
    public ResponseEntity<Map> actualizarRegla(@PathVariable Long id, @RequestBody Map<String, Object> regla, HttpSession session) {
        return beneficiosService.actualizarRegla(id, regla, session);
    }

    @DeleteMapping("/reglas-de-beneficio/{id}")
    public ResponseEntity<Map> eliminarRegla(@PathVariable Long id, HttpSession session) {
        return beneficiosService.eliminarRegla(id, session);
    }

    @PostMapping("/reglas-de-beneficio")
    public ResponseEntity<Map> crearRegla(@RequestBody Map<String, Object> regla, HttpSession session) {
        return beneficiosService.crearRegla(regla, session);
    }

    @PostMapping("/voucher/miembros")
    public ResponseEntity<Map> crearVoucherParaMiembros(@RequestBody Map<String, Object> voucher, HttpSession session) {
        return beneficiosService.crearVoucherParaMiembros(voucher, session);
    }

    @PostMapping("/voucher/segmentos")
    public ResponseEntity<Map> crearVoucherParaSegmentos(@RequestBody Map<String, Object> voucher, HttpSession session) {
        return beneficiosService.crearVoucherParaSegmentos(voucher, session);
    }
}
