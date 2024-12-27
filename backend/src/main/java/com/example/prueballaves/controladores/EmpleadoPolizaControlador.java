package com.example.prueballaves.controladores;

import com.example.prueballaves.modelos.Poliza;
import com.example.prueballaves.servicios.EmpleadoPolizaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/empleados")
public class EmpleadoPolizaControlador {

  @Autowired
    EmpleadoPolizaServicio empleadoPolizaServicio;

    @GetMapping("/{empleadoId}/polizas")
    public ResponseEntity<?> obtenerPolizasPorEmpleado(@PathVariable Long empleadoId) throws Exception{
      try {
          List<Poliza> polizas = empleadoPolizaServicio.obtenerPolizasDeEmpleado(empleadoId);
          return ResponseEntity.ok(polizas);
      }catch (Exception error){
          return ResponseEntity
                  .status(HttpStatus.BAD_REQUEST)
                  .body(error.getMessage());
      }
    }
}
// Nota: @PathVariable asigna el {empleadoId} a la variable Long empleadoId
