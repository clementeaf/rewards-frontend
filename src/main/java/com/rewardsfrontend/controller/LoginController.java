package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping("/msr-backoffice/web/login")
    public String login() {
        return "login";
    }

    @PostMapping("/msr-backoffice/web/login")
    public ResponseEntity<Map<String, Object>> authenticate(@RequestBody Map<String, String> credentials, HttpSession session) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        // Enviar credenciales al LoginService
        Map<String, Object> result = loginService.authenticate(username, password);

        // Si el login fue exitoso, guardar la cookie de sesión del backend en la sesión del BFF
        if (Boolean.TRUE.equals(result.get("success")) && result.containsKey("sessionCookie")) {
            String sessionCookie = (String) result.get("sessionCookie");

            // Guardar la cookie del backend en la sesión del BFF para futuros requests
            // NO la enviamos al navegador, solo al BFF
            session.setAttribute("backendSessionCookie", sessionCookie);
        }

        return ResponseEntity.ok(result);
    }
}
