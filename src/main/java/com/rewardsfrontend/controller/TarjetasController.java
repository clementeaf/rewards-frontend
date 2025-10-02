package com.rewardsfrontend.controller;

import com.rewardsfrontend.service.TarjetasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("/msr-backoffice/api/tarjetas")
public class TarjetasController {

    @Autowired
    private TarjetasService tarjetasService;

    @PostMapping("/find")
    public ResponseEntity<Map> buscarTarjetas(@RequestBody Map<String, Object> filtro, HttpSession session) {
        return tarjetasService.buscarTarjetas(filtro, session);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map> getTarjeta(@PathVariable Long id, HttpSession session) {
        return tarjetasService.getTarjeta(id, session);
    }

    @GetMapping("/{id}/edit")
    public ResponseEntity<Map> getTarjetaParaEditar(@PathVariable Long id, HttpSession session) {
        return tarjetasService.getTarjetaParaEditar(id, session);
    }

    @GetMapping("/{id}/recargar")
    public ResponseEntity<Map> infoParaRecarga(@PathVariable Long id, HttpSession session) {
        return tarjetasService.getInfoParaRecarga(id, session);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map> actualizarTarjeta(@PathVariable Long id, @RequestBody Map<String, Object> tarjeta, HttpSession session) {
        return tarjetasService.actualizarTarjeta(id, tarjeta, session);
    }

    @PutMapping("/{id}/recargar")
    public ResponseEntity<Map> recargarTarjeta(@PathVariable Long id, @RequestBody Map<String, Object> recarga, HttpSession session) {
        return tarjetasService.recargarTarjeta(id, recarga, session);
    }

    @PostMapping
    public ResponseEntity<Map> crearTarjeta(@RequestBody Map<String, Object> tarjeta, HttpSession session) {
        return tarjetasService.crearTarjeta(tarjeta, session);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map> eliminarTarjeta(@PathVariable Long id, HttpSession session) {
        return tarjetasService.eliminarTarjeta(id, session);
    }
}
