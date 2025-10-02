package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Service
public class TarjetasService extends BaseProxyService {

    public ResponseEntity<Map> buscarTarjetas(Map<String, Object> filtro, HttpSession session) {
        return proxyPost("tarjetas/find", filtro, Map.class, session);
    }

    public ResponseEntity<Map> getTarjeta(Long id, HttpSession session) {
        return proxyGet("tarjetas/" + id, Map.class, session);
    }

    public ResponseEntity<Map> getTarjetaParaEditar(Long id, HttpSession session) {
        return proxyGet("tarjetas/" + id + "/edit", Map.class, session);
    }

    public ResponseEntity<Map> getInfoParaRecarga(Long id, HttpSession session) {
        return proxyGet("tarjetas/" + id + "/recargar", Map.class, session);
    }

    public ResponseEntity<Map> actualizarTarjeta(Long id, Map<String, Object> tarjeta, HttpSession session) {
        return proxyPut("tarjetas/" + id, tarjeta, Map.class, session);
    }

    public ResponseEntity<Map> recargarTarjeta(Long id, Map<String, Object> recarga, HttpSession session) {
        return proxyPut("tarjetas/" + id + "/recargar", recarga, Map.class, session);
    }

    public ResponseEntity<Map> crearTarjeta(Map<String, Object> tarjeta, HttpSession session) {
        return proxyPost("tarjetas", tarjeta, Map.class, session);
    }

    public ResponseEntity<Map> eliminarTarjeta(Long id, HttpSession session) {
        return proxyDelete("tarjetas/" + id, Map.class, session);
    }
}
