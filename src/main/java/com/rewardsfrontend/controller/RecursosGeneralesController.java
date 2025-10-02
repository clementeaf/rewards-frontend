package com.rewardsfrontend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * Controlador que maneja recursos CRUD genéricos
 */
@RestController
@RequestMapping("/msr-backoffice/api")
public class RecursosGeneralesController {

    // ========== TIENDAS ==========

    @GetMapping("/tiendas")
    public ResponseEntity<List<Map<String, Object>>> listarTiendas() {
        return ResponseEntity.ok(crearListaGenericaMock("Tienda Central"));
    }

    @GetMapping("/tiendas/{id}")
    public ResponseEntity<Map<String, Object>> getTienda(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "Tienda Central"));
    }

    @PostMapping("/tiendas")
    public ResponseEntity<Map<String, Object>> crearTienda(@RequestBody Map<String, Object> tienda) {
        return ResponseEntity.ok(crearRespuestaExito("Tienda creada correctamente"));
    }

    @PutMapping("/tiendas/{id}")
    public ResponseEntity<Map<String, Object>> actualizarTienda(@PathVariable Long id, @RequestBody Map<String, Object> tienda) {
        return ResponseEntity.ok(crearRespuestaExito("Tienda actualizada correctamente"));
    }

    @DeleteMapping("/tiendas/{id}")
    public ResponseEntity<Map<String, Object>> eliminarTienda(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Tienda eliminada correctamente"));
    }

    // ========== ROLES ==========

    @GetMapping("/roles")
    public ResponseEntity<List<Map<String, Object>>> listarRoles() {
        return ResponseEntity.ok(crearListaGenericaMock("Administrador"));
    }

    @GetMapping("/roles/{id}")
    public ResponseEntity<Map<String, Object>> getRol(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "Administrador"));
    }

    @PostMapping("/roles")
    public ResponseEntity<Map<String, Object>> crearRol(@RequestBody Map<String, Object> rol) {
        return ResponseEntity.ok(crearRespuestaExito("Rol creado correctamente"));
    }

    @PutMapping("/roles/{id}")
    public ResponseEntity<Map<String, Object>> actualizarRol(@PathVariable Long id, @RequestBody Map<String, Object> rol) {
        return ResponseEntity.ok(crearRespuestaExito("Rol actualizado correctamente"));
    }

    @DeleteMapping("/roles/{id}")
    public ResponseEntity<Map<String, Object>> eliminarRol(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Rol eliminado correctamente"));
    }

    // ========== PERMISOS ==========

    @GetMapping("/permisos")
    public ResponseEntity<List<Map<String, Object>>> listarPermisos() {
        return ResponseEntity.ok(crearListaGenericaMock("CONSULTAR_CUENTAS"));
    }

    @GetMapping("/permisos/{id}")
    public ResponseEntity<Map<String, Object>> getPermiso(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "CONSULTAR_CUENTAS"));
    }

    @PostMapping("/permisos")
    public ResponseEntity<Map<String, Object>> crearPermiso(@RequestBody Map<String, Object> permiso) {
        return ResponseEntity.ok(crearRespuestaExito("Permiso creado correctamente"));
    }

    @PutMapping("/permisos/{id}")
    public ResponseEntity<Map<String, Object>> actualizarPermiso(@PathVariable Long id, @RequestBody Map<String, Object> permiso) {
        return ResponseEntity.ok(crearRespuestaExito("Permiso actualizado correctamente"));
    }

    @DeleteMapping("/permisos/{id}")
    public ResponseEntity<Map<String, Object>> eliminarPermiso(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Permiso eliminado correctamente"));
    }

    // ========== GRUPOS DE CREDENCIALES ==========

    @GetMapping("/grupos-de-credenciales")
    public ResponseEntity<List<Map<String, Object>>> listarGrupos() {
        return ResponseEntity.ok(crearListaGenericaMock("Supervisores"));
    }

    @GetMapping("/grupos-de-credenciales/{id}")
    public ResponseEntity<Map<String, Object>> getGrupo(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "Supervisores"));
    }

    @PostMapping("/grupos-de-credenciales")
    public ResponseEntity<Map<String, Object>> crearGrupo(@RequestBody Map<String, Object> grupo) {
        return ResponseEntity.ok(crearRespuestaExito("Grupo creado correctamente"));
    }

    @PutMapping("/grupos-de-credenciales/{id}")
    public ResponseEntity<Map<String, Object>> actualizarGrupo(@PathVariable Long id, @RequestBody Map<String, Object> grupo) {
        return ResponseEntity.ok(crearRespuestaExito("Grupo actualizado correctamente"));
    }

    @DeleteMapping("/grupos-de-credenciales/{id}")
    public ResponseEntity<Map<String, Object>> eliminarGrupo(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Grupo eliminado correctamente"));
    }

    // ========== ITEMS MICROS ==========

    @GetMapping("/items-micros")
    public ResponseEntity<List<Map<String, Object>>> listarItemsMicros() {
        return ResponseEntity.ok(crearListaGenericaMock("Café Latte"));
    }

    @GetMapping("/items-micros/{id}")
    public ResponseEntity<Map<String, Object>> getItemMicros(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "Café Latte"));
    }

    @PostMapping("/items-micros/nuevo")
    public ResponseEntity<Map<String, Object>> crearItemMicros(@RequestBody Map<String, Object> item) {
        return ResponseEntity.ok(crearRespuestaExito("Item creado correctamente"));
    }

    @PutMapping("/items-micros/{id}")
    public ResponseEntity<Map<String, Object>> actualizarItemMicros(@PathVariable Long id, @RequestBody Map<String, Object> item) {
        return ResponseEntity.ok(crearRespuestaExito("Item actualizado correctamente"));
    }

    @DeleteMapping("/items-micros/{id}")
    public ResponseEntity<Map<String, Object>> eliminarItemMicros(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Item eliminado correctamente"));
    }

    // ========== ITEMS MULTIOPCIÓN ==========

    @GetMapping("/items-multiopcion")
    public ResponseEntity<List<Map<String, Object>>> listarItemsMultiopcion() {
        return ResponseEntity.ok(crearListaGenericaMock("Bebida del mes"));
    }

    @GetMapping("/items-multiopcion/{id}")
    public ResponseEntity<Map<String, Object>> getItemMultiopcion(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "Bebida del mes"));
    }

    @PostMapping("/items-multiopcion")
    public ResponseEntity<Map<String, Object>> crearItemMultiopcion(@RequestBody Map<String, Object> item) {
        return ResponseEntity.ok(crearRespuestaExito("Item multiopción creado correctamente"));
    }

    @PutMapping("/items-multiopcion/{id}")
    public ResponseEntity<Map<String, Object>> actualizarItemMultiopcion(@PathVariable Long id, @RequestBody Map<String, Object> item) {
        return ResponseEntity.ok(crearRespuestaExito("Item multiopción actualizado correctamente"));
    }

    @DeleteMapping("/items-multiopcion/{id}")
    public ResponseEntity<Map<String, Object>> eliminarItemMultiopcion(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Item multiopción eliminado correctamente"));
    }

    // ========== REDIMIBLES ==========

    @GetMapping("/redimibles")
    public ResponseEntity<List<Map<String, Object>>> listarRedimibles() {
        return ResponseEntity.ok(crearListaGenericaMock("Producto Redimible"));
    }

    @GetMapping("/redimibles/{id}")
    public ResponseEntity<Map<String, Object>> getRedimible(@PathVariable Long id) {
        return ResponseEntity.ok(crearRecursoMock(id, "Producto Redimible"));
    }

    @PostMapping("/redimibles")
    public ResponseEntity<Map<String, Object>> crearRedimible(@RequestBody Map<String, Object> redimible) {
        return ResponseEntity.ok(crearRespuestaExito("Redimible creado correctamente"));
    }

    @PutMapping("/redimibles/{id}")
    public ResponseEntity<Map<String, Object>> actualizarRedimible(@PathVariable Long id, @RequestBody Map<String, Object> redimible) {
        return ResponseEntity.ok(crearRespuestaExito("Redimible actualizado correctamente"));
    }

    @DeleteMapping("/redimibles/{id}")
    public ResponseEntity<Map<String, Object>> eliminarRedimible(@PathVariable Long id) {
        return ResponseEntity.ok(crearRespuestaExito("Redimible eliminado correctamente"));
    }

    // ========== ERRORES ==========

    @GetMapping("/errores")
    public ResponseEntity<List<Map<String, Object>>> listarErrores() {
        List<Map<String, Object>> errores = new ArrayList<>();
        Map<String, Object> error = new HashMap<>();
        error.put("id", 1);
        error.put("mensaje", "Error de conexión");
        error.put("fecha", "2024-10-01T10:00:00");
        error.put("nivel", "ERROR");
        errores.add(error);

        return ResponseEntity.ok(errores);
    }

    @GetMapping("/errores/{id}")
    public ResponseEntity<Map<String, Object>> getError(@PathVariable Long id) {
        Map<String, Object> error = new HashMap<>();
        error.put("id", id);
        error.put("mensaje", "Error de conexión");
        error.put("fecha", "2024-10-01T10:00:00");
        error.put("nivel", "ERROR");
        error.put("stackTrace", "java.lang.Exception at ...");

        return ResponseEntity.ok(error);
    }

    // ========== COMBOS ==========

    @GetMapping("/combos/{action}")
    public ResponseEntity<List<Map<String, Object>>> getCombos(@PathVariable String action) {
        List<Map<String, Object>> opciones = new ArrayList<>();

        Map<String, Object> opcion = new HashMap<>();
        opcion.put("id", 1);
        opcion.put("label", "Opción 1");
        opcion.put("value", "opcion1");
        opciones.add(opcion);

        return ResponseEntity.ok(opciones);
    }

    // ========== MÉTODOS AUXILIARES ==========

    private List<Map<String, Object>> crearListaGenericaMock(String nombre) {
        List<Map<String, Object>> lista = new ArrayList<>();
        Map<String, Object> item = new HashMap<>();
        item.put("id", 1);
        item.put("nombre", nombre);
        lista.add(item);

        return lista;
    }

    private Map<String, Object> crearRecursoMock(Long id, String nombre) {
        Map<String, Object> recurso = new HashMap<>();
        recurso.put("id", id);
        recurso.put("nombre", nombre);

        return recurso;
    }

    private Map<String, Object> crearRespuestaExito(String mensaje) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", mensaje);
        response.put("id", 999);

        return response;
    }
}
