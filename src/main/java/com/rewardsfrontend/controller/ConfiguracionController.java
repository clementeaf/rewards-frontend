package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.ConfiguracionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api")
public class ConfiguracionController {

    @Autowired
    private ConfiguracionService configuracionService;

    @GetMapping("/configuraciones")
    public ResponseEntity<Map> getConfiguraciones(HttpSession session) {
        return configuracionService.getConfiguraciones(session);
    }

    @GetMapping("/configuracion/version-minima-pos")
    public ResponseEntity<Map> getVersionMinimaPOS(HttpSession session) {
        return configuracionService.getVersionMinimaPOS(session);
    }

    @PutMapping("/configuracion/version-minima-pos")
    public ResponseEntity<Map> updateVersionMinimaPOS(@RequestBody Map<String, Object> config, HttpSession session) {
        return configuracionService.updateVersionMinimaPOS(config, session);
    }

    @GetMapping("/configuracion/beneficio-de-bebida-gratis")
    public ResponseEntity<Map> getBeneficioBebidaGratis(HttpSession session) {
        return configuracionService.getBeneficioBebidaGratis(session);
    }

    @PutMapping("/configuracion/beneficio-de-bebida-gratis")
    public ResponseEntity<Map> updateBeneficioBebidaGratis(@RequestBody Map<String, Object> config, HttpSession session) {
        return configuracionService.updateBeneficioBebidaGratis(config, session);
    }

    @GetMapping("/contrato/default")
    public ResponseEntity<Map> getContratoDefault(HttpSession session) {
        return configuracionService.getContratoDefault(session);
    }

    @GetMapping("/contrato/politicamente-expuesto")
    public ResponseEntity<Map> getContratoPoliticamenteExpuesto(HttpSession session) {
        return configuracionService.getContratoPoliticamenteExpuesto(session);
    }

    @PutMapping("/contrato")
    public ResponseEntity<Map> updateContrato(@RequestBody Map<String, Object> config, HttpSession session) {
        return configuracionService.updateContrato(config, session);
    }

    @GetMapping("/configuracion/control-de-fraude")
    public ResponseEntity<Map> getControlDeFraude(HttpSession session) {
        return configuracionService.getControlDeFraude(session);
    }

    @GetMapping("/configuracion/limite-de-monto-por-tarjeta")
    public ResponseEntity<Map> getLimiteDeMontoPorTarjeta(HttpSession session) {
        return configuracionService.getLimiteDeMontoPorTarjeta(session);
    }

    @GetMapping("/configuracion/stars")
    public ResponseEntity<Map> getConfiguracionStars(HttpSession session) {
        return configuracionService.getConfiguracionStars(session);
    }

    @GetMapping("/configuracion/vencimiento-de-saldo")
    public ResponseEntity<Map> getVencimientoDeSaldo(HttpSession session) {
        return configuracionService.getVencimientoDeSaldo(session);
    }

    @GetMapping("/configuracion/reloj-del-sistema")
    public ResponseEntity<Map> getRelojDelSistema(HttpSession session) {
        return configuracionService.getRelojDelSistema(session);
    }

    @GetMapping("/configuracion/totales-de-control")
    public ResponseEntity<Map> getTotalesDeControl(HttpSession session) {
        return configuracionService.getTotalesDeControl(session);
    }
}
