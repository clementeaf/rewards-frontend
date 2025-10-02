package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.SegmentosDeMiembrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/segmentos-de-miembros")
public class SegmentosDeMiembrosController {

    @Autowired
    private SegmentosDeMiembrosService segmentosService;

    @GetMapping
    public ResponseEntity<List> listarSegmentos(HttpSession session) {
        return segmentosService.listarSegmentos(session);
    }

    @GetMapping("/listado-con-detalle")
    public ResponseEntity<List> listarSegmentosConDetalle(HttpSession session) {
        return segmentosService.listarSegmentosConDetalle(session);
    }

    @GetMapping("/{id}/detalle")
    public ResponseEntity<Map> detalleSegmento(@PathVariable Long id, HttpSession session) {
        return segmentosService.detalleSegmento(id, session);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map> getSegmento(@PathVariable Long id, HttpSession session) {
        return segmentosService.getSegmento(id, session);
    }

    @PostMapping("/miembros")
    public ResponseEntity<Map> buscarMiembros(@RequestBody Map<String, Object> busqueda, HttpSession session) {
        return segmentosService.buscarMiembros(busqueda, session);
    }

    @PostMapping("/miembros-asociados")
    public ResponseEntity<Map> miembrosAsociados(@RequestBody Map<String, Object> busqueda, HttpSession session) {
        return segmentosService.miembrosAsociados(busqueda, session);
    }

    @PostMapping("/{id}/miembros/{miembroId}")
    public ResponseEntity<Map> agregarMiembro(@PathVariable Long id, @PathVariable Long miembroId, HttpSession session) {
        return segmentosService.agregarMiembro(id, miembroId, session);
    }

    @DeleteMapping("/{id}/miembros/{miembroId}")
    public ResponseEntity<Map> quitarMiembro(@PathVariable Long id, @PathVariable Long miembroId, HttpSession session) {
        return segmentosService.quitarMiembro(id, miembroId, session);
    }

    @PostMapping("/{id}/miembros/agregar")
    public ResponseEntity<Map> agregarMultiplesMiembros(@PathVariable Long id, @RequestBody List<Long> miembrosIds, HttpSession session) {
        return segmentosService.agregarMultiplesMiembros(id, miembrosIds, session);
    }

    @PostMapping("/{id}/miembros/eliminar")
    public ResponseEntity<Map> eliminarMultiplesMiembros(@PathVariable Long id, @RequestBody List<Long> miembrosIds, HttpSession session) {
        return segmentosService.eliminarMultiplesMiembros(id, miembrosIds, session);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map> actualizarSegmento(@PathVariable Long id, @RequestBody Map<String, Object> segmento, HttpSession session) {
        return segmentosService.actualizarSegmento(id, segmento, session);
    }

    @PostMapping
    public ResponseEntity<Map> crearSegmento(@RequestBody Map<String, Object> segmento, HttpSession session) {
        return segmentosService.crearSegmento(segmento, session);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map> eliminarSegmento(@PathVariable Long id, HttpSession session) {
        return segmentosService.eliminarSegmento(id, session);
    }
}
