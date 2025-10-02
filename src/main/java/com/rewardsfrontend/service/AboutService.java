package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

/**
 * Servicio para endpoints de información del sistema y usuario
 */
@Service
public class AboutService extends BaseProxyService {

    public ResponseEntity<Map> getLoggedUser(HttpSession session) {
        return proxyGet("usuarios/logueado", Map.class, session);
    }

    public ResponseEntity<Map> heartbeat(HttpSession session) {
        return proxyGet("about/heartbeat", Map.class, session);
    }

    public ResponseEntity<Map> ejecutarComando(Map<String, Object> comando, HttpSession session) {
        return proxyPost("about/ejecutar/", comando, Map.class, session);
    }

    public ResponseEntity<List> getLogs(HttpSession session) {
        return proxyGet("about/logs/", List.class, session);
    }

    public ResponseEntity<Map> adjustLogs(Map<String, Object> config, HttpSession session) {
        return proxyPost("about/logs/", config, Map.class, session);
    }

    public ResponseEntity<Map> spyLogger(String logger, HttpSession session) {
        return proxyPost("about/logs/spy/" + logger, null, Map.class, session);
    }

    public ResponseEntity<Map> unspyLogger(String logger, HttpSession session) {
        return proxyDelete("about/logs/spy/" + logger, Map.class, session);
    }

    public ResponseEntity<List> getSpiedLoggers(HttpSession session) {
        return proxyGet("about/logs/spy", List.class, session);
    }

    public ResponseEntity<Map> aboutAction(String action, HttpSession session) {
        return proxyGet("about/" + action + "/", Map.class, session);
    }
}
