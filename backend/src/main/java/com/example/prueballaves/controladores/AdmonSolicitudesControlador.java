package com.example.prueballaves.controladores;

import com.example.prueballaves.servicios.AdmonSolicitudesServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/empleadobeneficio")

public class AdmonSolicitudesControlador {
    @Autowired
    AdmonSolicitudesServicio admonSolicitudesServicio;

    @GetMapping
    public ResponseEntity<?> solicitudes() throws Exception{
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(admonSolicitudesServicio.obtenerSolicitudes());
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(error.getMessage());
        }
    }
}
