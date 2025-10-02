package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.CuentasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/cuentas")
public class CuentasController {

    @Autowired
    private CuentasService cuentasService;

    @PostMapping
    public ResponseEntity<Map> buscarCuentas(@RequestBody Map<String, Object> filtro, HttpSession session) {
        return cuentasService.buscarCuentas(filtro, session);
    }

    @PutMapping("/{id}/email")
    public ResponseEntity<Map> actualizarEmail(@PathVariable Long id, @RequestBody Map<String, Object> data, HttpSession session) {
        return cuentasService.actualizarEmail(id, data, session);
    }

    @PutMapping("/{id}/password")
    public ResponseEntity<Map> actualizarPassword(@PathVariable Long id, @RequestBody Map<String, Object> data, HttpSession session) {
        return cuentasService.actualizarPassword(id, data, session);
    }

    @PostMapping("/{id}/verificar")
    public ResponseEntity<Map> verificarCuenta(@PathVariable Long id, HttpSession session) {
        return cuentasService.verificarCuenta(id, session);
    }
}
