package com.rewardsfrontend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Service
public class SegmentosDeMiembrosService extends BaseProxyService {

    public ResponseEntity<List> listarSegmentos(HttpSession session) {
        return proxyGet("segmentos-de-miembros", List.class, session);
    }

    public ResponseEntity<List> listarSegmentosConDetalle(HttpSession session) {
        return proxyGet("segmentos-de-miembros/listado-con-detalle", List.class, session);
    }

    public ResponseEntity<Map> detalleSegmento(Long id, HttpSession session) {
        return proxyGet("segmentos-de-miembros/" + id + "/detalle", Map.class, session);
    }

    public ResponseEntity<Map> getSegmento(Long id, HttpSession session) {
        return proxyGet("segmentos-de-miembros/" + id, Map.class, session);
    }

    public ResponseEntity<Map> buscarMiembros(Map<String, Object> busqueda, HttpSession session) {
        return proxyPost("segmentos-de-miembros/miembros", busqueda, Map.class, session);
    }

    public ResponseEntity<Map> miembrosAsociados(Map<String, Object> busqueda, HttpSession session) {
        return proxyPost("segmentos-de-miembros/miembros-asociados", busqueda, Map.class, session);
    }

    public ResponseEntity<Map> agregarMiembro(Long id, Long miembroId, HttpSession session) {
        return proxyPost("segmentos-de-miembros/" + id + "/miembros/" + miembroId, null, Map.class, session);
    }

    public ResponseEntity<Map> quitarMiembro(Long id, Long miembroId, HttpSession session) {
        return proxyDelete("segmentos-de-miembros/" + id + "/miembros/" + miembroId, Map.class, session);
    }

    public ResponseEntity<Map> agregarMultiplesMiembros(Long id, List<Long> miembrosIds, HttpSession session) {
        return proxyPost("segmentos-de-miembros/" + id + "/miembros/agregar", miembrosIds, Map.class, session);
    }

    public ResponseEntity<Map> eliminarMultiplesMiembros(Long id, List<Long> miembrosIds, HttpSession session) {
        return proxyPost("segmentos-de-miembros/" + id + "/miembros/eliminar", miembrosIds, Map.class, session);
    }

    public ResponseEntity<Map> actualizarSegmento(Long id, Map<String, Object> segmento, HttpSession session) {
        return proxyPut("segmentos-de-miembros/" + id, segmento, Map.class, session);
    }

    public ResponseEntity<Map> crearSegmento(Map<String, Object> segmento, HttpSession session) {
        return proxyPost("segmentos-de-miembros", segmento, Map.class, session);
    }

    public ResponseEntity<Map> eliminarSegmento(Long id, HttpSession session) {
        return proxyDelete("segmentos-de-miembros/" + id, Map.class, session);
    }
}
