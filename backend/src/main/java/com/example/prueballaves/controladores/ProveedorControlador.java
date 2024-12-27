package com.example.prueballaves.controladores;

import com.example.prueballaves.modelos.Proveedor;
import com.example.prueballaves.servicios.ProveedorServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/proveedores")
public class ProveedorControlador {

    @Autowired
    ProveedorServicio proveedorServicio;

    @GetMapping("/{polizaId}")
    public ResponseEntity<?> obtenerProveedor (@PathVariable Long polizaId) throws Exception{
        try {
            List<Proveedor> proveedores = proveedorServicio.obtenerProveedoresPorPoliza(polizaId);
            return ResponseEntity.ok(proveedores);
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> obtenerProveedores () throws Exception{
        try {

            return ResponseEntity.ok(proveedorServicio.obtenerProveedores());
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }

}
