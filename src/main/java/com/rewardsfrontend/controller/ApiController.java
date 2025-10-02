package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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

    @GetMapping("/home")
    public String home() {
        return "forward:/index.html";
    }
}