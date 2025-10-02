package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/msr-backoffice/api/about")
public class AboutMonitoreoController {

    @PostMapping("/ejecutar")
    public ResponseEntity<Map<String, Object>> ejecutarComando(@RequestBody Map<String, Object> parametros) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("resultado", "Comando ejecutado correctamente");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/logs")
    public ResponseEntity<List<Map<String, Object>>> getLogs() {
        List<Map<String, Object>> logs = new ArrayList<>();

        Map<String, Object> log = new HashMap<>();
        log.put("logger", "com.rewardsfrontend");
        log.put("nivel", "INFO");
        logs.add(log);

        return ResponseEntity.ok(logs);
    }

    @PostMapping("/logs")
    public ResponseEntity<Map<String, Object>> ajustarLogs(@RequestBody Map<String, Object> ajuste) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Nivel de logs ajustado");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/logs/spy/{logger}")
    public ResponseEntity<Map<String, Object>> espiarLogger(@PathVariable String logger) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Logger espiado: " + logger);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/logs/spy/{logger}")
    public ResponseEntity<Map<String, Object>> dejarDeEspiarLogger(@PathVariable String logger) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Dejó de espiar logger: " + logger);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/logs/spy")
    public ResponseEntity<List<String>> listarLoggersEspiados() {
        List<String> loggers = Arrays.asList("com.rewardsfrontend", "com.rewardsfrontend.service");
        return ResponseEntity.ok(loggers);
    }

    @GetMapping("/{action}")
    public ResponseEntity<Map<String, Object>> accionGenerica(@PathVariable String action) {
        Map<String, Object> response = new HashMap<>();
        response.put("action", action);
        response.put("result", "OK");

        return ResponseEntity.ok(response);
    }
}
