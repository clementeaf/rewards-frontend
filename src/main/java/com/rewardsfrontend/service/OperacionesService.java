package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Service
public class OperacionesService extends BaseProxyService {

    public ResponseEntity<Map> operacionesRecientes(Map<String, Object> filtro, HttpSession session) {
        return proxyPost("operaciones/recientes", filtro, Map.class, session);
    }

    public ResponseEntity<Map> buscarOperaciones(Map<String, Object> filtro, HttpSession session) {
        return proxyPost("operaciones", filtro, Map.class, session);
    }

    public ResponseEntity<Map> detalleOperacion(Long id, HttpSession session) {
        return proxyGet("operaciones/" + id, Map.class, session);
    }

    public ResponseEntity<List> operacionesPorMiembro(Long id, HttpSession session) {
        return proxyGet("operaciones/miembro/" + id, List.class, session);
    }
}
