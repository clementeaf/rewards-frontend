package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Service
public class ConfiguracionService extends BaseProxyService {

    public ResponseEntity<Map> getConfiguraciones(HttpSession session) {
        return proxyGet("configuraciones", Map.class, session);
    }

    public ResponseEntity<Map> getVersionMinimaPOS(HttpSession session) {
        return proxyGet("configuracion/version-minima-pos", Map.class, session);
    }

    public ResponseEntity<Map> updateVersionMinimaPOS(Map<String, Object> config, HttpSession session) {
        return proxyPut("configuracion/version-minima-pos", config, Map.class, session);
    }

    public ResponseEntity<Map> getBeneficioBebidaGratis(HttpSession session) {
        return proxyGet("configuracion/beneficio-de-bebida-gratis", Map.class, session);
    }

    public ResponseEntity<Map> updateBeneficioBebidaGratis(Map<String, Object> config, HttpSession session) {
        return proxyPut("configuracion/beneficio-de-bebida-gratis", config, Map.class, session);
    }

    public ResponseEntity<Map> getContratoDefault(HttpSession session) {
        return proxyGet("contrato/default", Map.class, session);
    }

    public ResponseEntity<Map> getContratoPoliticamenteExpuesto(HttpSession session) {
        return proxyGet("contrato/politicamente-expuesto", Map.class, session);
    }

    public ResponseEntity<Map> updateContrato(Map<String, Object> config, HttpSession session) {
        return proxyPut("contrato", config, Map.class, session);
    }

    public ResponseEntity<Map> getControlDeFraude(HttpSession session) {
        return proxyGet("configuracion/control-de-fraude", Map.class, session);
    }

    public ResponseEntity<Map> getLimiteDeMontoPorTarjeta(HttpSession session) {
        return proxyGet("configuracion/limite-de-monto-por-tarjeta", Map.class, session);
    }

    public ResponseEntity<Map> getConfiguracionStars(HttpSession session) {
        return proxyGet("configuracion/stars", Map.class, session);
    }

    public ResponseEntity<Map> getVencimientoDeSaldo(HttpSession session) {
        return proxyGet("configuracion/vencimiento-de-saldo", Map.class, session);
    }

    public ResponseEntity<Map> getRelojDelSistema(HttpSession session) {
        return proxyGet("configuracion/reloj-del-sistema", Map.class, session);
    }

    public ResponseEntity<Map> getTotalesDeControl(HttpSession session) {
        return proxyGet("configuracion/totales-de-control", Map.class, session);
    }
}
