package com.rewardsfrontend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {

    @Autowired
    private RestTemplate restTemplate;

    public Map<String, Object> authenticate(String username, String password) {
        String url = "http://localhost:9333/msr-backoffice/try_to_login";

        try {
            // Configurar headers para form-data
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            // Crear form-data con los nombres correctos
            MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
            formData.add("login_username", username);
            formData.add("login_password", password);

            HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(formData, headers);

            // El servidor responde con 302 redirect, necesitamos capturar eso
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

            // Si llegamos aquí, la autenticación fue exitosa (302 o 200)
            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("message", "Login exitoso");
            result.put("redirectUrl", "/msr-backoffice/web/");

            // Capturar la cookie de sesión si existe
            if (response.getHeaders().containsKey("Set-Cookie")) {
                result.put("sessionCookie", response.getHeaders().getFirst("Set-Cookie"));
            }

            return result;
        } catch (Exception e) {
            System.err.println("Error al autenticar: " + e.getMessage());
            e.printStackTrace();
            return createErrorResponse("Error de autenticación: " + e.getMessage());
        }
    }

    private Map<String, Object> createErrorResponse(String message) {
        Map<String, Object> error = new HashMap<>();
        error.put("success", false);
        error.put("error", message);
        return error;
    }

}
