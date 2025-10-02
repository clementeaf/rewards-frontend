package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
public class ApiController {

    @Autowired
    private AboutService aboutService;

    @GetMapping("/msr-backoffice/api/usuarios/logueado")
    public ResponseEntity<Map> getLoggedUser(HttpSession session) {
        return aboutService.getLoggedUser(session);
    }

    @GetMapping("/msr-backoffice/api/about/heartbeat")
    public ResponseEntity<Map> heartbeat(HttpSession session) {
        return aboutService.heartbeat(session);
    }

    @PostMapping("/msr-backoffice/api/about/ejecutar/")
    public ResponseEntity<Map> ejecutarComando(@RequestBody Map<String, Object> comando, HttpSession session) {
        return aboutService.ejecutarComando(comando, session);
    }

    @GetMapping("/msr-backoffice/api/about/logs/")
    public ResponseEntity<List> getLogs(HttpSession session) {
        return aboutService.getLogs(session);
    }

    @PostMapping("/msr-backoffice/api/about/logs/")
    public ResponseEntity<Map> adjustLogs(@RequestBody Map<String, Object> config, HttpSession session) {
        return aboutService.adjustLogs(config, session);
    }

    @PostMapping("/msr-backoffice/api/about/logs/spy/{logger}")
    public ResponseEntity<Map> spyLogger(@PathVariable String logger, HttpSession session) {
        return aboutService.spyLogger(logger, session);
    }

    @DeleteMapping("/msr-backoffice/api/about/logs/spy/{logger}")
    public ResponseEntity<Map> unspyLogger(@PathVariable String logger, HttpSession session) {
        return aboutService.unspyLogger(logger, session);
    }

    @GetMapping("/msr-backoffice/api/about/logs/spy")
    public ResponseEntity<List> getSpiedLoggers(HttpSession session) {
        return aboutService.getSpiedLoggers(session);
    }

    @GetMapping("/msr-backoffice/api/about/{action}/")
    public ResponseEntity<Map> aboutAction(@PathVariable String action, HttpSession session) {
        return aboutService.aboutAction(action, session);
    }

    @GetMapping("/home")
    public String home() {
        return "forward:/index.html";
    }
}