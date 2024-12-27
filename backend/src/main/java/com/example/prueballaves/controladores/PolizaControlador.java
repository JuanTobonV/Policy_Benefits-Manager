package com.example.prueballaves.controladores;

import com.example.prueballaves.modelos.Beneficio;
import com.example.prueballaves.modelos.Poliza;
import com.example.prueballaves.servicios.PolizaServicios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/poliza")
public class PolizaControlador {

    @Autowired
    PolizaServicios polizaServicios;

    @PostMapping
    public ResponseEntity<?> registro (@RequestBody Poliza datos) throws Exception{
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(polizaServicios.registrarPoliza(datos));
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> obtenerPoliza () throws Exception {
        try {
            List<Poliza> polizas = polizaServicios.obtenerPoliza();
            return ResponseEntity.ok(polizas);
        } catch (Exception error) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }
}
