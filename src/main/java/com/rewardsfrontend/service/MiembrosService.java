package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Service
public class MiembrosService extends BaseProxyService {

    public ResponseEntity<Map> buscarMiembros(Map<String, Object> filtro, HttpSession session) {
        return proxyPost("miembros", filtro, Map.class, session);
    }

    public ResponseEntity<Map> getMiembroParaEditar(Long id, HttpSession session) {
        return proxyGet("miembros/" + id + "/edit", Map.class, session);
    }

    public ResponseEntity<Map> actualizarMiembro(Long id, Map<String, Object> miembro, HttpSession session) {
        return proxyPut("miembros/" + id, miembro, Map.class, session);
    }

    public ResponseEntity<Map> altaTarjeta(Long id, Map<String, Object> data, HttpSession session) {
        return proxyPost("miembros/" + id + "/alta-tarjeta", data, Map.class, session);
    }

    public ResponseEntity<Map> actualizarSaldosConVL(Long id, HttpSession session) {
        return proxyPost("miembros/" + id + "/actualizar-saldos-con-vl", null, Map.class, session);
    }

    public ResponseEntity<Map> reporteDeBeneficios(Long id, HttpSession session) {
        return proxyGet("miembros/" + id + "/reporte-de-beneficios-al-dia", Map.class, session);
    }

    public ResponseEntity<Map> informacionDeAuditoria(Long id, HttpSession session) {
        return proxyGet("miembros/" + id + "/informacion-de-auditoria", Map.class, session);
    }

    public ResponseEntity<Map> eliminarMiembro(Long id, Map<String, Object> body, HttpSession session) {
        return proxyPost("miembros/" + id + "/eliminar-miembro-rewards", body, Map.class, session);
    }
}
