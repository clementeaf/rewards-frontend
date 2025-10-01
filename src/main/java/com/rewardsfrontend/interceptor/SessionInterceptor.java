package com.rewardsfrontend.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class SessionInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String uri = request.getRequestURI();

        // Permitir acceso sin autenticación a estas rutas
        if (uri.equals("/msr-backoffice/web/login") ||
            uri.startsWith("/assets/") ||
            uri.startsWith("/fonts/") ||
            uri.startsWith("/images/") ||
            uri.endsWith(".css") ||
            uri.endsWith(".js") ||
            uri.endsWith(".map") ||
            uri.endsWith(".png") ||
            uri.endsWith(".jpg") ||
            uri.endsWith(".ico")) {
            return true;
        }

        // Verificar si hay sesión activa
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("backendSessionCookie") == null) {
            // No hay sesión, redirigir a login
            response.sendRedirect("/msr-backoffice/web/login");
            return false;
        }

        return true;
    }
}