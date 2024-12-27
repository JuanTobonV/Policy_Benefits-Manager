package com.example.prueballaves.controladores;

import com.example.prueballaves.modelos.Beneficio;
import com.example.prueballaves.servicios.BeneficioServicios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/beneficios")
@CrossOrigin(origins = "http://127.0.0.1:5501")
public class BeneficioControlador {

    @Autowired
    BeneficioServicios beneficioServicio;

    @PostMapping
    public ResponseEntity<?> guardar(@RequestBody Beneficio datos){
        try{
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(beneficioServicio.registrarBeneficio(datos));
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> obtenerBenefico () throws Exception {
        try {
            List<Beneficio> beneficios = beneficioServicio.obtenerBeneficioPorProveedor();
            return ResponseEntity.ok(beneficios);
        } catch (Exception error) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());
        }
    }

    // controlador para eliminar

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarBeneficio(@PathVariable Long id) {
        try {
            beneficioServicio.eliminarBeneficio(id);
            return ResponseEntity.ok(Map.of("message", "Beneficio eliminado correctamente").toString());

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error interno del servidor.");
        }
    }
}
