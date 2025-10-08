package com.rewardsfrontend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * Servicio base para hacer proxy de requests al backend externo
 */
@Service
public class BaseProxyService {

    @Autowired
    protected RestTemplate restTemplate;

    protected static final String BACKEND_BASE_URL = "http://localhost:9333/msr-backoffice/api/";

    /**
     * Realiza un GET al backend externo
     */
    protected <T> ResponseEntity<T> proxyGet(String endpoint, Class<T> responseType, HttpSession session) {
        try {
            String url = BACKEND_BASE_URL + endpoint;
            HttpHeaders headers = createHeadersWithSession(session);
            HttpEntity<?> entity = new HttpEntity<>(headers);

            return restTemplate.exchange(url, HttpMethod.GET, entity, responseType);
        } catch (Exception e) {
            return handleError(e, responseType);
        }
    }

    /**
     * Realiza un POST al backend externo
     */
    protected <T> ResponseEntity<T> proxyPost(String endpoint, Object body, Class<T> responseType, HttpSession session) {
        try {
            String url = BACKEND_BASE_URL + endpoint;
            HttpHeaders headers = createHeadersWithSession(session);
            HttpEntity<?> entity = new HttpEntity<>(body, headers);

            return restTemplate.exchange(url, HttpMethod.POST, entity, responseType);
        } catch (Exception e) {
            return handleError(e, responseType);
        }
    }

    /**
     * Realiza un PUT al backend externo
     */
    protected <T> ResponseEntity<T> proxyPut(String endpoint, Object body, Class<T> responseType, HttpSession session) {
        try {
            String url = BACKEND_BASE_URL + endpoint;
            HttpHeaders headers = createHeadersWithSession(session);
            HttpEntity<?> entity = new HttpEntity<>(body, headers);

            return restTemplate.exchange(url, HttpMethod.PUT, entity, responseType);
        } catch (Exception e) {
            return handleError(e, responseType);
        }
    }

    /**
     * Realiza un DELETE al backend externo
     */
    protected <T> ResponseEntity<T> proxyDelete(String endpoint, Class<T> responseType, HttpSession session) {
        try {
            String url = BACKEND_BASE_URL + endpoint;
            HttpHeaders headers = createHeadersWithSession(session);
            HttpEntity<?> entity = new HttpEntity<>(headers);

            return restTemplate.exchange(url, HttpMethod.DELETE, entity, responseType);
        } catch (Exception e) {
            return handleError(e, responseType);
        }
    }

    /**
     * Crea headers con la cookie de sesión del backend
     */
    private HttpHeaders createHeadersWithSession(HttpSession session) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Obtener la cookie JSESSIONID del backend guardada en la sesión
        if (session != null) {
            String backendSessionCookie = (String) session.getAttribute("backendSessionCookie");
            if (backendSessionCookie != null) {
                headers.add("Cookie", backendSessionCookie);
            }
        }

        return headers;
    }

    /**
     * Maneja errores de comunicación con el backend
     */
    private <T> ResponseEntity<T> handleError(Exception e, Class<T> responseType) {
        System.err.println("Error al comunicarse con el backend: " + e.getMessage());
        e.printStackTrace();

        // Si el tipo de respuesta es Map, crear un error genérico
        if (responseType == Map.class) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("error", "Error de comunicación con el backend: " + e.getMessage());

            @SuppressWarnings("unchecked")
            T response = (T) errorResponse;
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    /**
     * Verifica si hay sesión activa con el backend
     */
    protected boolean hasActiveSession(HttpSession session) {
        if (session == null) {
            return false;
        }
        String backendSessionCookie = (String) session.getAttribute("backendSessionCookie");
        return backendSessionCookie != null && !backendSessionCookie.isEmpty();
    }

    /**
     * Método genérico para forwardear cualquier request al backend
     */
    public ResponseEntity<Object> forward(String path, HttpMethod method, Object body, HttpSession session) {
        String url = BACKEND_BASE_URL + path;
        System.out.println("=== PROXY REQUEST ===");
        System.out.println("URL: " + url);
        System.out.println("Method: " + method);
        System.out.println("Body: " + body);
        System.out.println("Has session: " + hasActiveSession(session));

        try {
            HttpHeaders headers = createHeadersWithSession(session);
            HttpEntity<?> entity = new HttpEntity<>(body, headers);

            ResponseEntity<String> response = restTemplate.exchange(url, method, entity, String.class);

            System.out.println("Response status: " + response.getStatusCode());
            System.out.println("Response body: " + response.getBody());

            return ResponseEntity.status(response.getStatusCode())
                    .headers(response.getHeaders())
                    .body((Object) response.getBody());
        } catch (Exception e) {
            System.err.println("ERROR en forward: " + e.getClass().getName() + " - " + e.getMessage());
            return handleError(e, Object.class);
        }
    }
}
