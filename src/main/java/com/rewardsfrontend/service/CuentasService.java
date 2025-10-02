package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Service
public class CuentasService extends BaseProxyService {

    public ResponseEntity<Map> buscarCuentas(Map<String, Object> filtro, HttpSession session) {
        return proxyPost("cuentas", filtro, Map.class, session);
    }

    public ResponseEntity<Map> actualizarEmail(Long id, Map<String, Object> data, HttpSession session) {
        return proxyPut("cuentas/" + id + "/email", data, Map.class, session);
    }

    public ResponseEntity<Map> actualizarPassword(Long id, Map<String, Object> data, HttpSession session) {
        return proxyPut("cuentas/" + id + "/password", data, Map.class, session);
    }

    public ResponseEntity<Map> verificarCuenta(Long id, HttpSession session) {
        return proxyPost("cuentas/" + id + "/verificar", null, Map.class, session);
    }
}
