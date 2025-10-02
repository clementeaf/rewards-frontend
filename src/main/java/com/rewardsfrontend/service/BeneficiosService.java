package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Service
public class BeneficiosService extends BaseProxyService {

    public ResponseEntity<Map> resumenBeneficios(HttpSession session) {
        return proxyGet("beneficios/resumen", Map.class, session);
    }

    public ResponseEntity<Map> informacionDelPrograma(HttpSession session) {
        return proxyGet("beneficios/informacion-del-programa", Map.class, session);
    }

    public ResponseEntity<List> reglasDeNivel(HttpSession session) {
        return proxyGet("beneficios/reglas-de-beneficio-de-nivel", List.class, session);
    }

    public ResponseEntity<List> reglasDePromociones(HttpSession session) {
        return proxyGet("beneficios/reglas-de-promociones", List.class, session);
    }

    public ResponseEntity<Map> detalleRegla(Long id, HttpSession session) {
        return proxyGet("beneficios/reglas-de-beneficio/" + id, Map.class, session);
    }

    public ResponseEntity<Map> reglaParaEditar(Long id, HttpSession session) {
        return proxyGet("beneficios/reglas-de-beneficio/" + id + "/editar", Map.class, session);
    }

    public ResponseEntity<Map> actualizarRegla(Long id, Map<String, Object> regla, HttpSession session) {
        return proxyPut("beneficios/reglas-de-beneficio/" + id, regla, Map.class, session);
    }

    public ResponseEntity<Map> eliminarRegla(Long id, HttpSession session) {
        return proxyDelete("beneficios/reglas-de-beneficio/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearRegla(Map<String, Object> regla, HttpSession session) {
        return proxyPost("beneficios/reglas-de-beneficio", regla, Map.class, session);
    }

    public ResponseEntity<Map> crearVoucherParaMiembros(Map<String, Object> voucher, HttpSession session) {
        return proxyPost("beneficios/voucher/miembros", voucher, Map.class, session);
    }

    public ResponseEntity<Map> crearVoucherParaSegmentos(Map<String, Object> voucher, HttpSession session) {
        return proxyPost("beneficios/voucher/segmentos", voucher, Map.class, session);
    }
}
