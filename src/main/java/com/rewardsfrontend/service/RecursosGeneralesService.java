package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

/**
 * Servicio para recursos CRUD genéricos (Tiendas, Roles, Permisos, etc.)
 */
@Service
public class RecursosGeneralesService extends BaseProxyService {

    // ========== TIENDAS ==========

    public ResponseEntity<List> listarTiendas(HttpSession session) {
        return proxyGet("tiendas", List.class, session);
    }

    public ResponseEntity<Map> getTienda(Long id, HttpSession session) {
        return proxyGet("tiendas/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearTienda(Map<String, Object> tienda, HttpSession session) {
        return proxyPost("tiendas", tienda, Map.class, session);
    }

    public ResponseEntity<Map> actualizarTienda(Long id, Map<String, Object> tienda, HttpSession session) {
        return proxyPut("tiendas/" + id, tienda, Map.class, session);
    }

    public ResponseEntity<Map> eliminarTienda(Long id, HttpSession session) {
        return proxyDelete("tiendas/" + id, Map.class, session);
    }

    // ========== ROLES ==========

    public ResponseEntity<List> listarRoles(HttpSession session) {
        return proxyGet("roles", List.class, session);
    }

    public ResponseEntity<Map> getRol(Long id, HttpSession session) {
        return proxyGet("roles/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearRol(Map<String, Object> rol, HttpSession session) {
        return proxyPost("roles", rol, Map.class, session);
    }

    public ResponseEntity<Map> actualizarRol(Long id, Map<String, Object> rol, HttpSession session) {
        return proxyPut("roles/" + id, rol, Map.class, session);
    }

    public ResponseEntity<Map> eliminarRol(Long id, HttpSession session) {
        return proxyDelete("roles/" + id, Map.class, session);
    }

    // ========== PERMISOS ==========

    public ResponseEntity<List> listarPermisos(HttpSession session) {
        return proxyGet("permisos", List.class, session);
    }

    public ResponseEntity<Map> getPermiso(Long id, HttpSession session) {
        return proxyGet("permisos/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearPermiso(Map<String, Object> permiso, HttpSession session) {
        return proxyPost("permisos", permiso, Map.class, session);
    }

    public ResponseEntity<Map> actualizarPermiso(Long id, Map<String, Object> permiso, HttpSession session) {
        return proxyPut("permisos/" + id, permiso, Map.class, session);
    }

    public ResponseEntity<Map> eliminarPermiso(Long id, HttpSession session) {
        return proxyDelete("permisos/" + id, Map.class, session);
    }

    // ========== GRUPOS DE CREDENCIALES ==========

    public ResponseEntity<List> listarGrupos(HttpSession session) {
        return proxyGet("grupos-de-credenciales", List.class, session);
    }

    public ResponseEntity<Map> getGrupo(Long id, HttpSession session) {
        return proxyGet("grupos-de-credenciales/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearGrupo(Map<String, Object> grupo, HttpSession session) {
        return proxyPost("grupos-de-credenciales", grupo, Map.class, session);
    }

    public ResponseEntity<Map> actualizarGrupo(Long id, Map<String, Object> grupo, HttpSession session) {
        return proxyPut("grupos-de-credenciales/" + id, grupo, Map.class, session);
    }

    public ResponseEntity<Map> eliminarGrupo(Long id, HttpSession session) {
        return proxyDelete("grupos-de-credenciales/" + id, Map.class, session);
    }

    // ========== ITEMS MICROS ==========

    public ResponseEntity<List> listarItemsMicros(HttpSession session) {
        return proxyGet("items-micros", List.class, session);
    }

    public ResponseEntity<Map> getItemMicros(Long id, HttpSession session) {
        return proxyGet("items-micros/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearItemMicros(Map<String, Object> item, HttpSession session) {
        return proxyPost("items-micros/nuevo", item, Map.class, session);
    }

    public ResponseEntity<Map> actualizarItemMicros(Long id, Map<String, Object> item, HttpSession session) {
        return proxyPut("items-micros/" + id, item, Map.class, session);
    }

    public ResponseEntity<Map> eliminarItemMicros(Long id, HttpSession session) {
        return proxyDelete("items-micros/" + id, Map.class, session);
    }

    // ========== REDIMIBLES ==========

    public ResponseEntity<List> listarRedimibles(HttpSession session) {
        return proxyGet("redimibles", List.class, session);
    }

    public ResponseEntity<Map> getRedimible(Long id, HttpSession session) {
        return proxyGet("redimibles/" + id, Map.class, session);
    }

    public ResponseEntity<Map> crearRedimible(Map<String, Object> redimible, HttpSession session) {
        return proxyPost("redimibles", redimible, Map.class, session);
    }

    public ResponseEntity<Map> actualizarRedimible(Long id, Map<String, Object> redimible, HttpSession session) {
        return proxyPut("redimibles/" + id, redimible, Map.class, session);
    }

    public ResponseEntity<Map> eliminarRedimible(Long id, HttpSession session) {
        return proxyDelete("redimibles/" + id, Map.class, session);
    }

    // ========== COMBOS ==========

    public ResponseEntity<List> getCombos(String action, HttpSession session) {
        return proxyGet("combos/" + action, List.class, session);
    }

    // ========== ERRORES ==========

    public ResponseEntity<List> listarErrores(HttpSession session) {
        return proxyGet("errores", List.class, session);
    }

    public ResponseEntity<Map> getError(Long id, HttpSession session) {
        return proxyGet("errores/" + id, Map.class, session);
    }
}
