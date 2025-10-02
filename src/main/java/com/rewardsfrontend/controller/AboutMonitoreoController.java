package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/about")
public class AboutMonitoreoController {

    @Autowired
    private AboutService aboutService;

    @PostMapping("/ejecutar/")
    public ResponseEntity<Map> ejecutarComando(@RequestBody Map<String, Object> comando, HttpSession session) {
        return aboutService.ejecutarComando(comando, session);
    }

    @GetMapping("/logs/")
    public ResponseEntity<List> getLogs(HttpSession session) {
        return aboutService.getLogs(session);
    }

    @PostMapping("/logs/")
    public ResponseEntity<Map> ajustarLogs(@RequestBody Map<String, Object> config, HttpSession session) {
        return aboutService.adjustLogs(config, session);
    }

    @PostMapping("/logs/spy/{logger}")
    public ResponseEntity<Map> espiarLogger(@PathVariable String logger, HttpSession session) {
        return aboutService.spyLogger(logger, session);
    }

    @DeleteMapping("/logs/spy/{logger}")
    public ResponseEntity<Map> dejarDeEspiarLogger(@PathVariable String logger, HttpSession session) {
        return aboutService.unspyLogger(logger, session);
    }

    @GetMapping("/logs/spy")
    public ResponseEntity<List> listarLoggersEspiados(HttpSession session) {
        return aboutService.getSpiedLoggers(session);
    }

    @GetMapping("/{action}/")
    public ResponseEntity<Map> accionGenerica(@PathVariable String action, HttpSession session) {
        return aboutService.aboutAction(action, session);
    }
}
