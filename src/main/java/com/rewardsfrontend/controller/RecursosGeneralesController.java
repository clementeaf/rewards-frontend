package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.RecursosGeneralesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

/**
 * Controlador que maneja recursos CRUD genéricos
 */
@RestController
@RequestMapping("/msr-backoffice/api")
public class RecursosGeneralesController {

    @Autowired
    private RecursosGeneralesService recursosService;

    // ========== TIENDAS ==========

    @GetMapping("/tiendas")
    public ResponseEntity<List> listarTiendas(HttpSession session) {
        return recursosService.listarTiendas(session);
    }

    @GetMapping("/tiendas/{id}")
    public ResponseEntity<Map> getTienda(@PathVariable Long id, HttpSession session) {
        return recursosService.getTienda(id, session);
    }

    @PostMapping("/tiendas")
    public ResponseEntity<Map> crearTienda(@RequestBody Map<String, Object> tienda, HttpSession session) {
        return recursosService.crearTienda(tienda, session);
    }

    @PutMapping("/tiendas/{id}")
    public ResponseEntity<Map> actualizarTienda(@PathVariable Long id, @RequestBody Map<String, Object> tienda, HttpSession session) {
        return recursosService.actualizarTienda(id, tienda, session);
    }

    @DeleteMapping("/tiendas/{id}")
    public ResponseEntity<Map> eliminarTienda(@PathVariable Long id, HttpSession session) {
        return recursosService.eliminarTienda(id, session);
    }

    // ========== ROLES ==========

    @GetMapping("/roles")
    public ResponseEntity<List> listarRoles(HttpSession session) {
        return recursosService.listarRoles(session);
    }

    @GetMapping("/roles/{id}")
    public ResponseEntity<Map> getRol(@PathVariable Long id, HttpSession session) {
        return recursosService.getRol(id, session);
    }

    @PostMapping("/roles")
    public ResponseEntity<Map> crearRol(@RequestBody Map<String, Object> rol, HttpSession session) {
        return recursosService.crearRol(rol, session);
    }

    @PutMapping("/roles/{id}")
    public ResponseEntity<Map> actualizarRol(@PathVariable Long id, @RequestBody Map<String, Object> rol, HttpSession session) {
        return recursosService.actualizarRol(id, rol, session);
    }

    @DeleteMapping("/roles/{id}")
    public ResponseEntity<Map> eliminarRol(@PathVariable Long id, HttpSession session) {
        return recursosService.eliminarRol(id, session);
    }

    // ========== PERMISOS ==========

    @GetMapping("/permisos")
    public ResponseEntity<List> listarPermisos(HttpSession session) {
        return recursosService.listarPermisos(session);
    }

    @GetMapping("/permisos/{id}")
    public ResponseEntity<Map> getPermiso(@PathVariable Long id, HttpSession session) {
        return recursosService.getPermiso(id, session);
    }

    @PostMapping("/permisos")
    public ResponseEntity<Map> crearPermiso(@RequestBody Map<String, Object> permiso, HttpSession session) {
        return recursosService.crearPermiso(permiso, session);
    }

    @PutMapping("/permisos/{id}")
    public ResponseEntity<Map> actualizarPermiso(@PathVariable Long id, @RequestBody Map<String, Object> permiso, HttpSession session) {
        return recursosService.actualizarPermiso(id, permiso, session);
    }

    @DeleteMapping("/permisos/{id}")
    public ResponseEntity<Map> eliminarPermiso(@PathVariable Long id, HttpSession session) {
        return recursosService.eliminarPermiso(id, session);
    }

    // ========== GRUPOS DE CREDENCIALES ==========

    @GetMapping("/grupos-de-credenciales")
    public ResponseEntity<List> listarGrupos(HttpSession session) {
        return recursosService.listarGrupos(session);
    }

    @GetMapping("/grupos-de-credenciales/{id}")
    public ResponseEntity<Map> getGrupo(@PathVariable Long id, HttpSession session) {
        return recursosService.getGrupo(id, session);
    }

    @PostMapping("/grupos-de-credenciales")
    public ResponseEntity<Map> crearGrupo(@RequestBody Map<String, Object> grupo, HttpSession session) {
        return recursosService.crearGrupo(grupo, session);
    }

    @PutMapping("/grupos-de-credenciales/{id}")
    public ResponseEntity<Map> actualizarGrupo(@PathVariable Long id, @RequestBody Map<String, Object> grupo, HttpSession session) {
        return recursosService.actualizarGrupo(id, grupo, session);
    }

    @DeleteMapping("/grupos-de-credenciales/{id}")
    public ResponseEntity<Map> eliminarGrupo(@PathVariable Long id, HttpSession session) {
        return recursosService.eliminarGrupo(id, session);
    }

    // ========== ITEMS MICROS ==========

    @GetMapping("/items-micros")
    public ResponseEntity<List> listarItemsMicros(HttpSession session) {
        return recursosService.listarItemsMicros(session);
    }

    @GetMapping("/items-micros/{id}")
    public ResponseEntity<Map> getItemMicros(@PathVariable Long id, HttpSession session) {
        return recursosService.getItemMicros(id, session);
    }

    @PostMapping("/items-micros/nuevo")
    public ResponseEntity<Map> crearItemMicros(@RequestBody Map<String, Object> item, HttpSession session) {
        return recursosService.crearItemMicros(item, session);
    }

    @PutMapping("/items-micros/{id}")
    public ResponseEntity<Map> actualizarItemMicros(@PathVariable Long id, @RequestBody Map<String, Object> item, HttpSession session) {
        return recursosService.actualizarItemMicros(id, item, session);
    }

    @DeleteMapping("/items-micros/{id}")
    public ResponseEntity<Map> eliminarItemMicros(@PathVariable Long id, HttpSession session) {
        return recursosService.eliminarItemMicros(id, session);
    }

    // ========== REDIMIBLES ==========

    @GetMapping("/redimibles")
    public ResponseEntity<List> listarRedimibles(HttpSession session) {
        return recursosService.listarRedimibles(session);
    }

    @GetMapping("/redimibles/{id}")
    public ResponseEntity<Map> getRedimible(@PathVariable Long id, HttpSession session) {
        return recursosService.getRedimible(id, session);
    }

    @PostMapping("/redimibles")
    public ResponseEntity<Map> crearRedimible(@RequestBody Map<String, Object> redimible, HttpSession session) {
        return recursosService.crearRedimible(redimible, session);
    }

    @PutMapping("/redimibles/{id}")
    public ResponseEntity<Map> actualizarRedimible(@PathVariable Long id, @RequestBody Map<String, Object> redimible, HttpSession session) {
        return recursosService.actualizarRedimible(id, redimible, session);
    }

    @DeleteMapping("/redimibles/{id}")
    public ResponseEntity<Map> eliminarRedimible(@PathVariable Long id, HttpSession session) {
        return recursosService.eliminarRedimible(id, session);
    }

    // ========== ERRORES ==========

    @GetMapping("/errores")
    public ResponseEntity<List> listarErrores(HttpSession session) {
        return recursosService.listarErrores(session);
    }

    @GetMapping("/errores/{id}")
    public ResponseEntity<Map> getError(@PathVariable Long id, HttpSession session) {
        return recursosService.getError(id, session);
    }

    // ========== COMBOS ==========

    @GetMapping("/combos/{action}")
    public ResponseEntity<List> getCombos(@PathVariable String action, HttpSession session) {
        return recursosService.getCombos(action, session);
    }
}
